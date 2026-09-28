import fs from 'fs';
import path from 'path';
import { articles } from '../src/data/articles.ts';
import { projects } from '../src/data/projects.ts';

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
    title: "Construction Projects Evidence Hub Dehradun | Gupta's Evergreen",
    h1: "Verified Construction Landmarks & Active Sites in Dehradun & Mussoorie",
    description: "Official construction evidence hub of Gupta's Evergreen Developers LLP. Verified photography of completed luxury villas, anti-seismic RCC slab castings, commercial frameworks, and modular interiors."
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
  },
  {
    path: 'home-construction-dehradun',
    title: "Home Construction Company in Dehradun | Custom House Builders",
    h1: "Home Construction Company in Dehradun",
    description: "Planning to build a home in Dehradun? Gupta's Evergreen Developers provides comprehensive residential construction, anti-seismic RCC engineering, and transparent pricing across the Doon Valley."
  },
  {
    path: 'turnkey-construction-dehradun',
    title: "Turnkey Construction in Dehradun | Design-Build Contractors",
    h1: "Turnkey Construction in Dehradun",
    description: "Looking for complete turnkey construction in Dehradun? Gupta's Evergreen Developers manages architectural planning, MDDA approvals, structural casting, and turnkey handover under one contract."
  },
  {
    path: 'builders-developers-dehradun',
    title: "Builders and Developers in Dehradun | Licensed Civil Contractors",
    h1: "Builders and Developers in Dehradun",
    description: "Looking for reliable builders and developers in Dehradun? Gupta's Evergreen Developers provides licensed civil contracting, residential development, and MDDA compliance across Uttarakhand."
  },
  {
    path: 'construction-cost-dehradun',
    title: "House Construction Cost in Dehradun | 2026 Calculator",
    h1: "House Construction Cost in Dehradun",
    description: "Transparent 2026 house construction cost per sq ft in Dehradun. Explore packages from ₹1,650 to ₹2,450/sq ft with locked BOQ pricing, material specifications, and instant cost calculator."
  },
  {
    path: 'villa-construction-dehradun',
    title: "Luxury Villa Construction in Dehradun | Custom Builders",
    h1: "Luxury Villa Construction in Dehradun",
    description: "Bespoke luxury villa construction in Dehradun and the Mussoorie foothills. Featuring earthquake-resistant ductile frames, panoramic glass elevations, and premium hill-estate finishes."
  },
  {
    path: 'commercial-construction-dehradun',
    title: "Commercial Construction in Dehradun | Retail & Offices",
    h1: "Commercial Construction Company in Dehradun",
    description: "Experienced commercial builders in Dehradun. Delivering multi-level commercial complexes, retail showrooms, and office frameworks with MDDA compliance and high-capacity RCC infrastructure."
  },
  {
    path: 'home-renovation-dehradun',
    title: "Home Renovation in Dehradun | Remodeling & Structural Additions",
    h1: "Home Renovation in Dehradun",
    description: "Professional home renovation and remodeling services in Dehradun. Floor additions, structural strengthening, waterproof bathroom redesigns, and modular kitchen modernizations."
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
        html += `      <li><a href="${link.url}" target="_blank" rel="noopener noreferrer nofollow">${link.label}</a> (${link.authority})</li>\n`;
      }
      html += `    </ul>\n`;
    }
    html += `  </section>\n\n`;
  }

  html += `  <footer>\n`;
  html += `    <p><strong>Company Reference:</strong> GUPTA'S EVERGREEN DEVELOPERS LLP (LLPIN: ACP-3601, Inc. 23 June 2025, operating trade dating to 2012, ROC Uttarakhand). Operating Headquarters: 105 Rajpur Road, Dehradun 248001. Direct Founder Lines: +91 95483 93798 / +91 76687 66118.</p>\n`;
  html += `    <p><a href="https://guptasevergreendevelopers.com/packages#calculator">Estimate Your House Construction Cost Online</a> | <a href="https://guptasevergreendevelopers.com/contact">Schedule a Free 24-Hour On-Site Architectural Evaluation</a></p>\n`;
  html += `  </footer>\n`;
  html += `</article>`;
  return html;
}

