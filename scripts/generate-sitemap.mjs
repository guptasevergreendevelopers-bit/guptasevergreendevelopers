import fs from 'fs';
import path from 'path';
import { articles } from '../src/data/articles.ts';

const publicDir = path.resolve('public');
const distDir = path.resolve('dist');

function escapeXml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// 7 Core Indexable Application Pages
const corePages = [
  {
    loc: 'https://www.guptasevergreendevelopers.com/',
    lastmod: '2026-09-25',
    img: '/images/drive_logo_gold.png',
    imgTitle: "Gupta's Evergreen Developers LLP Official Emblem"
  },
  {
    loc: 'https://www.guptasevergreendevelopers.com/about',
    lastmod: '2026-09-25',
    img: '/images/image_04.jpeg',
    imgTitle: "Gupta's Evergreen Developers Corporate Headquarters"
  },
  {
    loc: 'https://www.guptasevergreendevelopers.com/services',
    lastmod: '2026-09-25',
    img: '/images/image_08.jpeg',
    imgTitle: 'Civil Construction & Architectural Engineering Dehradun'
  },
  {
    loc: 'https://www.guptasevergreendevelopers.com/packages',
    lastmod: '2026-09-25',
    img: '/images/image_07.jpeg',
    imgTitle: 'House Construction Packages & Cost Calculator Dehradun'
  },
  {
    loc: 'https://www.guptasevergreendevelopers.com/projects',
    lastmod: '2026-09-25',
    img: '/images/image_10.jpeg',
    imgTitle: 'Completed Landmark Construction Projects in Dehradun'
  },
  {
    loc: 'https://www.guptasevergreendevelopers.com/contact',
    lastmod: '2026-09-25',
    img: '/images/drive_logo_full.png',
    imgTitle: '105 Rajpur Road Operating Executive Office'
  },
  {
    loc: 'https://www.guptasevergreendevelopers.com/articles',
    lastmod: '2026-09-25',
    img: '/images/image_07.jpeg',
    imgTitle: 'Construction & Architectural Knowledge Guides'
  }
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n`;

// 1. Core Pages
for (const p of corePages) {
  xml += `  <url>\n`;
  xml += `    <loc>${p.loc}</loc>\n`;
  xml += `    <lastmod>${p.lastmod}</lastmod>\n`;
  if (p.img) {
    const localImagePath = path.join(publicDir, p.img);
    if (fs.existsSync(localImagePath)) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>https://www.guptasevergreendevelopers.com${p.img}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(p.imgTitle)}</image:title>\n`;
      xml += `    </image:image>\n`;
    }
  }
  xml += `  </url>\n\n`;
}

// 2. 14 Unique Canonical Articles under /articles/[slug]
for (const a of articles) {
  const loc = `https://www.guptasevergreendevelopers.com/articles/${a.slug}`;
  xml += `  <url>\n`;
  xml += `    <loc>${loc}</loc>\n`;
  xml += `    <lastmod>${a.publishedDate.includes('2026') ? '2026-09-25' : '2026-09-25'}</lastmod>\n`;
  if (a.coverImage) {
    const localImagePath = path.join(publicDir, a.coverImage);
    if (fs.existsSync(localImagePath)) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>https://www.guptasevergreendevelopers.com${a.coverImage}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(a.title)}</image:title>\n`;
      xml += `    </image:image>\n`;
    }
  }
  xml += `  </url>\n\n`;
}

xml += `</urlset>\n`;

// Validate XML before writing
const unescapedAmp = xml.match(/&(?!(amp|lt|gt|quot|apos);)/g);
if (unescapedAmp) {
  console.error('[generate-sitemap] ERROR: Unescaped ampersands found:', unescapedAmp);
  process.exit(1);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
}
console.log(`[generate-sitemap] Successfully generated valid XML sitemap with ${corePages.length + articles.length} canonical URLs.`);
