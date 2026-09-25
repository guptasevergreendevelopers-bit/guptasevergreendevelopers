import fs from 'fs';
import path from 'path';
import { articles } from '../src/data/articles.ts';

const distDir = path.resolve('dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('[generate-routes-seo] dist/index.html not found!');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Core Static Application Routes
const coreRoutes = [
  {
    path: 'about',
    title: "About Gupta's Evergreen | Construction Company in Dehradun",
    h1: "About Gupta's Evergreen Developers - Leading Construction Company in Dehradun",
    description: "Corporate dossier for GUPTA'S EVERGREEN DEVELOPERS LLP (LLPIN: ACP-3601, Inc. 23 June 2025, operating trade from 2012). Founded by Sunil Kumar Gupta & Vansh Gupta in Dehradun."
  },
  {
    path: 'services',
    title: "Construction Services in Dehradun | Gupta's Evergreen",
    h1: "Turnkey Construction Services & Architectural Design in Dehradun",
    description: "Specialized turnkey residential construction, architectural 3D elevations, MDDA map sanctions, commercial plazas, anti-seismic RCC structures, and modular interiors in Dehradun."
  },
  {
    path: 'packages',
    title: "Dehradun Home Build Rates & Packages | Gupta's Evergreen",
    h1: "House Construction Packages & Per Sq.Ft Build Rates in Dehradun",
    description: "Transparent ₹1,650 to ₹2,450/sq.ft turnkey house construction packages in Dehradun. Calculate your construction cost and milestone payments with zero price escalation."
  },
  {
    path: 'projects',
    title: "Construction Projects in Dehradun | Gupta's Evergreen",
    h1: "Completed Landmark Construction Projects in Dehradun & Mussoorie",
    description: "Explore our portfolio of 500+ luxury villas, commercial retail plazas, hillside duplexes, and anti-seismic RCC slab castings across Dehradun and Mussoorie."
  },
  {
    path: 'contact',
    title: "Contact Best Builders in Dehradun | Gupta's Evergreen",
    h1: "Contact Gupta's Evergreen Developers LLP at 105 Rajpur Road, Dehradun",
    description: "Contact Gupta's Evergreen Developers LLP at 105 Rajpur Road, Dehradun. Call +91 95483 93798 or book a complimentary on-site architectural evaluation for your plot."
  },
  {
    path: 'articles',
    title: "Construction Articles & Guides Dehradun | Gupta's",
    h1: "Construction Articles & Architectural Guides in Dehradun",
    description: "Expert guides on house construction, architects in Dehradun, MDDA approvals, anti-seismic RCC engineering, modular kitchens & luxury hill villas."
  }
];

// Helper to convert Article object to rich semantic HTML for crawlers and LLMs
function renderArticleSemanticHtml(article, canonicalUrl) {
  let html = `<article>\n`;
  html += `  <h1>${article.title}</h1>\n`;
  html += `  <p><strong>Published:</strong> ${article.publishedDate} | <strong>Author:</strong> ${article.author} | <strong>Category:</strong> ${article.category} | <strong>Read Time:</strong> ${article.readTime}</p>\n`;
  html += `  <p><em>${article.excerpt}</em></p>\n\n`;

  if (article.keyTakeaways && article.keyTakeaways.length > 0) {
    html += `  <section>\n    <h2>Key Takeaways & Executive Summary</h2>\n    <ul>\n`;
    for (const point of article.keyTakeaways) {
      html += `      <li>${point}</li>\n`;
    }
    html += `    </ul>\n  </section>\n\n`;
  }

  for (const s of article.sections) {
    html += `  <section>\n`;
    html += `    <h2>${s.heading}</h2>\n`;
    if (s.subheading) html += `    <h3>${s.subheading}</h3>\n`;
    for (const p of s.paragraphs) {
      html += `    <p>${p}</p>\n`;
    }
    if (s.checklist) {
      html += `    <ul>\n`;
      for (const item of s.checklist) {
        html += `      <li>${item}</li>\n`;
      }
      html += `    </ul>\n`;
    }
    if (s.table) {
      html += `    <table border="1">\n      <thead>\n        <tr>\n`;
      for (const h of s.table.headers) {
        html += `          <th>${h}</th>\n`;
      }
      html += `        </tr>\n      </thead>\n      <tbody>\n`;
      for (const row of s.table.rows) {
        html += `        <tr>\n`;
        for (const cell of row) {
          html += `          <td>${cell}</td>\n`;
        }
        html += `        </tr>\n`;
      }
      html += `      </tbody>\n    </table>\n`;
    }
    if (s.callout) {
      html += `    <blockquote><strong>${s.callout.title}</strong> (${s.callout.badge || 'Verified Note'}): ${s.callout.text}</blockquote>\n`;
    }
    if (s.authoritativeLinks) {
      html += `    <p><strong>Statutory & Regulatory References:</strong></p>\n    <ul>\n`;
      for (const link of s.authoritativeLinks) {
        html += `      <li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a> (${link.authority})</li>\n`;
      }
      html += `    </ul>\n`;
    }
    html += `  </section>\n\n`;
  }

  html += `  <footer>\n`;
  html += `    <p><strong>Company Reference:</strong> GUPTA'S EVERGREEN DEVELOPERS LLP (LLPIN: ACP-3601, Inc. 23 June 2025, operating trade dating to 2012, ROC Uttarakhand). Operating Headquarters: 105 Rajpur Road, Dehradun 248001. Direct Founder Lines: +91 95483 93798 / +91 76687 66118.</p>\n`;
  html += `    <p><a href="https://www.guptasevergreendevelopers.com/packages#calculator">Estimate Your House Construction Cost Online</a> | <a href="https://www.guptasevergreendevelopers.com/contact">Schedule a Free 24-Hour On-Site Architectural Evaluation</a></p>\n`;
  html += `  </footer>\n`;
  html += `</article>`;
  return html;
}

// 1. Generate Core Routes
for (const route of coreRoutes) {
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  const canonicalUrl = `https://www.guptasevergreendevelopers.com/${route.path}`;

  let html = baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<h1>.*?<\/h1>/, `<h1>${route.h1}</h1>`)
    .replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/, `<meta name="description" content="${route.description}" />`)
    .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/, `<meta property="og:title" content="${route.title}" />`)
    .replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/, `<meta property="og:description" content="${route.description}" />`)
    .replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta\s+property="twitter:title"\s+content=".*?"\s*\/?>/, `<meta property="twitter:title" content="${route.title}" />`)
    .replace(/<meta\s+property="twitter:description"\s+content=".*?"\s*\/?>/, `<meta property="twitter:description" content="${route.description}" />`)
    .replace(/<meta\s+property="twitter:url"\s+content=".*?"\s*\/?>/, `<meta property="twitter:url" content="${canonicalUrl}" />`);

  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
  console.log(`[generate-routes-seo] Generated dist/${route.path}/index.html`);
}

