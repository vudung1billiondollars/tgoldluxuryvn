import test from 'node:test';
import assert from 'node:assert/strict';
import { accessSync, constants, chmodSync, cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const sourceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const temporary = realpathSync(mkdtempSync(path.join(tmpdir(), 'tgold-data-tests-')));
const root = path.join(temporary, 'app');
mkdirSync(root);
// Every application import/build/default-storage operation targets this owned
// fixture. Never copy the developer's .env, storage, dist or .git into tests.
for (const name of ['src', 'scripts', 'admin', 'content', 'public', 'server.js', 'package.json', 'package-lock.json']) {
  const source = path.join(sourceRoot, name);
  if (existsSync(source)) cpSync(source, path.join(root, name), { recursive: true });
}
// Dependencies are read-only inputs; the app's code, content and output are copies.
const dependencies = path.join(sourceRoot, 'node_modules');
if (existsSync(dependencies)) symlinkSync(dependencies, path.join(root, 'node_modules'), 'dir');
const { resolveDataDir } = await import(pathToFileURL(path.join(root, 'src/lib/storage.js')).href);
const removeOwned = (target) => {
  const relative = path.relative(temporary, target);
  assert.ok(relative === '' || (relative !== '..' && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative)), `Refusing to remove a path outside the test fixture: ${target}`);
  rmSync(target, { recursive: true, force: true });
};
const env = (overrides = {}) => {
  const result = { ...process.env };
  for (const name of ['DATA_DIR', 'BOOKING_STORAGE_DIR', 'NODE_ENV']) delete result[name];
  return { ...result, ...overrides };
};
const run = (overrides, code) => spawnSync(process.execPath, ['--input-type=module', '-e', code], { cwd: root, env: env(overrides), encoding: 'utf8', timeout: 30000 });
const files = ['site.json', 'products.json', 'journal.json', 'home.json', 'pages.json', 'models3d.json'];
const newStore = (label) => {
  const directory = path.join(temporary, label);
  mkdirSync(directory);
  return directory;
};
const provision = (label) => {
  const directory = newStore(label);
  cpSync(path.join(root, 'content'), path.join(directory, 'content'), { recursive: true });
  return directory;
};
const hashes = (directory) => Object.fromEntries(files.map((file) => [file, createHash('sha256').update(readFileSync(path.join(directory, 'content', file))).digest('hex')]));
const production = (directory) => ({ NODE_ENV: 'production', DATA_DIR: directory });
const importContent = "const content = await import('./src/lib/content.js'); console.log(content.contentDir());";

test.after(() => removeOwned(temporary));

test('fixture excludes the source checkout private data and output directories', () => {
  for (const name of ['.env', 'storage', 'dist', '.git']) assert.equal(existsSync(path.join(root, name)), false);
  assert.notEqual(root, sourceRoot);
});

test('production rejects absent and relative DATA_DIR without creating storage', () => {
  for (const overrides of [{ NODE_ENV: 'production' }, { NODE_ENV: 'production', DATA_DIR: 'storage' }, { NODE_ENV: 'production', TGOLD_CONTENT_MODE: 'build' }]) {
    const result = run(overrides, importContent);
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /explicit absolute DATA_DIR/);
  }
  assert.equal(existsSync(path.join(root, 'storage')), false);
});

test('production rejects nonexistent or non-directory stores without creating replacements', () => {
  const missing = path.join(temporary, 'missing');
  assert.throws(() => resolveDataDir({ root, env: production(missing) }), /Refusing to fall back/);
  assert.equal(existsSync(missing), false);
  const file = path.join(temporary, 'file');
  writeFileSync(file, 'keep');
  assert.throws(() => resolveDataDir({ root, env: production(file) }), /not a directory/);
  assert.equal(readFileSync(file, 'utf8'), 'keep');
});

test('production rejects checkout paths and symlinks pointing into the checkout', () => {
  const target = path.join(root, 'inside-data');
  mkdirSync(target);
  const link = path.join(temporary, 'linked-inside');
  symlinkSync(target, link);
  try {
    for (const directory of [root, target, link]) {
      assert.throws(() => resolveDataDir({ root, env: production(directory) }), /inside the application checkout/);
    }
  } finally { removeOwned(target); }
});

test('Hostinger rejects sibling releases, shared hbuilds storage and public_html', () => {
  const domain = path.join(temporary, 'hostinger-domain');
  const app = path.join(domain, 'hbuilds', 'versions', 'release-1', 'nodejs');
  mkdirSync(app, { recursive: true });
  const forbidden = [
    path.join(domain, 'hbuilds'),
    path.join(domain, 'hbuilds', 'data'),
    path.join(domain, 'hbuilds', 'versions', 'release-2', 'storage'),
    path.join(domain, 'public_html'),
    path.join(domain, 'public_html', 'cms-data'),
  ];
  for (const directory of forbidden) {
    mkdirSync(directory, { recursive: true });
    assert.throws(() => resolveDataDir({ root: app, env: production(directory) }), /outside the domain hbuilds and public_html/);
  }
  const releaseAlias = path.join(temporary, 'hostinger-release-alias');
  const dataAlias = path.join(temporary, 'hostinger-public-alias');
  symlinkSync(app, releaseAlias);
  symlinkSync(forbidden.at(-1), dataAlias);
  assert.throws(() => resolveDataDir({ root: releaseAlias, env: production(dataAlias) }), /outside the domain hbuilds and public_html/);
  const persistent = path.join(domain, 'tgold-data');
  mkdirSync(persistent);
  assert.equal(resolveDataDir({ root: releaseAlias, env: production(persistent) }), persistent);
});

