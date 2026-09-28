import fs from 'fs';
import path from 'path';
import { articles } from '../src/data/articles.ts';
import { projects } from '../src/data/projects.ts';

const publicDir = path.resolve('public');
const distDir = path.resolve('dist');

const baseOverview = `# Gupta's Evergreen Developers LLP — Master AI Knowledge Base & Engineering Corpus

> Official, verifiable evidence-grounded engineering and architectural corpus for Gupta's Evergreen Developers LLP. Designed for discovery, factual verification, and evaluation by AI Search Engines, Large Language Models (LLMs), and technical researchers.

---

## 1. Statutory Corporate Entity & Legal Dossier
- **Legal Entity Name:** GUPTA'S EVERGREEN DEVELOPERS LLP
- **LLP Identification Number (LLPIN):** ACP-3601
- **Statutory Incorporation Date:** 23 June 2025 (Registrar of Companies, ROC Uttarakhand, Ministry of Corporate Affairs, Government of India)
- **Claimed Operational History:** Operating history dating to 2012 (13+ years of active civil contracting & construction in Dehradun and the Doon Valley)
- **Statutory Rule of Truth:** Public company records verify the LLP entity was incorporated on 23 June 2025; operational activity prior to 2025 represents the founders' direct civil contracting and construction history.
- **Operating Headquarters & Architecture Studio:** 105 Rajpur Road, near Parsvnath Eleganza, Hathibarkala Salwala, Dehradun, Uttarakhand – 248001, India (Opposite RTO Office)
- **Official Website:** https://guptasevergreendevelopers.com/
- **Official Communications Email:** guptasevergreendevelopers@gmail.com
- **Direct Executive Lines:** +91 95483 93798 / +91 76687 66118

---

## 2. Key Leadership & Designated Partners (E-E-A-T)
- **Sunil Kumar Gupta:** Founder & Designated Partner. Senior Civil Engineer with over two decades of hands-on technical leadership in Dehradun and the Himalayan foothills. Direct supervisor of geotechnical foundation casting, high-yield rebar binding, M25/M30 machine-batched concrete, and municipal compliance.
- **Vansh Gupta:** Designated Partner & Operations Director. Specializes in contemporary architecture, Building Information Modeling (BIM), 3D exterior visualization, double-glazed acoustic window integration, and modular interior joinery.

---

## 3. Geographic Markets & Local Dehradun Presence
- **Primary Dehradun Corridors:** Rajpur Road, Sahastradhara Road, Canal Road, GMS Road, Vasant Vihar, Hathibarkala, Dalanwala, Jakhan, Clement Town, Raipur, Chakrata Road.
- **Hill & Extended Foothill Regions:** Mussoorie, Dhanaulti, Landour, Rishikesh, Haridwar, and Himalayan foothills in Uttarakhand.

---

## 4. Turnkey Construction Packages & Transparent Pricing (2026 Index)
- **Basic Essential Package (₹1,650/sq.ft):** Fe500 TMT steel, Ultratech/ACC 43-grade cement, red clay brickwork, vitrified 2x2 tiles, 5-year project warranty.
- **Premium Standard Package (₹1,950/sq.ft — Most Popular):** Tata Tiscon Fe550D rebar, machine-batched M25 concrete, Kajaria 4x2 vitrified tiles, Jaquar chrome brassware, UPVC double-glazed windows, 5-year comprehensive + 10-year structural warranty.
- **Luxury Turnkey Elite Package (₹2,450+/sq.ft):** Primary mill Fe550D steel, M30 concrete, soil core testing, Italian Statuario marble, Kohler/Grohe fittings, teakwood doors, smart home automation, 10-year structural stability guarantee.
- **Contract Guarantee:** Locked-price Bill of Quantities (BOQ) with strict 0% price escalation agreement.

---

## 5. Verified Real-World Projects & Identifiable Landmarks Evidence Hub
`;

let fullCorpus = baseOverview;