// 2. Clean up any stale direct directories
for (const art of articles) {
  const staleDirectDir = path.join(distDir, art.slug);
  if (fs.existsSync(staleDirectDir)) {
    fs.rmSync(staleDirectDir, { recursive: true, force: true });
  }
}

// 3. Generate 14 Unique Canonical Articles under /articles/[slug]
for (const art of articles) {
  const articleSubPath = `articles/${art.slug}`;
  const articleSubDir = path.join(distDir, articleSubPath);
  if (!fs.existsSync(articleSubDir)) {
    fs.mkdirSync(articleSubDir, { recursive: true });
  }

  const canonicalSubUrl = `https://www.guptasevergreendevelopers.com/${articleSubPath}`;
  const semanticContentSub = renderArticleSemanticHtml(art, canonicalSubUrl);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: art.title,
    description: art.metaDescription,
    image: `https://www.guptasevergreendevelopers.com${art.coverImage}`,
    author: {
      '@type': 'Person',
      name: art.author,
      jobTitle: 'Senior Civil Engineer & Designated Partner',
      worksFor: {
        '@type': 'Organization',
        name: "Gupta's Evergreen Developers LLP",
        url: 'https://www.guptasevergreendevelopers.com'
      }
    },
    publisher: {
      '@type': 'Organization',
      name: "Gupta's Evergreen Developers LLP",
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.guptasevergreendevelopers.com/images/drive_logo_full.png'
      }
    },
    datePublished: '2026-09-25',
    dateModified: '2026-09-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalSubUrl
    }
  };

  const schemaScriptTag = `<script type="application/ld+json">${JSON.stringify(articleJsonLd)}</script>`;

  let htmlSub = baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${art.seoTitle}</title>`)
    .replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/, `<meta name="description" content="${art.metaDescription}" />`)
    .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/, `<link rel="canonical" href="${canonicalSubUrl}" />\n    ${schemaScriptTag}`)
    .replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/, `<meta property="og:title" content="${art.seoTitle}" />`)
    .replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/, `<meta property="og:description" content="${art.metaDescription}" />`)
    .replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/, `<meta property="og:url" content="${canonicalSubUrl}" />`)
    .replace(/<meta\s+property="twitter:title"\s+content=".*?"\s*\/?>/, `<meta property="twitter:title" content="${art.seoTitle}" />`)
    .replace(/<meta\s+property="twitter:description"\s+content=".*?"\s*\/?>/, `<meta property="twitter:description" content="${art.metaDescription}" />`)
    .replace(/<meta\s+property="twitter:url"\s+content=".*?"\s*\/?>/, `<meta property="twitter:url" content="${canonicalSubUrl}" />`)
    .replace(
      /<div style="position: absolute; left: -9999px;.*?<\/div>/s,
      `<div style="position: absolute; left: -9999px; top: -9999px; width: 1px; height: 1px; overflow: hidden;" aria-hidden="true">\n${semanticContentSub}\n    </div>`
    );

  fs.writeFileSync(path.join(articleSubDir, 'index.html'), htmlSub, 'utf8');
}

console.log(`[generate-routes-seo] Successfully pre-generated static SEO pages for ${coreRoutes.length + articles.length} unique canonical routes.`);
