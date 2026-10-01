import fs from 'fs';
import path from 'path';
import { articles } from '../src/data/articles.ts';
import { projects } from '../src/data/projects.ts';

const publicDir = path.resolve('public');
const distDir = path.resolve('dist');
const SITE_ORIGIN = 'https://guptasevergreendevelopers.com';

function escapeXml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// lastmod is derived from the real modification time of the files that produce each
// route. Hardcoded dates silently drift and under-report, which makes Google defer
// recrawls of pages that actually just changed.
const SHELL_SOURCES = ['index.html', 'src/App.tsx', 'src/index.css'];

function toDateStamp(ms) {
  const now = Date.now();
  // Never emit a future date (clock skew between build machines produces those).
  return new Date(Math.min(ms, now)).toISOString().slice(0, 10);
}

function lastmodFor(relPaths) {
  let newest = 0;
  for (const rel of relPaths) {
    const abs = path.resolve(rel);
    if (fs.existsSync(abs)) newest = Math.max(newest, fs.statSync(abs).mtimeMs);
  }
  return toDateStamp(newest || Date.now());
}

function urlFor(routePath) {
  return routePath === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${routePath}`;
}

// 14 Core Indexable Application Pages
const corePages = [
  { route: '/', sources: ['src/pages/HomePage.tsx'], img: '/images/drive_logo_gold.png', imgTitle: "Gupta's Evergreen Developers LLP Official Emblem" },
  { route: '/about', sources: ['src/pages/AboutPage.tsx'], img: '/images/image_04.jpeg', imgTitle: "Gupta's Evergreen Developers Corporate Headquarters" },
  { route: '/services', sources: ['src/pages/ServicesPage.tsx'], img: '/images/image_08.jpeg', imgTitle: 'Civil Construction & Architectural Engineering Dehradun' },
  { route: '/packages', sources: ['src/pages/PackagesPage.tsx', 'src/components/CostCalculator.tsx'], img: '/images/image_07.jpeg', imgTitle: 'House Construction Packages & Cost Calculator Dehradun' },
  { route: '/projects', sources: ['src/pages/ProjectsPage.tsx', 'src/data/projects.ts'], img: '/images/image_10.jpeg', imgTitle: 'Completed Landmark Construction Projects in Dehradun' },
  { route: '/contact', sources: ['src/pages/ContactPage.tsx'], img: '/images/drive_logo_full.png', imgTitle: '105 Rajpur Road Operating Executive Office' },
  { route: '/articles', sources: ['src/pages/ArticlesPage.tsx', 'src/data/articles.ts'], img: '/images/image_07.jpeg', imgTitle: 'Construction & Architectural Knowledge Guides' },
  { route: '/home-construction-dehradun', sources: ['src/pages/HomeConstructionPage.tsx'], img: '/images/image_03.jpeg', imgTitle: 'Residential Home Construction in Dehradun' },
  { route: '/turnkey-construction-dehradun', sources: ['src/pages/TurnkeyConstructionPage.tsx'], img: '/images/image_07.jpeg', imgTitle: 'Turnkey Design-Build Construction in Dehradun' },
  { route: '/builders-developers-dehradun', sources: ['src/pages/BuildersDevelopersPage.tsx'], img: '/images/image_08.jpeg', imgTitle: 'Builders & Developers in Dehradun Uttarakhand' },
  { route: '/construction-cost-dehradun', sources: ['src/pages/ConstructionCostPage.tsx', 'src/components/CostCalculator.tsx'], img: '/images/image_07.jpeg', imgTitle: 'House Construction Cost Rates in Dehradun' },
  { route: '/villa-construction-dehradun', sources: ['src/pages/VillaConstructionPage.tsx'], img: '/images/image_03.jpeg', imgTitle: 'Luxury Villa Construction in Dehradun & Mussoorie' },
  { route: '/commercial-construction-dehradun', sources: ['src/pages/CommercialConstructionPage.tsx'], img: '/images/image_10.jpeg', imgTitle: 'Commercial Construction & Plazas in Dehradun' },
  { route: '/home-renovation-dehradun', sources: ['src/pages/HomeRenovationPage.tsx'], img: '/images/image_11.jpeg', imgTitle: 'Home Renovation & Remodeling in Dehradun' }
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n`;

// 1. Core Pages
for (const p of corePages) {
  xml += `  <url>\n`;
  xml += `    <loc>${urlFor(p.route)}</loc>\n`;
  xml += `    <lastmod>${lastmodFor([...SHELL_SOURCES, ...p.sources])}</lastmod>\n`;
  if (p.img) {
    const localImagePath = path.join(publicDir, p.img);
    if (fs.existsSync(localImagePath)) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${SITE_ORIGIN}${p.img}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(p.imgTitle)}</image:title>\n`;
      xml += `    </image:image>\n`;
    }
  }
  xml += `  </url>\n\n`;
}

// 2. 14 Unique Canonical Articles under /articles/[slug]
for (const a of articles) {
  xml += `  <url>\n`;
  xml += `    <loc>${urlFor(`/articles/${a.slug}`)}</loc>\n`;
  xml += `    <lastmod>${lastmodFor([...SHELL_SOURCES, 'src/data/articles.ts'])}</lastmod>\n`;
  if (a.coverImage) {
    const localImagePath = path.join(publicDir, a.coverImage);
    if (fs.existsSync(localImagePath)) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${SITE_ORIGIN}${a.coverImage}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(a.title)}</image:title>\n`;
      xml += `    </image:image>\n`;
    }
  }
  xml += `  </url>\n\n`;
}

// 3. 10 Real Project Evidence Pages under /projects/[slug]
for (const proj of projects) {
  xml += `  <url>\n`;
  xml += `    <loc>${urlFor(`/projects/${proj.slug}`)}</loc>\n`;
  xml += `    <lastmod>${lastmodFor([...SHELL_SOURCES, 'src/data/projects.ts'])}</lastmod>\n`;
  const imgUrl = proj.images[0]?.url;
  if (imgUrl) {
    const localImagePath = path.join(publicDir, imgUrl);
    if (fs.existsSync(localImagePath)) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${SITE_ORIGIN}${imgUrl}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(proj.name)}</image:title>\n`;
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
console.log(`[generate-sitemap] Successfully generated valid XML sitemap with ${corePages.length + articles.length + projects.length} canonical URLs.`);