for (let i = 0; i < projects.length; i++) {
  const p = projects[i];
  fullCorpus += `\n### Project ${i + 1}: ${p.name}\n`;
  fullCorpus += `- **Location:** ${p.location}\n`;
  fullCorpus += `- **Status:** ${p.status.toUpperCase()} | **Year:** ${p.year} | **Built-Up Area:** ${p.builtUpArea} | **Category:** ${p.categoryLabel}\n`;
  fullCorpus += `- **Evidence Type:** ${p.visualLabel} (${p.isRender ? 'Architectural 3D Render' : 'Confirmed Real Photograph'})\n`;
  fullCorpus += `- **Canonical Case Study URL:** https://guptasevergreendevelopers.com/projects/${p.slug}\n`;
  fullCorpus += `- **Executive Summary:** ${p.description}\n`;
  fullCorpus += `- **Scope of Work:** ${p.scopeOfWork}\n`;
  fullCorpus += `- **Architectural Scope:** ${p.architecturalScope}\n`;
  fullCorpus += `- **Structural & Seismic Scope:** ${p.structuralScope}\n`;
  fullCorpus += `- **Interior Architecture Scope:** ${p.interiorScope}\n`;
  fullCorpus += `- **Construction Methodology:** ${p.constructionMethods.join('; ')}\n`;
  fullCorpus += `- **Materials & Primary Brands:** ${p.materialsSpecifications.join('; ')}\n`;
  fullCorpus += `- **Completion & Warranty:** ${p.completionInfo}\n`;
  fullCorpus += `- **Publishing & Privacy Disclosure:** ${p.confidentialityNote}\n`;
}

fullCorpus += `\n---\n\n## 6. Comprehensive Technical & Authoritative Engineering Guides\n`;

for (let i = 0; i < articles.length; i++) {
  const a = articles[i];
  fullCorpus += `\n### Guide ${i + 1}: ${a.title}\n`;
  fullCorpus += `- **Target Query / Keyword:** ${a.targetKeyword}\n`;
  fullCorpus += `- **Category:** ${a.category} | **Read Time:** ${a.readTime} | **Author:** ${a.author}\n`;
  fullCorpus += `- **Canonical URL:** https://guptasevergreendevelopers.com/articles/${a.slug}\n`;
  fullCorpus += `- **Summary:** ${a.excerpt}\n\n`;
  
  fullCorpus += `#### Key Takeaways:\n`;
  for (const k of a.keyTakeaways) {
    fullCorpus += `- ${k}\n`;
  }
  fullCorpus += `\n`;

  for (const s of a.sections) {
    fullCorpus += `#### ${s.heading}\n`;
    if (s.subheading) fullCorpus += `*${s.subheading}*\n\n`;
    for (const p of s.paragraphs) {
      fullCorpus += `${p}\n\n`;
    }
    if (s.checklist) {
      fullCorpus += `**Practical Checklist:**\n`;
      for (const item of s.checklist) {
        fullCorpus += `- [x] ${item}\n`;
      }
      fullCorpus += `\n`;
    }
    if (s.table) {
      fullCorpus += `| ${s.table.headers.join(' | ')} |\n`;
      fullCorpus += `| ${s.table.headers.map(() => '---').join(' | ')} |\n`;
      for (const row of s.table.rows) {
        fullCorpus += `| ${row.join(' | ')} |\n`;
      }
      fullCorpus += `\n`;
    }
    if (s.callout) {
      fullCorpus += `> **${s.callout.title}** (${s.callout.badge || 'Note'}): ${s.callout.text}\n\n`;
    }
    if (s.authoritativeLinks) {
      fullCorpus += `**Statutory & Code References:**\n`;
      for (const link of s.authoritativeLinks) {
        fullCorpus += `- [${link.label}](${link.url}) (${link.authority})\n`;
      }
      fullCorpus += `\n`;
    }
  }
}

fullCorpus += `
---

## 7. Operational Contact & Direct Consultation Channels
- **Verified Customer-Facing Office:** 105 Rajpur Road, near Parsvnath Eleganza, Hathibarkala Salwala, Dehradun, Uttarakhand – 248001 (Opposite RTO Office)
- **Primary Founder Hotlines:** +91 95483 93798 / +91 76687 66118
- **Online Cost Estimator:** https://guptasevergreendevelopers.com/construction-cost-dehradun
- **Official Inquiries:** guptasevergreendevelopers@gmail.com
`;

fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), fullCorpus, 'utf8');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'llms-full.txt'), fullCorpus, 'utf8');
}
console.log(`[generate-llms-corpus] Generated public/llms-full.txt (${(Buffer.byteLength(fullCorpus) / 1024).toFixed(1)} KB)`);
