import fs from 'fs';
import path from 'path';
import { articles } from '../src/data/articles.ts';

const publicDir = path.resolve('public');
const distDir = path.resolve('dist');

const corePages = [
  { loc: 'https://www.guptasevergreendevelopers.com/', priority: '1.0', changefreq: 'weekly', title: "Gupta's Evergreen Developers Emblem", img: '/images/drive_logo_gold.png' },
  { loc: 'https://www.guptasevergreendevelopers.com/about', priority: '0.9', changefreq: 'monthly', title: "Gupta's Evergreen Developers Corporate Office", img: '/images/image_04.jpeg' },
  { loc: 'https://www.guptasevergreendevelopers.com/services', priority: '0.95', changefreq: 'weekly', title: 'Civil Construction & Architectural Design Dehradun', img: '/images/image_08.jpeg' },
  { loc: 'https://www.guptasevergreendevelopers.com/packages', priority: '0.95', changefreq: 'weekly', title: 'House Construction Packages & Cost Calculator', img: '/images/image_07.jpeg' },
  { loc: 'https://www.guptasevergreendevelopers.com/projects', priority: '0.9', changefreq: 'weekly', title: 'Completed Landmark Projects in Dehradun', img: '/images/image_10.jpeg' },
  { loc: 'https://www.guptasevergreendevelopers.com/contact', priority: '0.85', changefreq: 'monthly', title: '105 Rajpur Road Operating Office', img: '/images/drive_logo_full.png' },
  { loc: 'https://www.guptasevergreendevelopers.com/articles', priority: '0.9', changefreq: 'weekly', title: 'Construction & Architecture Knowledge Center', img: '/images/image_07.jpeg' }
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n`;

for (const p of corePages) {
  xml += `  <url>\n`;
  xml += `    <loc>${p.loc}</loc>\n`;
  xml += `    <lastmod>2026-09-25</lastmod>\n`;
  xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
  xml += `    <priority>${p.priority}</priority>\n`;
    if (p.img) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>https://www.guptasevergreendevelopers.com${p.img}</image:loc>\n`;
      xml += `      <image:title>${p.title.replace(/&/g, '&amp;')}</image:title>\n`;
      xml += `    </image:image>\n`;
    }
  xml += `  </url>\n\n`;
}

// 1. Articles under /articles/[slug]
for (const a of articles) {
  const loc = `https://www.guptasevergreendevelopers.com/articles/${a.slug}`;
  xml += `  <url>\n`;
  xml += `    <loc>${loc}</loc>\n`;
  xml += `    <lastmod>2026-09-25</lastmod>\n`;
  xml += `    <changefreq>monthly</changefreq>\n`;
  xml += `    <priority>0.85</priority>\n`;
  xml += `    <image:image>\n`;
  xml += `      <image:loc>https://www.guptasevergreendevelopers.com${a.coverImage}</image:loc>\n`;
  xml += `      <image:title>${a.title.replace(/&/g, '&amp;')}</image:title>\n`;
  xml += `    </image:image>\n`;
  xml += `  </url>\n\n`;
}

// 2. Direct Authoritative Landing Pages /[slug]
for (const a of articles) {
  const loc = `https://www.guptasevergreendevelopers.com/${a.slug}`;
  xml += `  <url>\n`;
  xml += `    <loc>${loc}</loc>\n`;
  xml += `    <lastmod>2026-09-25</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.9</priority>\n`;
  xml += `    <image:image>\n`;
  xml += `      <image:loc>https://www.guptasevergreendevelopers.com${a.coverImage}</image:loc>\n`;
  xml += `      <image:title>${a.title.replace(/&/g, '&amp;')}</image:title>\n`;
  xml += `    </image:image>\n`;
  xml += `  </url>\n\n`;
}

xml += `</urlset>\n`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
}
console.log(`[generate-sitemap] Generated public/sitemap.xml with ${corePages.length + articles.length * 2} URLs.`);
