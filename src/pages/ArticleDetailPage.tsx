import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Clock, 
  Calendar, 
  User, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink, 
  Phone, 
  MessageSquare, 
  Calculator, 
  Share2,
  Building2,
  ChevronRight
} from 'lucide-react';
import { getArticleBySlug, articles } from '../data/articles';
import { usePageSEO } from '../hooks/usePageSEO';

interface ArticleDetailPageProps {
  onOpenConsultation: (topic?: string) => void;
  explicitSlug?: string;
  isDirectRoute?: boolean;
}

export default function ArticleDetailPage({ onOpenConsultation, explicitSlug, isDirectRoute = false }: ArticleDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = explicitSlug || slug;
  const article = activeSlug ? getArticleBySlug(activeSlug) : undefined;

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const canonicalPath = isDirectRoute ? `/${article.slug}` : `/articles/${article.slug}`;

  // Set Dynamic Page SEO
  usePageSEO({
    title: article.seoTitle,
    description: article.metaDescription,
    canonicalPath: canonicalPath,
  });

  const whatsappUrl = `https://wa.me/919548393798?text=${encodeURIComponent(
    `Hello Gupta's Evergreen Developers, I was reading your guide on "${article.title}" and would like to discuss my project in Dehradun.`
  )}`;

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  // Article Schema.org JSON-LD
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: `https://www.guptasevergreendevelopers.com${article.coverImage}`,
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: 'Designated Partner & Senior Civil Engineer',
      worksFor: {
        '@type': 'Organization',
        name: "Gupta's Evergreen Developers LLP",
        url: 'https://www.guptasevergreendevelopers.com',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: "Gupta's Evergreen Developers LLP",
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.guptasevergreendevelopers.com/images/drive_logo_full.png',
      },
    },
    datePublished: '2026-09-25',
    dateModified: '2026-09-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.guptasevergreendevelopers.com/articles/${article.slug}`,
    },
  };

  return (
    <div className="bg-[#FAF8F5] text-neutral-900 min-h-screen">
      
      {/* Article Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Top Breadcrumb Bar */}
      <div className="bg-[#121A10] border-b border-[#31432B]/50 py-2 text-xs text-neutral-400">
        <div className="container-custom flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600 flex-shrink-0" />
          <Link to="/articles" className="hover:text-white transition-colors">Articles &amp; Guides</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600 flex-shrink-0" />
          <span className="text-[#D5BAA6] truncate max-w-xs sm:max-w-md">{article.title}</span>
        </div>
      </div>

      {/* Article Header Container */}
      <header className="py-6 sm:py-12 bg-white border-b border-[#E6DFD5]">
        <div className="container-custom max-w-4xl space-y-6">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-neutral-400">•</span>
            <span className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#5C3D2B]" />
              {article.readTime}
            </span>
            <span className="text-xs text-neutral-400">•</span>
            <span className="text-xs text-neutral-500 font-medium">{article.publishedDate}</span>
          </div>

          <h1 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] leading-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            {article.excerpt}
          </p>

          <div className="pt-4 border-t border-[#E6DFD5] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2E3F27] text-[#D5BAA6] flex items-center justify-center font-bold text-xs border border-[#537048]/40">
                SG
              </div>
              <div>
                <div className="text-xs font-bold text-[#1C1917]">{article.author}</div>
                <div className="text-[11px] text-neutral-500">Gupta's Evergreen Developers LLP • 105 Rajpur Road</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Ask Author
              </a>
            </div>
          </div>

        </div>
      </header>

      {/* Main Article Content & Sidebar */}
      <div className="py-12 sm:py-16">
        <div className="container-custom max-w-4xl space-y-12">

          {/* Featured Cover Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#D5BAA6]/60 bg-[#162114]">
            <img
              src={article.coverImage}
              alt={article.imageAlt}
              className="w-full h-auto max-h-[460px] object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="p-3 text-[11px] text-neutral-500 bg-[#FAF8F5] border-t border-[#E6DFD5] italic text-center">
              {article.imageAlt} • Project Execution by Gupta's Evergreen Developers LLP
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="card-olive-brown p-6 sm:p-8 bg-[#FAF8F5]/90 border border-[#D5BAA6] rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#5C3D2B]" />
              Executive Summary &amp; Key Takeaways
            </div>
            <ul className="space-y-2.5">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#31432B] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Content Sections */}
          <div className="space-y-12">
            {article.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-5">
                
                <h2 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-[#1C1917] leading-snug">
                  {section.heading}
                </h2>

                {section.subheading && (
                  <h3 className="text-sm sm:text-base font-semibold text-[#5C3D2B]">
                    {section.subheading}
                  </h3>
                )}

                <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Optional Checklist */}
                {section.checklist && (
                  <div className="bg-white p-6 rounded-xl border border-[#E6DFD5] space-y-3 my-6 shadow-sm">
                    <div className="text-xs font-bold text-[#31432B] uppercase tracking-wider mb-2">
                      Practical Engineering Checklist
                    </div>
                    <ul className="space-y-2.5">
                      {section.checklist.map((item, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                          <CheckCircle2 className="w-4 h-4 text-[#5C3D2B] flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Optional Comparison Table */}
                {section.table && (
                  <div className="my-6 overflow-x-auto rounded-xl border border-[#D5BAA6] bg-white shadow-sm">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-[#FAF8F5] border-b border-[#D5BAA6] text-[#31432B]">
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="py-3 px-4 font-bold uppercase tracking-wider">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E6DFD5] text-neutral-800">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-[#FAF8F5]/40' : 'bg-white'}>
                            {row.map((cell, cIdx) => (
                              <td 
                                key={cIdx} 
                                className={`py-3 px-4 ${cIdx === 0 ? 'font-bold text-[#1C1917]' : 'text-neutral-700'}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Optional Callout Block */}
                {section.callout && (
                  <div className="my-6 p-6 rounded-xl bg-[#162114] text-white border border-[#405737]/60 space-y-2.5 shadow-md">
                    {section.callout.badge && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#2E3F27] border border-[#537048]/50 text-[#D5BAA6] text-[10px] font-bold uppercase tracking-wider">
                        {section.callout.badge}
                      </span>
                    )}
                    <h4 className="font-cinzel text-base sm:text-lg font-bold text-white">
                      {section.callout.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {section.callout.text}
                    </p>
                  </div>
                )}

                {/* Authoritative External Citations & Codes */}
                {section.authoritativeLinks && (
                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-2">
                      Authoritative Sources &amp; Regulatory Codes:
                    </div>
                    <div className="space-y-1.5">
                      {section.authoritativeLinks.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="inline-flex items-center gap-1.5 text-xs text-[#5C3D2B] hover:text-[#31432B] font-medium underline underline-offset-2 transition-colors mr-4"
                        >
                          {link.label}
                          <ExternalLink className="w-3 h-3 text-neutral-400" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              </section>
            ))}
          </div>

          {/* Organic Business Conversion Card */}
          <div className="card-olive-brown p-8 sm:p-10 bg-white border-2 border-[#D5BAA6] rounded-2xl shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E6DFD5]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#31432B] bg-[#31432B]/10 px-3 py-1 rounded-full">
                  Verified Local Builder Reference
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917] mt-2">
                  Gupta's Evergreen Developers LLP
                </h3>
                <p className="text-xs text-neutral-600 mt-1">
                  105 Rajpur Road, Dehradun • LLPIN: ACP-3601 • Estd. 2012
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="tel:+919548393798"
                  className="px-4 py-2.5 rounded-xl bg-[#31432B] hover:bg-[#253320] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Founder
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5]">
                <div className="font-bold text-[#1C1917] mb-1">Free 24hr Site Visit</div>
                <div className="text-neutral-600">On-site plot contour evaluation &amp; preliminary budget estimate across Dehradun.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5]">
                <div className="font-bold text-[#1C1917] mb-1">5-Year Project Warranty</div>
                <div className="text-neutral-600">Complete warranty coverage on waterproofing, plumbing, cracks, and structural stability.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5]">
                <div className="font-bold text-[#1C1917] mb-1">Milestone Escrow</div>
                <div className="text-neutral-600">0% cost escalation clause with transparent stage-wise billing sign-offs.</div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs">
              <span className="text-neutral-500">
                Want to calculate your plot construction cost?
              </span>
              <div className="flex items-center gap-3">
                <Link
                  to="/packages#calculator"
                  className="font-bold text-[#5C3D2B] hover:text-[#31432B] flex items-center gap-1 underline underline-offset-4"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  Launch Construction Cost Calculator
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Consultation from article: ${article.title}`)}
                  className="px-4 py-2 rounded-lg bg-[#5C3D2B] text-white font-bold hover:bg-[#724C35] transition-colors"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Related Articles Section */}
          <div className="pt-10 border-t border-[#E6DFD5] space-y-6">
            <h3 className="font-cinzel text-xl font-bold text-[#1C1917]">
              Related Construction &amp; Architecture Guides
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/articles/${rel.slug}`}
                  className="card-olive-brown p-5 bg-white flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-[#31432B] uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="font-cinzel text-sm font-bold text-[#1C1917] group-hover:text-[#31432B] transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-[11px] text-neutral-600 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#E6DFD5] flex items-center justify-between text-[11px] font-bold text-[#5C3D2B]">
                    <span>{rel.readTime}</span>
                    <span className="group-hover:translate-x-1 transition-transform">Read →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