// Helper to convert Project object to rich semantic HTML for crawlers and LLMs
function renderProjectSemanticHtml(project, canonicalUrl) {
  let html = `<article>\n`;
  html += `  <h1>${project.name}</h1>\n`;
  html += `  <p><strong>Location:</strong> ${project.location} | <strong>Status:</strong> ${project.status.toUpperCase()} | <strong>Classification:</strong> ${project.categoryLabel} | <strong>Year:</strong> ${project.year} | <strong>Built-Up Area:</strong> ${project.builtUpArea}</p>\n`;
  html += `  <p><strong>Visual Evidence Type:</strong> ${project.visualLabel} (${project.isRender ? 'Architectural 3D Render' : 'Confirmed Real Photograph'})</p>\n`;
  html += `  <p><em>${project.description}</em></p>\n\n`;

  html += `  <section>\n    <h2>Key Engineering Highlights</h2>\n    <ul>\n`;
  for (const h of project.highlights) {
    html += `      <li>${h}</li>\n`;
  }
  html += `    </ul>\n  </section>\n\n`;

  html += `  <section>\n    <h2>Overall Scope of Work</h2>\n    <p>${project.scopeOfWork}</p>\n  </section>\n\n`;
  html += `  <section>\n    <h2>Architectural Planning Scope</h2>\n    <p>${project.architecturalScope}</p>\n  </section>\n\n`;
  html += `  <section>\n    <h2>Structural Engineering & Seismic Safety</h2>\n    <p>${project.structuralScope}</p>\n  </section>\n\n`;
  html += `  <section>\n    <h2>Interior Architecture & Finishes</h2>\n    <p>${project.interiorScope}</p>\n  </section>\n\n`;

  html += `  <section>\n    <h2>Construction Methodology & Quality Control</h2>\n    <ul>\n`;
  for (const m of project.constructionMethods) {
    html += `      <li>${m}</li>\n`;
  }
  html += `    </ul>\n  </section>\n\n`;

  html += `  <section>\n    <h2>Specified Materials & Primary Brands</h2>\n    <ul>\n`;
  for (const mat of project.materialsSpecifications) {
    html += `      <li>${mat}</li>\n`;
  }
  html += `    </ul>\n  </section>\n\n`;

  html += `  <section>\n    <h2>Completion, Warranties & Handover</h2>\n    <p>${project.completionInfo}</p>\n  </section>\n\n`;

  html += `  <section>\n    <h2>Client Privacy & Publishing Disclosure</h2>\n    <p>${project.confidentialityNote}</p>\n  </section>\n\n`;

  html += `  <footer>\n`;
  html += `    <p><strong>Executed By:</strong> GUPTA'S EVERGREEN DEVELOPERS LLP (LLPIN: ACP-3601, operating trade dating to 2012, ROC Uttarakhand). Headquarters: 105 Rajpur Road, Dehradun. Contact: +91 95483 93798.</p>\n`;
  html += `    <p><a href="https://guptasevergreendevelopers.com/projects">View All Construction Evidence Projects</a> | <a href="https://guptasevergreendevelopers.com/contact">Book In-Person Site Inspection Tour</a></p>\n`;
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

  const canonicalUrl = `https://guptasevergreendevelopers.com/${route.path}`;

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

  // For /projects route, inject Breadcrumb and ItemList schemas
  if (route.path === 'projects') {
    const projectItemsJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: "Gupta's Evergreen Developers Real Projects Portfolio",
      itemListElement: projects.map((p, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: p.name,
        item: `https://guptasevergreendevelopers.com/projects/${p.slug}`,
        description: p.description
      }))
    };
    const projectsBreadcrumbJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://guptasevergreendevelopers.com/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://guptasevergreendevelopers.com/projects' }
      ]
    };
    const projectsScriptTag = `<script type="application/ld+json">${JSON.stringify(projectsBreadcrumbJsonLd)}</script>\n    <script type="application/ld+json">${JSON.stringify(projectItemsJsonLd)}</script>`;
    html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/, `<link rel="canonical" href="${canonicalUrl}" />\n    ${projectsScriptTag}`);
  }

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

  const canonicalSubUrl = `https://guptasevergreendevelopers.com/${articleSubPath}`;
  const semanticContentSub = renderArticleSemanticHtml(art, canonicalSubUrl);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: art.title,
    description: art.metaDescription,
    image: `https://guptasevergreendevelopers.com${art.coverImage}`,
    author: {
      '@type': 'Person',
      name: art.author,
      jobTitle: 'Senior Civil Engineer & Designated Partner',
      worksFor: {
        '@type': 'Organization',
        name: "Gupta's Evergreen Developers LLP",
        url: 'https://guptasevergreendevelopers.com'
      }
    },
    publisher: {
      '@type': 'Organization',
      name: "Gupta's Evergreen Developers LLP",
      logo: {
        '@type': 'ImageObject',
        url: 'https://guptasevergreendevelopers.com/images/drive_logo_full.png'
      }
    },
    datePublished: '2026-09-25',
    dateModified: '2026-09-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalSubUrl
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://guptasevergreendevelopers.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides & Articles',
        item: 'https://guptasevergreendevelopers.com/articles'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: art.title,
        item: canonicalSubUrl
      }
    ]
  };

  const schemaScriptTag = `<script type="application/ld+json">${JSON.stringify(articleJsonLd)}</script>\n    <script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>`;

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