test('Hostinger rejects the physical target of a symlinked public_html', () => {
  const domain = path.join(temporary, 'hostinger-public-symlink-domain');
  const app = path.join(domain, 'hbuilds', 'versions', 'release-1', 'nodejs');
  const served = newStore('externally-served-data');
  mkdirSync(app, { recursive: true });
  symlinkSync(served, path.join(domain, 'public_html'));
  assert.throws(() => resolveDataDir({ root: app, env: production(served) }), /outside the domain hbuilds and public_html/);
});

test('Hostinger boundaries survive when hbuilds is itself a symlink', () => {
  const domain = path.join(temporary, 'hostinger-hbuilds-symlink-domain');
  const physical = path.join(temporary, 'physical-release-store');
  const physicalApp = path.join(physical, 'versions', 'release-1', 'nodejs');
  mkdirSync(domain);
  mkdirSync(physicalApp, { recursive: true });
  symlinkSync(physical, path.join(domain, 'hbuilds'));
  const app = path.join(domain, 'hbuilds', 'versions', 'release-1', 'nodejs');
  const sibling = path.join(physical, 'versions', 'release-2', 'storage');
  const publiclyServed = path.join(domain, 'public_html', 'cms-data');
  for (const directory of [sibling, publiclyServed]) {
    mkdirSync(directory, { recursive: true });
    assert.throws(() => resolveDataDir({ root: app, env: production(directory) }), /outside the domain hbuilds and public_html/);
  }
  const persistent = path.join(domain, 'cms-data', 'live');
  mkdirSync(persistent, { recursive: true });
  assert.equal(resolveDataDir({ root: app, env: production(persistent) }), persistent);
});

test('production storage subdirectory symlinks cannot escape the selected DATA_DIR', () => {
  for (const name of ['content', 'media', 'history', 'bookings']) {
    const directory = newStore(`store-subdir-${name}`);
    symlinkSync(path.join(root, 'content'), path.join(directory, name));
    assert.throws(() => resolveDataDir({ root, env: production(directory) }), /must remain inside DATA_DIR/);
  }
  const privateStore = newStore('store-subdir-internal-link');
  const privateMedia = path.join(privateStore, 'private-media');
  mkdirSync(privateMedia);
  symlinkSync(privateMedia, path.join(privateStore, 'media'));
  // Missing legacy directories are not required, and internal links stay private.
  assert.equal(resolveDataDir({ root, env: production(privateStore) }), privateStore);
});

test('generic deployments retain ordinary outside-checkout directory behavior', () => {
  const domain = path.join(temporary, 'generic-domain');
  const app = path.join(domain, 'app');
  const sibling = path.join(domain, 'public_html', 'private-data');
  mkdirSync(app, { recursive: true });
  mkdirSync(sibling, { recursive: true });
  assert.equal(resolveDataDir({ root: app, env: production(sibling) }), sibling);
});

test('explicit unwritable paths fail in production and development, with no fallback', (context) => {
  const directory = newStore('read-only');
  chmodSync(directory, 0o555);
  try {
    try { accessSync(directory, constants.W_OK); context.skip('The current OS user bypasses directory permissions.'); return; } catch {}
    assert.throws(() => resolveDataDir({ root, env: production(directory) }), /Refusing to fall back/);
    assert.throws(() => resolveDataDir({ root, env: { DATA_DIR: directory, NODE_ENV: 'development' } }), /Refusing to fall back/);
    assert.equal(existsSync(path.join(root, 'storage')), false);
  } finally { chmodSync(directory, 0o755); }
});

test('an invalid explicit development path does not silently use storage', () => {
  const file = path.join(temporary, 'blocking-file');
  writeFileSync(file, 'keep');
  const result = run({ NODE_ENV: 'development', DATA_DIR: path.join(file, 'child') }, importContent);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Refusing to fall back/);
  assert.equal(existsSync(path.join(root, 'storage')), false);
});

test('production rejects empty and partially missing content without copying any seed', () => {
  const empty = newStore('empty');
  const result = run(production(empty), importContent);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /production does not initialize/);
  assert.equal(existsSync(path.join(empty, 'content')), false);
  const partial = provision('partial');
  removeOwned(path.join(partial, 'content', 'products.json'));
  const partialResult = run(production(partial), importContent);
  assert.notEqual(partialResult.status, 0);
  assert.match(partialResult.stderr, /products.json/);
  assert.equal(existsSync(path.join(partial, 'content', 'products.json')), false);
});

