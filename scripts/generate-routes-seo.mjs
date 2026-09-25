import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('[generate-routes-seo] dist/index.html not found!');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const routes = [
  {
    path: 'about',
    title: "About Gupta's Evergreen | Construction Company in Dehradun",
    h1: "About Gupta's Evergreen Developers - Leading Construction Company in Dehradun",
    description: "Learn about Gupta's Evergreen Developers LLP (LLPIN: ACP-3601, Estd. 2012), founded by Sunil Kumar Gupta and Vansh Gupta. 13+ years of civil contracting pedigree in Dehradun, Uttarakhand."
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
  },
  {
    path: 'articles/architects-in-dehradun-city',
    title: "Architects in Dehradun City: Villa Guide | Gupta's",
    h1: "How to Pick Architects in Dehradun City for Villas",
    description: "Complete checklist for selecting licensed architects in Dehradun city. Hill geology, MDDA sanction bye-laws, STAAD Pro seismic design & turnkey integration."
  },
  {
    path: 'articles/construction-company-in-dehradun',
    title: "Construction Company in Dehradun: 10 Hiring Questions",
    h1: "10 Questions to Ask a Construction Company in Dehradun",
    description: "Essential questions to ask any construction company in Dehradun before hiring. Steel grades, concrete cube tests, MDDA approvals, escrow milestones & warranties."
  },
  {
    path: 'articles/interior-designers-in-dehradun',
    title: "Interior Designers in Dehradun: Hill Home Guide | Gupta's",
    h1: "How to Choose Interior Designers in Dehradun for Villas",
    description: "How to choose top interior designers in Dehradun. Moisture-proof materials, BWP marine ply, structural frame alignment, modular cabinetry & luxury styling."
  },
  {
    path: 'articles/modular-kitchen-in-dehradun',
    title: "Modular Kitchen in Dehradun: Costs & Layouts | Gupta's",
    h1: "How to Choose a Modular Kitchen in Dehradun",
    description: "Guide to modular kitchens in Dehradun. Hill-proof materials, Blum soft-close hardware, acrylic vs PU finishes, per-sq.ft rates & turnkey installation."
  },
  {
    path: 'articles/architect-dehradun-mdda-guide',
    title: "Architect in Dehradun: MDDA Map Approval Guide | Gupta's",
    h1: "Architect in Dehradun: Guide to MDDA Map Sanctions",
    description: "Step-by-step guide to MDDA building plan sanctions in Dehradun. Setbacks, FAR rules, height restrictions, earthquake codes & hiring licensed architects."
  }
];

for (const route of routes) {
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  const canonicalUrl = `https://www.guptasevergreendevelopers.com/${route.path}`;

  let html = baseHtml
    // Replace <title>
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    // Replace <h1>
    .replace(/<h1>.*?<\/h1>/, `<h1>${route.h1}</h1>`)
    // Replace meta description
    .replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
      `<meta name="description" content="${route.description}" />`
    )
    // Replace canonical link
    .replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    )
    // Replace OpenGraph title, description, url
    .replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/,
      `<meta property="og:title" content="${route.title}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/,
      `<meta property="og:description" content="${route.description}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/,
      `<meta property="og:url" content="${canonicalUrl}" />`
    )
    // Replace Twitter title, description, url
    .replace(
      /<meta\s+property="twitter:title"\s+content=".*?"\s*\/?>/,
      `<meta property="twitter:title" content="${route.title}" />`
    )
    .replace(
      /<meta\s+property="twitter:description"\s+content=".*?"\s*\/?>/,
      `<meta property="twitter:description" content="${route.description}" />`
    )
    .replace(
      /<meta\s+property="twitter:url"\s+content=".*?"\s*\/?>/,
      `<meta property="twitter:url" content="${canonicalUrl}" />`
    );

  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
  console.log(`[generate-routes-seo] Generated dist/${route.path}/index.html with unique title & metadata`);
}

console.log('[generate-routes-seo] Route-specific SEO generation completed successfully.');
