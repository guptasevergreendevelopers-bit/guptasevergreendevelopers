import fs from 'fs';
import path from 'path';
import { ConvexHttpClient } from 'convex/browser';
import { api } from './convex/_generated/api.js';

const client = new ConvexHttpClient('https://doting-hornet-268.convex.cloud');
const distDir = path.resolve('dist');

const getMime = (file) => {
  if (file.endsWith('.html')) return 'text/html; charset=utf-8';
  if (file.endsWith('.css')) return 'text/css; charset=utf-8';
  if (file.endsWith('.js')) return 'application/javascript; charset=utf-8';
  if (file.endsWith('.png')) return 'image/png';
  if (file.endsWith('.jpg') || file.endsWith('.jpeg')) return 'image/jpeg';
  if (file.endsWith('.svg')) return 'image/svg+xml';
  if (file.endsWith('.xml')) return 'application/xml; charset=utf-8';
  if (file.endsWith('.txt') || file === 'CNAME') return 'text/plain; charset=utf-8';
  return 'application/octet-stream';
};

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(walk(full));
    } else {
      results.push(full);
    }
  }
  return results;
};

const allFiles = walk(distDir);
console.log(`Uploading ${allFiles.length} files to Convex hosting...`);

for (const filePath of allFiles) {
  const rel = '/' + path.relative(distDir, filePath).replace(/\\/g, '/');
  const mime = getMime(filePath);
  const content = fs.readFileSync(filePath);
  const size = content.length;

  const uploadUrl = await client.mutation(api.files.generateUploadUrl, {});
  const res = await fetch(uploadUrl, {
    method: 'POST',
    headers: { 'Content-Type': mime },
    body: content
  });
  const { storageId } = await res.json();

  await client.mutation(api.files.saveFile, {
    path: rel,
    storageId,
    contentType: mime,
    size
  });

  console.log(`  ✓ ${rel} (${size} B)`);
}

console.log('✓ All files deployed to Convex: https://doting-hornet-268.convex.site');
