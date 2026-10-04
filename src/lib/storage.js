// Production CMS data must survive replacement of the application checkout.
import { accessSync, constants, mkdirSync, realpathSync, statSync } from 'node:fs';
import path from 'node:path';

let releaseBuild = false;
export const enableReleaseBuild = () => { releaseBuild = true; };
export const isReleaseBuild = () => releaseBuild;
export const isProductionRuntime = (env = process.env, buildOnly = false) => env.NODE_ENV === 'production' && !buildOnly;
const inside = (parent, candidate) => {
  const relative = path.relative(parent, candidate);
  return relative === '' || (relative !== '..' && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative));
};
function hostingerUnsafeRoots(appRoot) {
  const parts = appRoot.split(path.sep);
  const release = parts.findIndex((part, index) => part === 'hbuilds' && parts[index + 1] === 'versions' && parts[index + 2] && parts[index + 3] === 'nodejs');
  if (release < 0) return [];
  const domain = parts.slice(0, release).join(path.sep) || path.parse(appRoot).root;
  return ['hbuilds', 'public_html'].flatMap((name) => {
    const boundary = path.join(domain, name);
    // public_html may itself be a symlink: protect both the public URL tree
    // and its physical target, even when that target lies outside hbuilds.
    try { return [boundary, realpathSync(boundary)]; } catch { return [boundary]; }
  });
}

export function resolveDataDir({ root, env = process.env, buildOnly = false }) {
  const configured = env.DATA_DIR || env.BOOKING_STORAGE_DIR;
  const directory = path.resolve(root, configured || 'storage');
  // Release builds may not have a persistent volume mounted. They only read content;
  // the runtime rebuilds from the validated CMS store before accepting requests.
  if (buildOnly) return directory;
  const production = isProductionRuntime(env);
  if (production && (!configured || !path.isAbsolute(configured))) {
    throw new Error('CMS storage: production requires an explicit absolute DATA_DIR outside the application checkout.');
  }
  try {
    if (!production) mkdirSync(directory, { recursive: true });
    if (!statSync(directory).isDirectory()) throw new Error('not a directory');
    if (production) {
      const appRoots = [...new Set([path.resolve(root), realpathSync(root)])];
      const dataRoot = realpathSync(directory);
      const hostingerRoots = appRoots.flatMap(hostingerUnsafeRoots);
      const unsafeCheckout = (candidate) => appRoots.some((boundary) => inside(boundary, candidate));
      const unsafeHostinger = (candidate) => hostingerRoots.some((boundary) => inside(boundary, candidate));
      if (unsafeCheckout(directory) || unsafeCheckout(dataRoot)) throw new Error('production DATA_DIR is inside the application checkout');
      if (unsafeHostinger(directory) || unsafeHostinger(dataRoot)) {
        throw new Error('Hostinger production DATA_DIR must be outside the domain hbuilds and public_html directories');
      }
      for (const name of ['content', 'media', 'history', 'bookings']) {
        let target;
        try { target = realpathSync(path.join(directory, name)); }
        catch (error) { if (error.code === 'ENOENT') continue; throw error; }
        if (!inside(dataRoot, target) || unsafeCheckout(target) || unsafeHostinger(target)) {
          throw new Error(`production ${name}/ must remain inside DATA_DIR and outside deployment/public directories`);
        }
      }
    }
    accessSync(directory, constants.R_OK | constants.W_OK | constants.X_OK);
  } catch (error) {
    throw new Error(`CMS storage: cannot use DATA_DIR=${directory}: ${error.code || error.message}. Refusing to fall back or create a replacement production store.`, { cause: error });
  }
  return directory;
}
