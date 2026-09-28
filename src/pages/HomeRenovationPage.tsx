import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Ruler, 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageSquare,
  HardHat,
  ChevronRight,
  MapPin,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { usePageSEO } from '../hooks/usePageSEO';
import CitationsAndBacklinks from '../components/CitationsAndBacklinks';

interface HomeRenovationPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export default function HomeRenovationPage({ onOpenConsultation }: HomeRenovationPageProps) {
  usePageSEO({
    title: "Home Renovation in Dehradun | Remodeling & Structural Additions",
    description: "Professional home renovation and remodeling services in Dehradun. Floor additions, structural strengthening, waterproof bathroom redesigns, and modular kitchen modernizations.",
    canonicalPath: "/home-renovation-dehradun",
  });

  const whatsappUrl = `https://wa.me/919548393798?text=${encodeURIComponent(
    "Hello Gupta's Evergreen Developers, I would like to consult on a home renovation or remodeling project in Dehradun."
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Home Renovation & Remodeling in Dehradun",
    "serviceType": "Home Renovation",
    "provider": {
      "@type": "GeneralContractor",
      "name": "Gupta's Evergreen Developers LLP",
      "url": "https://guptasevergreendevelopers.com",
      "telephone": "+91-9548393798",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "105 Rajpur Road, near Parsvnath Eleganza, Hathibarkala Salwala",
        "addressLocality": "Dehradun",
        "addressRegion": "Uttarakhand",
        "postalCode": "248001",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Dehradun"
    },
    "description": "Comprehensive residential home renovation, structural retrofitting, floor additions, modular kitchen overhauls, and bathroom waterproofing across Dehradun and the Doon Valley."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://guptasevergreendevelopers.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Home Renovation in Dehradun",
        "item": "https://guptasevergreendevelopers.com/home-renovation-dehradun"
      }
    ]
  };

  return (
    <div className="bg-[#FAF8F5] text-neutral-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-[#121A10] border-b border-[#31432B]/50 py-2.5 text-xs text-neutral-400">
        <div className="container-custom flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600 flex-shrink-0" />
          <span className="text-[#D5BAA6]">Home Renovation Dehradun</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-[#141C12] text-white border-b border-[#31432B]/60">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E3F27] border border-[#537048]/40 text-[#D5BAA6] text-xs font-bold uppercase tracking-wider">
            <RefreshCw className="w-3.5 h-3.5 text-[#A87B5C]" />
            Remodeling &amp; Modernization
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Home Renovation in Dehradun
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Upgrade your living spaces with engineered structural retrofitting, floor additions, modular kitchen transformations, and spa bathroom renovations.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5 text-xs">
            <button
              type="button"
              onClick={() => onOpenConsultation?.('Home Renovation Consultation')}
              className="btn-brown-sleek px-7 py-3.5 text-xs shadow-xl"
            >
              Request Renovation Estimate
            </button>
            <a
              href="tel:+919548393798"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/40 hover:bg-white hover:text-[#141C12] text-white font-bold transition-all"
            >
              <Phone className="w-4 h-4 text-[#D5BAA6]" />
              <span>Call +91 95483 93798</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold transition-all shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Our Team</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="py-14 sm:py-20">
        <div className="container-custom max-w-4xl space-y-12">

          {/* Section 1: Overview */}
          <div className="space-y-4">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1C1917]">
              Engineered Home Remodeling &amp; Structural Additions
            </h2>
            <div className="olive-brown-divider !mx-0" />
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Renovating an older house in Dehradun involves more than cosmetic paint and new tiles. Homes built before modern seismic enforcement often need column jacketing, foundation load checks, and updated waterproofing to handle monsoon weather. Gupta's Evergreen Developers LLP provides comprehensive structural assessments before any wall removal or upper-floor addition, guaranteeing safety, longevity, and modern aesthetics.
            </p>
          </div>

          {/* Section 2: Core Renovation Services */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <HardHat className="w-4 h-4 text-[#5C3D2B]" />
                Upper-Floor &amp; Room Additions
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Adding second stories, attic bedroom suites, or extended living wings with lightweight structural steel or reinforced concrete columns calculated for load-bearing capacity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#5C3D2B]" />
                Monsoon Waterproofing Rehabilitation
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Complete elimination of seepage, efflorescence, and moisture using Dr. Fixit 2-coat polyurethane tanking membranes on roof slabs, parapets, and sunken bathrooms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#5C3D2B]" />
                Modular Kitchen Overhauls
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Replacing dated cabinets with German-engineered modular setups featuring boiling waterproof (BWP) marine plywood (IS 710), Hafele soft-close hardware, and Italian marble surfaces.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#5C3D2B]" />
                Luxury Bathroom Conversions
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Spa bathroom remodeling with large-format porcelain slabs, wall-hung rimless WCs, thermostatic rainfall showers, and pressure-tested CPVC plumbing infrastructure.
              </p>
            </div>
          </div>

          {/* Section 3: Renovation Case Studies */}
          <div className="p-8 rounded-2xl bg-white border-2 border-[#D5BAA6] space-y-6">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917]">
              Renovation &amp; Interior Fitout Evidence
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Explore authentic interior and structural remodeling projects delivered by our team:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <Link
                to="/projects/bespoke-modern-culinary-studio"
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#3D5337] transition-all block group"
              >
                <div className="font-bold text-[#1C1917] group-hover:text-[#3D5337] transition-colors mb-1">
                  Bespoke Modern Culinary Studio — Chander Nagar
                </div>
                <div className="text-neutral-600">420 sq.ft ultra-luxury modular kitchen renovation with Hafele fittings and honed marble (Completed 2025).</div>
                <div className="text-[#5C3D2B] font-bold mt-2">Inspect Case Study →</div>
              </Link>

              <Link
                to="/projects/dark-slate-master-bathroom-suite"
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#3D5337] transition-all block group"
              >
                <div className="font-bold text-[#1C1917] group-hover:text-[#3D5337] transition-colors mb-1">
                  Dark Slate Master Bathroom Suite — Hathibarkala
                </div>
                <div className="text-neutral-600">180 sq.ft spa bathroom transformation with Dr. Fixit tanking and porcelain slabs (Completed 2025).</div>
                <div className="text-[#5C3D2B] font-bold mt-2">Inspect Case Study →</div>
              </Link>

              <Link
                to="/projects/himalayan-ridge-master-attic-suite"
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#3D5337] transition-all block group"
              >
                <div className="font-bold text-[#1C1917] group-hover:text-[#3D5337] transition-colors mb-1">
                  Himalayan Ridge Master Attic Suite — Mussoorie
                </div>
                <div className="text-neutral-600">650 sq.ft timber-lined roof addition with high-pitch insulated ceiling (Completed 2024).</div>
                <div className="text-[#5C3D2B] font-bold mt-2">Inspect Case Study →</div>
              </Link>

              <Link
                to="/projects/grand-classical-living-salon"
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#3D5337] transition-all block group"
              >
                <div className="font-bold text-[#1C1917] group-hover:text-[#3D5337] transition-colors mb-1">
                  Grand Classical Living Salon — Vasant Vihar
                </div>
                <div className="text-neutral-600">1,200 sq.ft neoclassical hall renovation with custom millwork wainscoting (2026).</div>
                <div className="text-[#5C3D2B] font-bold mt-2">Inspect Case Study →</div>
              </Link>
            </div>
          </div>

          {/* Section 4: Internal Links */}
          <div className="p-8 rounded-2xl bg-[#141C12] text-white border border-[#31432B]/60 space-y-4">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Related Turnkey &amp; Residential Services
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Explore our turnkey home construction services, civil building rates, and custom villa solutions across Uttarakhand.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs">
              <Link
                to="/home-construction-dehradun"
                className="btn-brown-sleek px-6 py-3 inline-flex items-center gap-2"
              >
                <span>Home Construction Services</span>
              </Link>
              <Link
                to="/turnkey-construction-dehradun"
                className="btn-olive-outline px-6 py-3 border-white/60 text-white hover:bg-white hover:text-[#141C12] font-bold"
              >
                <span>Turnkey Construction Solutions</span>
              </Link>
              <Link
                to="/construction-cost-dehradun"
                className="btn-olive-outline px-6 py-3 border-white/60 text-white hover:bg-white hover:text-[#141C12] font-bold"
              >
                <span>Cost &amp; Pricing Matrix</span>
              </Link>
            </div>
          </div>

          {/* Office & Contact */}
          <div className="text-center space-y-3 pt-6 border-t border-[#E6DFD5]">
            <div className="text-xs text-neutral-500">
              <MapPin className="w-3.5 h-3.5 inline mr-1 text-[#5C3D2B]" />
              <strong>Consultation Office:</strong> 105 Rajpur Road, near Parsvnath Eleganza, Hathibarkala Salwala, Dehradun, Uttarakhand – 248001
            </div>
            <div className="text-xs text-neutral-500">
              Direct Founder Hotlines: <strong>+91 95483 93798</strong> / <strong>+91 76687 66118</strong>
            </div>
          </div>

        </div>
      </div>

      <CitationsAndBacklinks />
    </div>
  );
}
