// Submit every sitemap URL to IndexNow (Bing, Yandex, Seznam, and partners).
// Run AFTER a production build + deploy: `node scripts/indexnow.mjs`
import { readFile } from 'node:fs/promises';

const KEY = '169f3df9acc8d4f32784ebfe19a6ac76';
const HOST = 'chothuethietbipmc.com';

const xml = await readFile(new URL('../out/sitemap.xml', import.meta.url), 'utf8');
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (!urls.length) {
  console.error('No URLs found in out/sitemap.xml — run `npm run build` first.');
  process.exit(1);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`IndexNow: ${res.status} ${res.statusText} — submitted ${urls.length} URLs`);