// 4. Generate 10 Real Project Evidence Pages under /projects/[slug]
for (const proj of projects) {
  const projectSubPath = `projects/${proj.slug}`;
  const projectSubDir = path.join(distDir, projectSubPath);
  if (!fs.existsSync(projectSubDir)) {
    fs.mkdirSync(projectSubDir, { recursive: true });
  }

  const canonicalProjUrl = `https://guptasevergreendevelopers.com/${projectSubPath}`;
  const semanticContentProj = renderProjectSemanticHtml(proj, canonicalProjUrl);

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: proj.name,
    description: proj.description,
    url: canonicalProjUrl,
    publisher: {
      '@type': 'Organization',
      name: "Gupta's Evergreen Developers LLP",
      url: 'https://guptasevergreendevelopers.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://guptasevergreendevelopers.com/images/drive_logo_full.png'
      }
    },
    mainEntity: {
      '@type': 'Place',
      name: proj.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: proj.location,
        addressLocality: 'Dehradun',
        addressRegion: 'Uttarakhand',
        addressCountry: 'IN'
      },
      image: `https://guptasevergreendevelopers.com${proj.images[0]?.url || '/images/image_03.jpeg'}`,
      description: proj.description
    }
  };

  const projectBreadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://guptasevergreendevelopers.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects Portfolio',
        item: 'https://guptasevergreendevelopers.com/projects'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: proj.name,
        item: canonicalProjUrl
      }
    ]
  };

  const projectSchemaScriptTag = `<script type="application/ld+json">${JSON.stringify(projectJsonLd)}</script>\n    <script type="application/ld+json">${JSON.stringify(projectBreadcrumbJsonLd)}</script>`;

  let htmlProj = baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${proj.seoTitle}</title>`)
    .replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/, `<meta name="description" content="${proj.metaDescription}" />`)
    .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/, `<link rel="canonical" href="${canonicalProjUrl}" />\n    ${projectSchemaScriptTag}`)
    .replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/, `<meta property="og:title" content="${proj.seoTitle}" />`)
    .replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/, `<meta property="og:description" content="${proj.metaDescription}" />`)
    .replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/, `<meta property="og:url" content="${canonicalProjUrl}" />`)
    .replace(/<meta\s+property="twitter:title"\s+content=".*?"\s*\/?>/, `<meta property="twitter:title" content="${proj.seoTitle}" />`)
    .replace(/<meta\s+property="twitter:description"\s+content=".*?"\s*\/?>/, `<meta property="twitter:description" content="${proj.metaDescription}" />`)
    .replace(/<meta\s+property="twitter:url"\s+content=".*?"\s*\/?>/, `<meta property="twitter:url" content="${canonicalProjUrl}" />`)
    .replace(
      /<div style="position: absolute; left: -9999px;.*?<\/div>/s,
      `<div style="position: absolute; left: -9999px; top: -9999px; width: 1px; height: 1px; overflow: hidden;" aria-hidden="true">\n${semanticContentProj}\n    </div>`
    );

  fs.writeFileSync(path.join(projectSubDir, 'index.html'), htmlProj, 'utf8');
}

console.log(`[generate-routes-seo] Successfully pre-generated static SEO pages for ${coreRoutes.length + articles.length + projects.length} unique canonical routes (${coreRoutes.length} core, ${articles.length} articles, ${projects.length} real projects).`);
