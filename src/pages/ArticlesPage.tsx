import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  ExternalLink,
  Search,
  Compass
} from 'lucide-react';
import { articles } from '../data/articles';
import { usePageSEO } from '../hooks/usePageSEO';

interface ArticlesPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export default function ArticlesPage({ onOpenConsultation }: ArticlesPageProps) {
  usePageSEO({
    title: "Construction Guides & Articles | Dehradun Building Insights",
    description: "Expert guides on house construction, MDDA building bye-laws, earthquake-resistant structural engineering, and building materials in Dehradun, Uttarakhand.",
    canonicalPath: "/articles",
  });

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Architecture & MDDA',
    'Turnkey Construction',
    'Interior & Kitchens'
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCat = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.targetKeyword.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#FAF8F5] text-neutral-900 space-y-0 min-h-screen">
      
      {/* Header Banner (Forest Olive Night Atmosphere) */}
      <section className="relative py-8 sm:py-14 lg:py-18 bg-[#141C12] text-white border-b border-[#31432B]/60">
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-3 sm:space-y-4">
          <h1 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            CONSTRUCTION GUIDES <br />
            <span className="text-[#D5BAA6] border-b-2 border-[#8E6144] pb-1">& ARCHITECTURAL INSIGHTS IN DEHRADUN</span>
          </h1>
          
          <div className="olive-brown-divider" />
          
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            In-depth technical guides written by practicing civil engineers and licensed architects. Learn how to navigate MDDA building sanctions, evaluate contractors, and engineer earthquake-resistant villas across Uttarakhand.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar Section */}
      <section className="py-8 bg-white border-b border-[#E6DFD5] sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#31432B] text-white shadow-sm'
                    : 'bg-[#FAF8F5] text-neutral-700 hover:bg-[#E6ECE2] border border-[#D5BAA6]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search guides, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-[#FAF8F5] border border-[#D5BAA6] rounded-full focus:outline-none focus:border-[#31432B] transition-colors"
            />
          </div>

        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-16 sm:py-20">
        <div className="container-custom max-w-7xl">
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E6DFD5] max-w-lg mx-auto">
              <Compass className="w-12 h-12 text-[#5C3D2B] mx-auto mb-3 opacity-60" />
              <h3 className="font-cinzel text-lg font-bold text-neutral-800">No Articles Found</h3>
              <p className="text-xs text-neutral-500 mt-1">Try searching for keywords like "architect", "contractor", or "kitchen".</p>
              <button
                type="button"
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 bg-[#31432B] text-white text-xs font-bold rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((art) => (
                <article
                  key={art.slug}
                  className="card-olive-brown flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Article Thumbnail */}
                  <div className="relative h-52 overflow-hidden bg-[#162114]">
                    <img
                      src={art.coverImage}
                      alt={art.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#121A10]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#537048]/50 text-[#D5BAA6] text-[10.5px] font-bold uppercase tracking-wider">
                      {art.category}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      
                      {/* Meta Details */}
                      <div className="flex items-center gap-3 text-[11px] text-neutral-500 font-medium">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#5C3D2B]" />
                          {art.readTime}
                        </span>
                        <span>•</span>
                        <span>{art.publishedDate}</span>
                      </div>

                      {/* Title */}
                      <h2 className="font-cinzel text-lg sm:text-xl font-bold text-[#1C1917] leading-snug group-hover:text-[#31432B] transition-colors">
                        <Link to={`/articles/${art.slug}`}>
                          {art.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                        {art.excerpt}
                      </p>

                    </div>

                    {/* Footer / CTA */}
                    <div className="pt-4 border-t border-[#E6DFD5] flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[11px] text-neutral-600">
                        <div className="w-6 h-6 rounded-full bg-[#31432B]/10 text-[#31432B] flex items-center justify-center font-bold text-[10px]">
                          GE
                        </div>
                        <span className="truncate max-w-[150px]">Gupta's Editorial</span>
                      </div>

                      <Link
                        to={`/articles/${art.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5C3D2B] hover:text-[#31432B] group-hover:translate-x-1 transition-all"
                      >
                        Read Guide
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Authoritative Resource Hub & Directory */}
      <section className="py-14 bg-[#FAF8F5] border-t border-[#E6DFD5]">
        <div className="container-custom max-w-5xl">
          <div className="card-olive-brown p-8 bg-white">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-[#31432B]" />
              <h3 className="font-cinzel text-xl font-bold text-[#1C1917]">
                Statutory Regulatory Portals & Engineering Reference Codes
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
              Our guides reference official building bye-laws, seismic safety standards, and real estate regulations maintained by government bodies across India and Uttarakhand:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <a
                href="https://mddaonline.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-[#E6DFD5] bg-[#FAF8F5] hover:border-[#31432B] transition-colors group"
              >
                <div>
                  <div className="font-bold text-[#1C1917] group-hover:text-[#31432B]">MDDA Online Portal</div>
                  <div className="text-[10px] text-neutral-500">Building Bye-Laws & Sanctions</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#31432B]" />
              </a>

              <a
                href="https://rera.uk.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-[#E6DFD5] bg-[#FAF8F5] hover:border-[#31432B] transition-colors group"
              >
                <div>
                  <div className="font-bold text-[#1C1917] group-hover:text-[#31432B]">UK-RERA Authority</div>
                  <div className="text-[10px] text-neutral-500">Real Estate Regulatory Compliance</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#31432B]" />
              </a>

              <a
                href="https://www.bis.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-[#E6DFD5] bg-[#FAF8F5] hover:border-[#31432B] transition-colors group"
              >
                <div>
                  <div className="font-bold text-[#1C1917] group-hover:text-[#31432B]">Bureau of Indian Standards</div>
                  <div className="text-[10px] text-neutral-500">IS 1893 & IS 13920 Seismic Codes</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#31432B]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 bg-[#162114] text-white">
        <div className="container-custom max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E3F27] border border-[#537048]/40 text-[#D5BAA6] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[#A87B5C]" />
            Turnkey Construction & Architectural Consultation
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white">
            Have Questions About Building Your Residence in Dehradun?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Speak directly with designated partner Sunil Kumar Gupta or schedule a complimentary on-site plot evaluation within 24 hours across Dehradun, Rajpur Road, or Mussoorie.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation('Articles Knowledge Center Consultation')}
              className="px-6 py-3 rounded-xl bg-[#5C3D2B] hover:bg-[#724C35] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
            >
              Book Complimentary Site Visit
            </button>
            <Link
              to="/packages#calculator"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-[#537048]/60 text-[#FAF8F5] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Use Construction Cost Calculator
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
