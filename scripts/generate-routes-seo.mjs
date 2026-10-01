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
    title: "About Gupta's Evergreen Developers | Dehradun Builders",
    h1: "About Gupta's Evergreen Developers LLP",
    description: "Learn about Gupta's Evergreen Developers LLP (LLPIN: ACP-3601). Operating since 2012 in Dehradun under civil engineers Sunil Kumar Gupta and Vansh Gupta."
  },
  {
    path: 'services',
    title: "Construction Services in Dehradun | Gupta's Evergreen",
    h1: "Turnkey Construction Services in Dehradun",
    description: "Specialized turnkey residential construction, architectural 3D elevations, MDDA map sanctions, commercial plazas, and anti-seismic RCC structures."
  },
  {
    path: 'packages',
    title: "Construction Packages in Dehradun | Gupta's Evergreen",
    h1: "House Construction Packages & Rates in Dehradun",
    description: "Transparent ₹1,650 to ₹2,450/sq.ft turnkey house construction packages in Dehradun. Calculate your construction cost with zero price escalation."
  },
  {
    path: 'projects',
    title: "Construction Projects in Dehradun | Gupta's Evergreen",
    h1: "Construction Projects in Dehradun",
    description: "Browse verified construction projects in Dehradun and Mussoorie by Gupta's Evergreen Developers, including luxury villas, commercial plazas and RCC slabs."
  },
  {
    path: 'contact',
    title: "Contact Gupta's Evergreen Developers | Dehradun Office",
    h1: "Contact Gupta's Evergreen Developers LLP",
    description: "Contact Gupta's Evergreen Developers at 105 Rajpur Road, Dehradun. Call +91 95483 93798 or book a complimentary on-site plot evaluation for your project."
  },
  {
    path: 'articles',
    title: "Construction Guides & Articles | Dehradun Building Insights",
    h1: "Construction Guides & Architectural Insights in Dehradun",
    description: "Expert guides on house construction, MDDA building bye-laws, earthquake-resistant structural engineering, and building materials in Dehradun, Uttarakhand."
  },
  {
    path: 'home-construction-dehradun',
    title: "Home Construction Company in Dehradun | Gupta's Evergreen",
    h1: "Home Construction Company in Dehradun",
    description: "Planning to build an independent home in Dehradun? Gupta's Evergreen provides turnkey residential house construction with anti-seismic RCC and 5-year warranty."
  },
  {
    path: 'turnkey-construction-dehradun',
    title: "Turnkey Construction in Dehradun | Gupta's Evergreen",
    h1: "Turnkey Construction in Dehradun",
    description: "Looking for turnkey construction in Dehradun? Gupta's Evergreen manages architectural plans, MDDA sanctions, structural casting and finishing under one contract."
  },
  {
    path: 'builders-developers-dehradun',
    title: "Builders and Developers in Dehradun | Gupta's Evergreen",
    h1: "Builders and Developers in Dehradun",
    description: "Licensed builders and developers in Dehradun. Gupta's Evergreen delivers residential developments, commercial plazas and civil engineering across Uttarakhand."
  },
  {
    path: 'construction-cost-dehradun',
    title: "Construction Cost in Dehradun | 2026 Guide",
    h1: "House Construction Cost in Dehradun",
    description: "Explore transparent 2026 house construction costs in Dehradun from ₹1,650 to ₹2,450/sq.ft. Calculate your budget with our locked-price BOQ estimator."
  },
  {
    path: 'villa-construction-dehradun',
    title: "Luxury Villa Construction in Dehradun | Gupta's Evergreen",
    h1: "Luxury Villa Construction in Dehradun",
    description: "Bespoke luxury villa construction in Dehradun and Mussoorie. Engineered for hill slopes with ductile RCC framing, stone cladding and panoramic view decks."
  },
  {
    path: 'commercial-construction-dehradun',
    title: "Commercial Construction in Dehradun | Gupta's Evergreen",
    h1: "Commercial Construction Company in Dehradun",
    description: "Commercial construction company in Dehradun building retail plazas, showrooms and office complexes with column-free spans, basement parking and MDDA approval."
  },
  {
    path: 'home-renovation-dehradun',
    title: "Home Renovation in Dehradun | Gupta's Evergreen",
    h1: "Home Renovation in Dehradun",
    description: "Professional home renovation in Dehradun. Structural upper-floor additions, waterproofing rehabilitation, modular kitchens and bathroom conversions."
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

  html += `  <section>\n    <h2>Verified Portfolio & Architectural Updates</h2>\n    <p>View 3D elevations and boards on <a href="https://pin.it/gRJEAMxYw" target="_blank" rel="noopener noreferrer nofollow">Pinterest</a> or follow corporate updates on <a href="https://www.linkedin.com/company/gupta-s-evergreen-developers-llp" target="_blank" rel="noopener noreferrer nofollow">LinkedIn</a>.</p>\n  </section>\n\n`;

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

  if (route.path === 'construction-cost-dehradun') {
    const costSemantic = `<article><h1>${route.h1}</h1><p>${route.description}</p>
<p>As analyzed in our published engineering whitepaper on <a href="https://medium.com/@aromalgiyer/the-ultimate-home-builders-blueprint-navigating-construction-costs-mdda-regulations-and-hill-962085b3e62b?sharedUserId=aromalgiyer" target="_blank" rel="noopener noreferrer nofollow">Medium</a>, residential construction rates in Dehradun range between ₹1,650 and ₹2,450/sq.ft.</p>
<section><h2>House Construction Cost per Square Foot in Dehradun</h2>
<p>Our turnkey packages are priced on a per-square-foot basis, with three standard tiers. The <strong>Basic Essential</strong> package starts at ₹1,650/sq.ft and covers structural RCC work with Fe500 TMT steel and standard finishes. The <strong>Premium Standard</strong> package at ₹1,950/sq.ft is our most selected tier, upgrading to Fe550D ductile-grade reinforcement and higher-spec flooring. <strong>Luxury Turnkey</strong> bespoke work begins at ₹2,450/sq.ft and includes premium joinery, specialist interiors and hill-site retaining structures.</p>
<p>Every quotation is issued against a locked-price Bill of Quantities. Material escalation risk sits with us, not the homeowner, so an agreed rate holds for the full project duration regardless of commodity movement.</p></section>
<section><h2>What Drives Cost Variation in Dehradun</h2>
<p>Four factors separate a ₹1,650 quote from a ₹2,450 quote on an identical floor plan. First, <strong>steel specification</strong> — Fe500 versus Fe550D changes both material cost and ductile detailing requirements. Second, <strong>concrete batching</strong> — M20 site-mixed against M25 machine-batched with admixtures. Third, <strong>flooring and fixture tier</strong>, which varies most between packages. Fourth, <strong>site terrain</strong>: hillside plots in Mussoorie and Rajpur require retaining walls, slope stabilisation and additional access works that a flat Dehradun plot does not.</p></section>
<section><h2>Seismic and Regulatory Cost Requirements</h2>
<p>Dehradun sits in Seismic Zone IV, with adjoining ridges falling into Zone V. All structures are engineered to IS 1893 and IS 13920 with ductile detailing, which is a non-negotiable line item in every quote rather than an optional upgrade. Where applicable, MDDA sanction fees, building map approval costs and rainwater harvesting provisions are itemised separately so you can see exactly what is statutory and what is construction.</p></section>
<section><h2>Milestone-Based Payment Structure</h2>
<p>Payments follow a physical-verification escrow schedule tied to completed site milestones: excavation at 10%, plinth beam casting at 15%, ground floor slab at 20%, followed by brickwork, MEP rough-ins, plastering and final handover. You release funds against inspected work, not against a calendar.</p></section>
<section><h2>Calculate Your Construction Budget</h2>
<p>Use our interactive <a href="https://guptasevergreendevelopers.com/packages#calculator">construction cost calculator</a> to estimate your budget from plot area, number of buildable levels and package tier. To discuss a specific site, request a <a href="https://guptasevergreendevelopers.com/contact">complimentary on-site plot evaluation</a> at our 105 Rajpur Road office.</p></section></article>`;
    html = html.replace(/<div style="position: absolute; left: -9999px;.*?<\/div>/s, `<div style="position: absolute; left: -9999px; top: -9999px; width: 1px; height: 1px; overflow: hidden;" aria-hidden="true">\n${costSemantic}\n    </div>`);
  }

  if (route.path === 'projects') {
    const projectListHtml = projects.map((p) => `<li><a href="https://guptasevergreendevelopers.com/projects/${p.slug}">${p.name}</a> — completed by Gupta's Evergreen Developers LLP in Dehradun and Mussoorie, Uttarakhand.</li>`).join('\n');
    const projectsSemantic = `<article><h1>${route.h1}</h1><p>${route.description}</p>
<section><h2>Completed Residential Projects in Dehradun</h2>
<p>Our residential portfolio spans independent hill villas, duplex residences and high-spec interior fit-outs across Dehradun's Rajpur Road corridor and the Mussoorie hillside belt. Every project listed below was delivered under a single-contract turnkey agreement with our in-house civil and architectural team — no subcontracting, with direct partner supervision from Sunil Kumar Gupta and Vansh Gupta.</p>
<ul>
${projectListHtml}
</ul></section>
<section><h2>Commercial and Structural Engineering Work</h2>
<p>Alongside residential work we deliver commercial retail plaza frameworks, multi-level RCC slab structures and specialised anti-seismic casting. Our Seismic Zone IV and Zone V ductile detailing to IS 1893 and IS 13920 is standard specification rather than an upgrade option, and every delivered structure carries a 5-year comprehensive workmanship and waterproofing warranty alongside a 10-year structural stability guarantee.</p></section>
<section><h2>Interior Finishing and Specialist Fabrication</h2>
<p>Our finishing capability spans bespoke marble and stone fabrication, bespoke carpentry, master bathroom and attic suites, and specialist culinary studio builds. These are executed in-house, which keeps material accountability and finish quality under a single warranty rather than split across separate vendors.</p></section>
<section><h2>Visual Portfolio and Project Updates</h2>
<p>View 3D elevations on <a href="https://pin.it/gRJEAMxYw" target="_blank" rel="noopener noreferrer nofollow">Pinterest</a> and follow current project activity on <a href="https://www.linkedin.com/company/gupta-s-evergreen-developers-llp" target="_blank" rel="noopener noreferrer nofollow">LinkedIn</a>.</p></section>
<section><h2>Book an In-Person Site Inspection</h2>
<p>To visit a completed project or discuss a site of your own, <a href="https://guptasevergreendevelopers.com/contact">contact our Dehradun office</a> or call +91 9548393798.</p></section></article>`;
    html = html.replace(/<div style="position: absolute; left: -9999px;.*?<\/div>/s, `<div style="position: absolute; left: -9999px; top: -9999px; width: 1px; height: 1px; overflow: hidden;" aria-hidden="true">\n${projectsSemantic}\n    </div>`);
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
