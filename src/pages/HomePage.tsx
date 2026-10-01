import { lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Home,
  Ruler,
  ShieldCheck,
  Award,
  ArrowRight,
  Calculator,
  CheckCircle2,
  PhoneCall,
  ExternalLink,
  MapPin,
  HelpCircle,
  ChevronDown,
  HardHat,
  Briefcase,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { usePageSEO } from '../hooks/usePageSEO';

// Below-the-fold sections are split out so they never block the LCP hero paint
const CostCalculator = lazy(() => import('../components/CostCalculator'));
const Process = lazy(() => import('../components/Process'));
const Comparison = lazy(() => import('../components/Comparison'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const CitationsAndBacklinks = lazy(() => import('../components/CitationsAndBacklinks'));

interface HomePageProps {
  onOpenConsultation: (pkgOrProject?: string) => void;
  onOpenCalculatorConsultation: (data?: any) => void;
}

export default function HomePage({ onOpenConsultation, onOpenCalculatorConsultation }: HomePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  usePageSEO({
    title: "Construction Company in Dehradun | Gupta's Evergreen",
    description: "Looking for a construction company in Dehradun? Gupta's Evergreen provides residential, commercial and turnkey construction services. Explore projects and request an estimate.",
    canonicalPath: "/",
  });

  const faqs = [
    {
      q: "What is the average house construction cost per square foot in Dehradun in 2026?",
      a: "Residential house construction cost in Dehradun typically ranges between ₹1,650 and ₹2,450+ per square foot. The rate varies depending on structural specifications (Fe500 vs Fe550D TMT steel), concrete batching methods (M20 vs M25 machine-batched), flooring finishes, and whether the terrain requires specialized hill slope retaining walls."
    },
    {
      q: "Do you handle MDDA building map approvals and sanctions?",
      a: "Yes. Our in-house architectural and civil team prepares complete 2D working drawings, structural STAAD calculations, and documentation for submission to the Mussoorie Dehradun Development Authority (MDDA) to ensure full bye-law, setback, and rainwater harvesting compliance."
    },
    {
      q: "How does Gupta's Evergreen Developers address earthquake safety in Uttarakhand?",
      a: "Dehradun lies in Seismic Zone IV, with adjoining ridges bordering Zone V. We engineer all reinforced concrete structures with ductile detailing adhering strictly to IS 1893 (Earthquake Resistant Design) and IS 13920, using primary mill Tata Tiscon Fe550D rebar and machine-batched M25 concrete."
    },
    {
      q: "What warranty do you provide upon project completion?",
      a: "Every turnkey residence is delivered with a written 5-Year Comprehensive Workmanship and Waterproofing Warranty along with a 10-Year Structural Stability Guarantee covering the foundation, columns, beams, and slab integrity."
    },
    {
      q: "How does your milestone-based payment structure work?",
      a: "We follow an escrow-linked payment schedule tied directly to verified physical site milestones: excavation (10%), plinth beam casting (15%), ground floor slab (20%), brickwork, MEP rough-ins, plastering, and final handover. We enforce a locked-price agreement with zero unexpected price escalations."
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-neutral-900 space-y-0">
      
      {/* SECTION 1: Residential & Commercial Construction in Dehradun (Hero) */}
      <section className="premium-hero relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center pt-6 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 overflow-hidden bg-[#121A10] text-white">
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/image_03_mobile.webp" type="image/webp" />
            <source media="(min-width: 769px)" srcSet="/images/image_03.webp" type="image/webp" />
            <img
              src="/images/image_03.jpeg"
              alt="Luxury Architectural Villa in Dehradun by Gupta's Evergreen Developers LLP"
              className="w-full h-full object-cover object-center"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              width="1920"
              height="1080"
            />
          </picture>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121A10] via-[#121A10]/75 to-[#121A10]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121A10] via-[#121A10]/70 to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-3 sm:py-6">
          <div className="max-w-4xl mx-auto text-center lg:text-left">
            
            {/* Primary Keyword Target H1 */}
            <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-4 sm:mb-6">
              Construction Company in Dehradun
            </h1>

            {/* Recommended H2: Residential & Commercial Construction in Dehradun */}
            <h2 className="font-cinzel text-lg sm:text-xl md:text-2xl font-bold text-[#D5BAA6] mb-3 sm:mb-4">
              Residential &amp; Commercial Construction in Dehradun
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-3xl mb-8 sm:mb-10">
              Turnkey residential house construction, architectural design, and luxury villas across Uttarakhand. We engineer durable, earthquake-resistant structures with transparent itemized pricing, locked-in BOQ contracts, and single-contract accountability.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-10 sm:mb-14 justify-center lg:justify-start">
              <Link
                to="/construction-cost-dehradun"
                className="btn-brown-sle w-full sm:w-auto flex items-center justify-center gap-2 text-xs uppercase tracking-wider px-8 py-4 shadow-xl"
              >
                <Calculator className="w-4 h-4 text-[#D5BAA6]" />
                <span>Calculate Construction Cost</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <Link
                to="/projects"
                className="btn-olive-sleek w-full sm:w-auto flex items-center justify-center gap-2 text-xs uppercase tracking-wider px-8 py-4 shadow-xl"
              >
                <Building2 className="w-4 h-4 text-[#D5BAA6]" />
                <span>Explore Completed Projects</span>
              </Link>

              <button
                type="button"
                onClick={() => onOpenConsultation('Hero Section Consultation')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-xs uppercase tracking-wider font-bold text-white transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#D5BAA6]" />
                <span>Request Project Consultation</span>
              </button>
            </div>

            {/* Verified Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-left">
              <div>
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#D5BAA6]">13+ Years</div>
                <div className="text-[11px] text-neutral-400">Civil Contracting Heritage</div>
              </div>
              <div>
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#D5BAA6]">500+</div>
                <div className="text-[11px] text-neutral-400">Delivered Units &amp; Projects</div>
              </div>
              <div>
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#D5BAA6]">10-Year</div>
                <div className="text-[11px] text-neutral-400">Structural Guarantee</div>
              </div>
              <div>
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#D5BAA6]">Zone IV/V</div>
                <div className="text-[11px] text-neutral-400">Seismic Ductile Detailing</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Publication / As Seen On Banner */}
      <section className="bg-[#182316] border-y border-[#31432B]/60 py-3.5 sm:py-4 relative z-20">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3 flex-shrink-0">
            <span className="text-[10.5px] sm:text-[11px] uppercase tracking-widest text-[#B0C5A6] font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D5BAA6] animate-pulse" />
              As Seen On
            </span>

            {/* Google Business Profile Badge */}
            <a
              href="https://www.google.com/maps?q=105+Rajpur+Road+Dehradun"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.16] border border-[#537048]/50 hover:border-[#4285F4] transition-all group shadow-sm"
              aria-label="View Gupta's Evergreen Developers Google Business Profile and Reviews"
            >
              {/* Official Google G Logo */}
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span className="font-bold text-white tracking-wide text-xs group-hover:text-[#D5BAA6] transition-colors">
                Google 5.0 ★
              </span>
            </a>

            {/* LinkedIn Company Badge */}
            <a
              href="https://www.linkedin.com/company/gupta-s-evergreen-developers-llp"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-[#0A66C2]/20 border border-[#537048]/50 hover:border-[#0A66C2] transition-all group shadow-sm"
              aria-label="Follow Gupta's Evergreen Developers LLP on LinkedIn"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-[#0A66C2] group-hover:scale-110 transition-transform flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.67 1.66 1.67 1.67 0 0 0 1.67 1.67 1.67 1.67 0 0 0 1.67-1.67A1.66 1.66 0 0 0 7.83 6.2z"/>
              </svg>
              <span className="font-bold text-white tracking-wide text-xs group-hover:text-[#0A66C2] transition-colors">
                LinkedIn
              </span>
            </a>

            {/* Crunchbase Badge */}
            <a
              href="https://www.crunchbase.com/organization/gupta-s-evergreen-developers-llp"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-[#0288D1]/20 border border-[#537048]/50 hover:border-[#0288D1] transition-all group shadow-sm"
              aria-label="View Gupta's Evergreen Developers on Crunchbase"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-[#0288D1] group-hover:scale-110 transition-transform flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.6 0H2.4A2.4 2.4 0 0 0 0 2.4v19.2A2.4 2.4 0 0 0 2.4 24h19.2a2.4 2.4 0 0 0 2.4-2.4V2.4A2.4 2.4 0 0 0 21.6 0zm-8.88 16.8a4.8 4.8 0 1 1 0-9.6c1.68 0 3.12.84 3.96 2.16l-2.04 1.2a2.4 2.4 0 1 0 0 2.64l2.04 1.2a4.73 4.73 0 0 1-3.96 2.4z"/>
              </svg>
              <span className="font-bold text-white tracking-wide text-xs group-hover:text-[#0288D1] transition-colors">
                Crunchbase
              </span>
            </a>

            {/* Justdial Badge */}
            <a
              href="https://www.justdial.com/Dehradun/Guptas-Evergreen-Developers-LLP"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-[#F15A24]/20 border border-[#537048]/50 hover:border-[#F15A24] transition-all group shadow-sm"
              aria-label="View Gupta's Evergreen Developers LLP on Justdial"
            >
              <span className="font-extrabold text-[#F15A24] text-xs">JD</span>
              <span className="font-bold text-white tracking-wide text-xs group-hover:text-[#F15A24] transition-colors">
                Justdial 5.0 ★
              </span>
            </a>

            {/* Medium Badge */}
            <a
              href="https://medium.com/@aromalgiyer/the-ultimate-home-builders-blueprint-navigating-construction-costs-mdda-regulations-and-hill-962085b3e62b?sharedUserId=aromalgiyer"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.16] border border-[#537048]/50 hover:border-[#D5BAA6] transition-all group shadow-sm"
              aria-label="Read Gupta's Evergreen Developers feature on Medium"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-white group-hover:fill-[#D5BAA6] transition-colors flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              <span className="font-bold text-white tracking-wide text-xs group-hover:text-[#D5BAA6] transition-colors">
                Medium
              </span>
            </a>

            {/* Pinterest Badge */}
            <a
              href="https://pin.it/gRJEAMxYw"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-[#E60023]/20 border border-[#537048]/50 hover:border-[#E60023] transition-all group shadow-sm"
              aria-label="Explore Gupta's Evergreen Developers architectural pins on Pinterest"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-[#E60023] group-hover:scale-110 transition-transform flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
              <span className="font-bold text-white tracking-wide text-xs group-hover:text-[#E60023] transition-colors">
                Pinterest
              </span>
            </a>
          </div>

          <a
            href="https://medium.com/@aromalgiyer/the-ultimate-home-builders-blueprint-navigating-construction-costs-mdda-regulations-and-hill-962085b3e62b?sharedUserId=aromalgiyer"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-neutral-300 hover:text-white text-xs flex items-center gap-2 transition-colors group text-center md:text-right"
          >
            <span className="text-[#D5BAA6] group-hover:underline line-clamp-1 font-medium">
              "The Ultimate Home Builder’s Blueprint: Navigating Construction Costs, MDDA Regulations, and Hill Engineering in Dehradun"
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D5BAA6] flex-shrink-0" />
          </a>
        </div>
      </section>

      {/* SECTION 2: Our Construction Services (Linking to Dedicated Service Pages) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6DFD5]">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 text-[#31432B] text-[11px] font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#5C3D2B]" />
              Turnkey &amp; Civil Engineering Solutions
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#1C1917] mb-3">
              Our Construction Services
            </h2>
            <div className="olive-brown-divider" />
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              We provide structured design-build solutions across residential, luxury villa, commercial, and remodeling sectors throughout Dehradun and the Mussoorie foothills.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Home Construction in Dehradun",
                url: "/home-construction-dehradun",
                icon: Home,
                badge: "Residential Turnkey",
                desc: "Complete custom home construction from soil testing to slab casting and interior handover, backed by a 5-year project warranty."
              },
              {
                title: "Turnkey Construction Solutions",
                url: "/turnkey-construction-dehradun",
                icon: ShieldCheck,
                badge: "Single Contract",
                desc: "End-to-end management covering architectural 3D plans, MDDA sanctions, structural RCC casting, and zero price escalation."
              },
              {
                title: "Builders and Developers",
                url: "/builders-developers-dehradun",
                icon: HardHat,
                badge: "Licensed Contracting",
                desc: "Registered corporate builders delivering residential developments and commercial frameworks with institutional compliance."
              },
              {
                title: "Construction Cost & Estimates",
                url: "/construction-cost-dehradun",
                icon: Calculator,
                badge: "From ₹1,650/sq.ft",
                desc: "Transparent 2026 house construction rates with locked BOQ pricing, material specifications, and interactive cost calculator."
              },
              {
                title: "Luxury Villa Construction",
                url: "/villa-construction-dehradun",
                icon: Sparkles,
                badge: "Dehradun & Mussoorie",
                desc: "Bespoke hill residences engineered for slope stability, panoramic views, thermal comfort, and natural stone facade cladding."
              },
              {
                title: "Commercial Construction",
                url: "/commercial-construction-dehradun",
                icon: Briefcase,
                badge: "Plazas & Offices",
                desc: "Multi-level retail complexes and office infrastructure built with column-free spans, basement parking, and MDDA compliance."
              },
              {
                title: "Home Renovation & Remodeling",
                url: "/home-renovation-dehradun",
                icon: RefreshCw,
                badge: "Structural Additions",
                desc: "Engineered room additions, second-story expansions, modular kitchen modernizations, and monsoon waterproofing repairs."
              }
            ].map((srv, idx) => (
              <div 
                key={idx} 
                className={`card-olive-brown p-6 bg-[#FAF8F5] flex flex-col justify-between group hover:border-[#3D5337] transition-all rounded-2xl ${
                  idx === 6 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#D5BAA6] flex items-center justify-center text-[#5C3D2B] group-hover:bg-[#2D3E28] group-hover:text-white transition-colors">
                      <srv.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white text-[#5C3D2B] border border-[#E6DFD5]">
                      {srv.badge}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#1C1917] mb-2 group-hover:text-[#3D5337] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {srv.desc}
                  </p>
                </div>

                <Link
                  to={srv.url}
                  className="pt-3 border-t border-[#E6DFD5] text-xs font-bold uppercase tracking-wider text-[#3D5337] group-hover:text-[#5C3D2B] flex items-center justify-between transition-colors"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: Why Choose Gupta's Evergreen Developers */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#E6DFD5]">
        <div className="container-custom">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#D5BAA6] shadow-xl">
                <img
                  src="/images/image_08.jpeg"
                  alt="Active RCC Rebar Construction in Dehradun"
                  className="w-full h-[320px] sm:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 p-3.5 rounded-xl bg-[#141C12] text-white border border-[#405737] shadow-xl text-center hidden sm:block">
                <div className="font-cinzel text-lg sm:text-xl font-bold text-[#D5BAA6]">LLPIN: ACP-3601</div>
                <div className="text-[9.5px] uppercase tracking-wider text-[#B0C5A6]">ROC Uttarakhand Registered</div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 text-[#31432B] text-[11px] font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#5C3D2B]" />
                Engineering Accountability
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C1917]">
                Why Choose Gupta's Evergreen Developers
              </h2>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Constructing a home in Dehradun involves unique geological and municipal conditions. We operate with salaried civil engineers and experienced site supervisors to deliver transparent, code-compliant building standards:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 py-2">
                <div className="flex items-start gap-2.5 text-xs text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#3D5337] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Subcontracting:</strong> Direct project oversight by founders Sunil Kumar Gupta and Vansh Gupta.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#3D5337] flex-shrink-0 mt-0.5" />
                  <span><strong>Locked-Price BOQ:</strong> Strict 0% price escalation agreement once your contract is signed.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#5C3D2B] flex-shrink-0 mt-0.5" />
                  <span><strong>Primary Mill Materials:</strong> Tata Tiscon Fe550D steel and machine-batched M25 concrete testing logs.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#5C3D2B] flex-shrink-0 mt-0.5" />
                  <span><strong>10-Year Warranty:</strong> Written 5-year workmanship and 10-year structural stability guarantee.</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="btn-olive-sleek text-xs px-6 py-3 inline-flex items-center gap-2"
                >
                  <span>Company Due Diligence &amp; Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Centered Justdial Verified Local Listing Showcase */}
      <section className="py-8 sm:py-10 bg-[#FAF8F5] border-b border-[#E6DFD5]">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#E6DFD5] hover:border-[#F15A24] transition-all shadow-md flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF3EE] border border-[#F15A24]/30 flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="font-extrabold text-[#F15A24] text-xl tracking-tight">JD</span>
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="font-cinzel text-base sm:text-lg font-bold text-[#1C1917]">
                    Justdial Verified Local Listing
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E8F5E9] text-[#1E7E34] border border-[#C8E6C9] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> 5.0 ★ Rated (249+ Ratings)
                  </span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Gupta's Evergreen Developers LLP — Premier Verified Civil Contractors &amp; Turnkey Builders at 105 Rajpur Road, Dehradun.
                </p>
                <div className="text-[11px] text-neutral-500 flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-0.5">
                  <span>Category: Building Contractors &amp; Architects</span>
                  <span>•</span>
                  <span>Location: Rajpur Road, Dehradun</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <a
                href="https://www.justdial.com/Dehradun/Guptas-Evergreen-Developers-LLP"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="px-6 py-3 rounded-full bg-[#F15A24] hover:bg-[#D94B1B] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-md transition-all group"
                aria-label="View Gupta's Evergreen Developers LLP on Justdial"
              >
                <span>Check Justdial Listing</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Completed Construction Projects */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6DFD5]">
        <div className="container-custom">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10 sm:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 text-[#31432B] text-[11px] font-bold uppercase tracking-wider mb-2">
                <Building2 className="w-3.5 h-3.5 text-[#5C3D2B]" />
                Verified On-Site Evidence
              </div>
              <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#1C1917]">
                Construction Projects in Dehradun
              </h2>
            </div>
            <Link
              to="/projects"
              className="btn-brown-sleek text-xs px-5 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2"
            >
              <span>View Full Case Studies (10 Sites)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'The Summit Villa — Rajpur Road',
                slug: 'summit-villa-rajpur-road',
                location: 'Rajpur Road, Dehradun',
                area: '6,800 Sq.Ft',
                type: 'Luxury Villa',
                image: '/images/image_03.jpeg',
                desc: '3-level contemporary villa with stone cladding, cantilevered balconies, and Seismic Zone IV ductile detailing.'
              },
              {
                title: 'Greenwood Horizon Duplex',
                slug: 'greenwood-horizon-duplex',
                location: 'Mussoorie Foothills',
                area: '4,500 Sq.Ft',
                type: 'Contemporary Residence',
                image: '/images/image_07.jpeg',
                desc: 'Composite concrete and steel structural frame with vertical louvers and Vastu-compliant layout.'
              },
              {
                title: 'Active Anti-Seismic RCC Casting',
                slug: 'active-rcc-slab-anti-seismic-casting',
                location: 'Sahastradhara Valley Site',
                area: '8,200 Sq.Ft Slab',
                type: 'RCC Civil Engineering',
                image: '/images/image_08.jpeg',
                desc: 'High-yield Fe550 TMT rebar grid binding and M25 machine-batched concrete pour with cube test sign-offs.'
              }
            ].map((p, idx) => (
              <div key={idx} className="card-olive-brown overflow-hidden group bg-white rounded-2xl border border-[#E6DFD5] flex flex-col justify-between">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141C12]/85 via-[#141C12]/20 to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#141C12]/90 px-3 py-1 rounded-full text-[10px] font-bold text-[#D5BAA6] border border-[#405737]/60">
                    {p.type}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between text-xs text-white font-medium">
                    <span>{p.location}</span>
                    <span className="font-bold text-[#E6ECE2]">{p.area}</span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-cinzel text-base font-bold text-[#1C1917] mb-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-2">
                      {p.desc}
                    </p>
                  </div>
                  <Link
                    to={`/projects/${p.slug}`}
                    className="text-xs uppercase font-bold tracking-wider text-[#3D5337] flex items-center justify-between pt-2 border-t border-[#FAF8F5] hover:text-[#5C3D2B] transition-colors"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: Turnkey Construction Services */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E6DFD5]">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 text-[#31432B] text-[11px] font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5C3D2B]" />
              Single-Contract Design-Build
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#1C1917] mb-3">
              Turnkey Construction Services
            </h2>
            <div className="olive-brown-divider" />
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Our turnkey construction model eliminates the complexity of coordinating separate architects, civil contractors, structural engineers, and interior subcontractors. Under one contract, we oversee every phase of your build in Dehradun.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#D5BAA6] flex items-center justify-center text-[#5C3D2B] mb-3">
                <Ruler className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-sm font-bold text-[#1C1917]">Architectural &amp; Vastu Layouts</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Custom 2D working floor plans, 3D elevations, and Vastu orientation customized to your plot topography.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#D5BAA6] flex items-center justify-center text-[#5C3D2B] mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-sm font-bold text-[#1C1917]">MDDA Map Sanctions</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Full municipal documentation, structural STAAD reports, and sanction facilitation with the development authority.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#D5BAA6] flex items-center justify-center text-[#5C3D2B] mb-3">
                <HardHat className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-sm font-bold text-[#1C1917]">Anti-Seismic Civil Structure</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Machine-batched M25 concrete casting and Tata Tiscon Fe550D rebar grid compliant with Seismic Zone IV/V codes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#D5BAA6] flex items-center justify-center text-[#5C3D2B] mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-sm font-bold text-[#1C1917]">Interior Fitout &amp; Handover</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Premium vitrified/marble flooring, modular kitchens, Jaquar bath fittings, and written 10-year structural warranty.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/turnkey-construction-dehradun"
              className="btn-brown-sleek text-xs px-7 py-3.5 inline-flex items-center gap-2 shadow-lg"
            >
              <span>Explore Complete Turnkey Construction Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Everything below the hero is lazy-loaded so it never gates the LCP paint */}
      <Suspense fallback={<div className="min-h-[40vh]" aria-hidden="true" />}>

      {/* SECTION 5: Our Construction Process */}
      <Process onOpenConsultation={() => onOpenConsultation('Process Consultation')} />

      {/* SECTION 6: Construction Cost & Project Estimates */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E6DFD5]">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 text-[#31432B] text-[11px] font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5 text-[#5C3D2B]" />
              Transparent Budget Planning
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#1C1917] mb-3">
              Construction Cost &amp; Project Estimates
            </h2>
            <div className="olive-brown-divider" />
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Estimate your plot construction budget with our interactive calculator, or explore our ₹1,650 to ₹2,450/sq.ft turnkey packages with locked material specifications.
            </p>
          </div>

          <CostCalculator onOpenConsultation={onOpenCalculatorConsultation} />

          <div className="mt-8 text-center">
            <Link
              to="/construction-cost-dehradun"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3D5337] hover:text-[#5C3D2B] transition-colors"
            >
              <span>Explore Complete 2026 Construction Cost Matrix &amp; Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 7: Areas We Serve */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E6DFD5]">
        <div className="container-custom max-w-4xl">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 text-[#31432B] text-[11px] font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#5C3D2B]" />
              Regional Presence
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#1C1917] mb-2">
              Areas We Serve
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Active residential and commercial construction coverage across primary urban corridors and foothill districts:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 text-xs text-neutral-700">
            {[
              { name: "Rajpur Road & Hathibarkala", note: "Luxury Villas & Plazas" },
              { name: "Sahastradhara Road", note: "Turnkey Residences" },
              { name: "Mussoorie & Foothills", note: "Hill Estates & Cottages" },
              { name: "Dalanwala", note: "Colonial & Modern Homes" },
              { name: "Vasant Vihar & GMS Road", note: "Independent Houses" },
              { name: "Chander Nagar & Haridwar Rd", note: "Urban Residences" },
              { name: "Canal Road & Jakhan", note: "Custom Duplexes" },
              { name: "Clement Town & Subhash Nagar", note: "Residential Projects" },
              { name: "Rishikesh & Haridwar Corridor", note: "Civil Contracting" }
            ].map((loc, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] space-y-0.5">
                <div className="font-bold text-[#1C1917] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#5C3D2B] flex-shrink-0" />
                  <span>{loc.name}</span>
                </div>
                <div className="text-[11px] text-neutral-500 pl-5">{loc.note}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8: Frequently Asked Questions */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#E6DFD5]">
        <div className="container-custom max-w-3xl">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 text-[#31432B] text-[11px] font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#5C3D2B]" />
              Clear Answers
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#1C1917] mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Essential questions homeowners ask when planning a construction project in Dehradun:
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-xl border border-[#E6DFD5] bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left font-cinzel text-sm sm:text-base font-bold text-[#1C1917] flex items-center justify-between gap-4 hover:text-[#3D5337] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#5C3D2B] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-[#FAF8F5] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Comparison Matrix & Reviews */}
      <Comparison />
      <Testimonials />
      <CitationsAndBacklinks />

      {/* SECTION 9: Request a Construction Estimate (Bottom Conversion Banner) */}
      <section className="py-14 sm:py-20 bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="rounded-2xl sm:rounded-3xl bg-[#141C12] text-white p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-5 sm:space-y-6 shadow-2xl relative overflow-hidden border border-[#31432B]/60">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D5BAA6] text-[11px] font-bold uppercase tracking-wider">
              Start Your Project
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Request a Construction Estimate
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl mx-auto">
              Schedule a complimentary on-site plot evaluation or meet directly with our designated partners Sunil Kumar Gupta and Vansh Gupta at 105 Rajpur Road.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center pt-2 sm:pt-4">
              <button
                type="button"
                onClick={() => onOpenConsultation('Footer Banner Consultation')}
                className="btn-brown-sleek text-xs px-7 py-3.5 shadow-xl"
              >
                Book Complimentary Site Inspection
              </button>
              <a
                href="tel:+919548393798"
                className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full border-2 border-[#D5BAA6]/70 bg-transparent hover:bg-white text-white hover:text-[#141C12] transition-all duration-300 shadow-lg group"
              >
                <PhoneCall className="w-4 h-4 text-[#D5BAA6] group-hover:text-[#141C12] transition-colors" />
                <span>Call +91 95483 93798</span>
              </a>
            </div>

            <div className="pt-4 text-xs text-neutral-400 flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D5BAA6]" />
              <span>105 Rajpur Road, near Parsvnath Eleganza, Hathibarkala Salwala, Dehradun, Uttarakhand – 248001</span>
            </div>
          </div>
        </div>
      </section>

      </Suspense>

    </div>
  );
}