test('valid persisted data is loaded unchanged; missing files after startup cannot be reseeded', () => {
  const directory = provision('persisted');
  const siteFile = path.join(directory, 'content', 'site.json');
  const site = JSON.parse(readFileSync(siteFile, 'utf8'));
  site.guardTestValue = 'CMS content survives';
  writeFileSync(siteFile, JSON.stringify(site));
  const before = hashes(directory);
  const result = run(production(directory), "const c = await import('./src/lib/content.js'); c.seedLiveContent(); c.loadContent(c.REPO_CONTENT); console.log(c.site.guardTestValue);");
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /CMS content survives/);
  assert.deepEqual(hashes(directory), before);
  const afterRemoval = run(production(directory), "const c = await import('./src/lib/content.js'); const fs = await import('node:fs'); fs.unlinkSync(c.LIVE_CONTENT + '/products.json'); try { c.seedLiveContent(); process.exitCode = 2; } catch (error) { console.log(error.message); }");
  assert.equal(afterRemoval.status, 0, afterRemoval.stderr);
  assert.match(afterRemoval.stdout, /production does not initialize/);
  assert.equal(existsSync(path.join(directory, 'content', 'products.json')), false);
});

test('production never reads seed if a persisted file vanishes between the guard and read', () => {
  const directory = provision('read-race');
  const code = `
    const c = await import('./src/lib/content.js');
    const fs = (await import('node:fs')).default;
    const { syncBuiltinESMExports } = await import('node:module');
    const original = fs.existsSync;
    let removed = false;
    fs.existsSync = (file) => {
      const exists = original(file);
      if (!removed && String(file).endsWith('/models3d.json')) {
        fs.unlinkSync(c.LIVE_CONTENT + '/products.json');
        removed = true;
      }
      return exists;
    };
    syncBuiltinESMExports();
    try { c.loadContent(); process.exitCode = 2; }
    catch (error) { console.log(error.code); }
    finally { fs.existsSync = original; syncBuiltinESMExports(); }
  `;
  const result = run(production(directory), code);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /ENOENT/);
  assert.equal(existsSync(path.join(directory, 'content', 'products.json')), false);
});

test('development still deliberately initializes a new local CMS store', () => {
  const directory = path.join(temporary, 'development');
  const result = run({ NODE_ENV: 'development', DATA_DIR: directory }, "const c = await import('./src/lib/content.js'); c.seedLiveContent(); console.log(c.contentDir());");
  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stdout.trim(), path.join(directory, 'content'));
  for (const file of files) assert.equal(readFileSync(path.join(directory, 'content', file), 'utf8'), readFileSync(path.join(root, 'content', file), 'utf8'));
});

test('offline production build renders seed without requiring or creating runtime storage', () => {
  const missing = path.join(temporary, 'build-volume-not-mounted');
  const result = spawnSync(process.execPath, ['scripts/build.mjs'], { cwd: root, env: env(production(missing)), encoding: 'utf8', timeout: 30000 });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Build xong/);
  assert.match(result.stdout, /nội dung từ content\)/);
  assert.equal(existsSync(missing), false);
  assert.equal(existsSync(path.join(root, 'storage')), false);
  assert.equal(existsSync(path.join(root, 'dist', 'index.html')), true);
});

test('release build uses an available persisted store without changing its bytes', () => {
  const directory = provision('build-persisted');
  const before = hashes(directory);
  const result = spawnSync(process.execPath, ['scripts/build.mjs'], { cwd: root, env: env(production(directory)), encoding: 'utf8', timeout: 30000 });
  assert.equal(result.status, 0, result.stderr);
  assert.ok(result.stdout.includes(path.relative(root, path.join(directory, 'content'))));
  assert.deepEqual(hashes(directory), before);
});

test('Passenger-style require(server.js) completes startup with persisted data and preserves CMS bytes', () => {
  const directory = provision('passenger');
  const before = hashes(directory);
  // The test sandbox cannot bind a socket. Stub only listen(), while retaining
  // CommonJS require(), all ESM imports, storage checks and the startup rebuild.
  const code = "const http = require('node:http'); http.Server.prototype.listen = function(port, callback) { callback(); return this; }; require('./server.js'); setTimeout(() => process.exit(0), 2000);";
  const result = spawnSync(process.execPath, ['-e', code], { cwd: root, env: env({ ...production(directory), PORT: '3001', ADMIN_PASSWORD: 'test-password-for-isolated-store' }), encoding: 'utf8', timeout: 30000 });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /T Gold đang chạy/);
  assert.doesNotMatch(result.stderr, /ERR_REQUIRE_ASYNC_MODULE/);
  assert.deepEqual(hashes(directory), before);
});

test('development still supports default checkout-local storage', () => {
  const directory = path.join(root, 'storage');
  try {
    const result = run({ NODE_ENV: 'development' }, "const c = await import('./src/lib/content.js'); c.seedLiveContent(); console.log(c.DATA_DIR);");
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stdout.trim(), directory);
    for (const file of files) assert.equal(existsSync(path.join(directory, 'content', file)), true);
  } finally { removeOwned(directory); }
});
