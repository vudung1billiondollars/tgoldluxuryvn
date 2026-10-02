// Sao lưu nội dung CMS lên GitHub (tuỳ chọn). Cần GITHUB_TOKEN (fine-grained, quyền Contents: Read & write) + GITHUB_REPO.
// Mỗi lần lưu trong CMS, các tệp thay đổi được gom lại và commit sau 20 giây thành một commit duy nhất.
import { readFile } from 'node:fs/promises';

const API = 'https://api.github.com';
const token = () => process.env.GITHUB_TOKEN || '';
const repo = () => process.env.GITHUB_REPO || '';
const branch = () => process.env.GITHUB_BRANCH || 'main';

export const status = { enabled: false, repo: '', branch: '', lastSync: null, lastCommit: null, lastError: null, pending: 0, running: false };
const pending = new Map(); // đường dẫn trong repo → đường dẫn tệp trên máy chủ
let timer = null;

export function refreshStatus() {
  status.enabled = !!(token() && /^[\w.-]+\/[\w.-]+$/.test(repo()));
  status.repo = repo();
  status.branch = branch();
  status.pending = pending.size;
  return status;
}

export function queue(repoPath, localPath) {
  if (!refreshStatus().enabled) return;
  pending.set(repoPath, localPath);
  status.pending = pending.size;
  clearTimeout(timer);
  timer = setTimeout(() => syncNow().catch(() => {}), 20000);
}

async function gh(method, path, body) {
  const res = await fetch(API + path, {
    method,
    headers: { Authorization: `Bearer ${token()}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'tgold-cms', ...(body && { 'Content-Type': 'application/json' }) },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`GitHub ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res.json();
}

export async function syncNow(message) {
  refreshStatus();
  if (!status.enabled) throw new Error('Chưa cấu hình GITHUB_TOKEN / GITHUB_REPO.');
  if (status.running || !pending.size) return status;
  clearTimeout(timer);
  status.running = true;
  const items = [...pending];
  pending.clear();
  try {
    const R = `/repos/${repo()}`;
    const ref = await gh('GET', `${R}/git/ref/heads/${encodeURIComponent(branch())}`);
    const base = ref.object.sha;
    const baseCommit = await gh('GET', `${R}/git/commits/${base}`);
    const tree = [];
    for (const [p, local] of items) {
      const blob = await gh('POST', `${R}/git/blobs`, { content: (await readFile(local)).toString('base64'), encoding: 'base64' });
      tree.push({ path: p, mode: '100644', type: 'blob', sha: blob.sha });
    }
    const newTree = await gh('POST', `${R}/git/trees`, { base_tree: baseCommit.tree.sha, tree });
    const commit = await gh('POST', `${R}/git/commits`, { message: message || `CMS: cập nhật nội dung (${items.length} tệp)`, tree: newTree.sha, parents: [base] });
    await gh('PATCH', `${R}/git/refs/heads/${encodeURIComponent(branch())}`, { sha: commit.sha });
    Object.assign(status, { lastSync: new Date().toISOString(), lastCommit: commit.sha.slice(0, 7), lastError: null });
  } catch (err) {
    for (const [p, l] of items) if (!pending.has(p)) pending.set(p, l); // giữ lại để thử lần sau
    status.lastError = err.message;
    console.error('[github] Đồng bộ lỗi:', err.message);
  } finally {
    status.running = false;
    status.pending = pending.size;
  }
  return status;
}
