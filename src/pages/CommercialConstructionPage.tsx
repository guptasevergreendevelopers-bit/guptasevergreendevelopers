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
  Briefcase
} from 'lucide-react';
import { usePageSEO } from '../hooks/usePageSEO';
import CitationsAndBacklinks from '../components/CitationsAndBacklinks';

interface CommercialConstructionPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export default function CommercialConstructionPage({ onOpenConsultation }: CommercialConstructionPageProps) {
  usePageSEO({
    title: "Commercial Construction Company in Dehradun | Retail & Office Plazas",
    description: "Experienced commercial builders in Dehradun. Delivering multi-level commercial complexes, retail showrooms, and office frameworks with MDDA compliance and high-capacity RCC infrastructure.",
    canonicalPath: "/commercial-construction-dehradun",
  });

  const whatsappUrl = `https://wa.me/919548393798?text=${encodeURIComponent(
    "Hello Gupta's Evergreen Developers, I am planning a commercial construction project in Dehradun and would like to discuss specifications."
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Construction in Dehradun",
    "serviceType": "Commercial Building Construction",
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
    "description": "Multi-level commercial construction in Dehradun including retail showrooms, office complexes, commercial plazas, basement parking structures, and MDDA commercial sanction compliance."
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
        "name": "Commercial Construction in Dehradun",
        "item": "https://guptasevergreendevelopers.com/commercial-construction-dehradun"
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
          <span className="text-[#D5BAA6]">Commercial Construction Dehradun</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-[#141C12] text-white border-b border-[#31432B]/60">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E3F27] border border-[#537048]/40 text-[#D5BAA6] text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-[#A87B5C]" />
            Commercial Plazas &amp; Showrooms
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Commercial Construction Company in Dehradun
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Multi-level commercial complexes, retail showrooms, and office frameworks engineered for high footfall, column-free interior spans, and full MDDA compliance.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5 text-xs">
            <button
              type="button"
              onClick={() => onOpenConsultation?.('Commercial Project Consultation')}
              className="btn-brown-sleek px-7 py-3.5 text-xs shadow-xl"
            >
              Discuss Commercial Build
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
              Commercial Infrastructure Engineered for Long-Term Return on Investment
            </h2>
            <div className="olive-brown-divider !mx-0" />
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Commercial property development along major Dehradun corridors such as Rajpur Road, Sahastradhara Road, and GMS Road requires commercial structural loads, clear column-free retail spans, vehicular parking ramps, and strict fire exit compliance. Gupta's Evergreen Developers LLP delivers heavy-duty commercial superstructures from deep foundation casting to core-and-shell completion.
            </p>
          </div>

          {/* Section 2: Commercial Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#5C3D2B]" />
                Heavy-Duty Foundation &amp; Superstructure
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                High-capacity reinforced concrete column grids and raft foundations engineered to support multi-level dead, live, and seismic lateral loads in compliance with IS codes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#5C3D2B]" />
                MDDA Commercial Sanctions &amp; Setbacks
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Full documentation liaison ensuring sanctioned commercial floor heights (14+ feet ground clearance), mandatory frontage setbacks, and fire safety staircase ratios.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <Ruler className="w-4 h-4 text-[#5C3D2B]" />
                Column-Free Retail Showroom Spans
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Engineered post-tensioned beam calculations and heavy RCC transfer girders that maximize clear floor plates for retail display frontage and flexible tenant leasing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <HardHat className="w-4 h-4 text-[#5C3D2B]" />
                Basement Parking &amp; Drainage Systems
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Waterproofed basement vehicular parking bays, reinforced access ramps, stormwater collection tanks, and heavy-duty commercial drainage stacks.
              </p>
            </div>
          </div>

          {/* Section 3: Project Evidence */}
          <div className="p-8 rounded-2xl bg-white border-2 border-[#D5BAA6] space-y-6">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917]">
              Commercial Construction Evidence
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Examine our live commercial infrastructure progress on Rajpur Road:
            </p>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#3D5337] transition-all block group">
              <Link to="/projects/rajpur-commercial-complex-framework">
                <div className="font-bold text-base text-[#1C1917] group-hover:text-[#3D5337] transition-colors mb-1">
                  Rajpur Commercial Complex Framework — Dehradun
                </div>
                <div className="text-xs text-neutral-600 leading-relaxed">
                  14,000 sq.ft multi-level commercial retail and office complex featuring heavy structural clay brick masonry, reinforced concrete floor plates, dedicated parking frontage, and MDDA sanctioned commercial floor height.
                </div>
                <div className="text-xs text-[#5C3D2B] font-bold mt-2">Inspect Case Study →</div>
              </Link>
            </div>
          </div>

          {/* Section 4: Internal Links */}
          <div className="p-8 rounded-2xl bg-[#141C12] text-white border border-[#31432B]/60 space-y-4">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Related Construction &amp; Development Disciplines
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Discover our turnkey contracting process, builder credentials, and transparent civil rate structures.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs">
              <Link
                to="/turnkey-construction-dehradun"
                className="btn-brown-sleek px-6 py-3 inline-flex items-center gap-2"
              >
                <span>Turnkey Construction Services</span>
              </Link>
              <Link
                to="/builders-developers-dehradun"
                className="btn-olive-outline px-6 py-3 border-white/60 text-white hover:bg-white hover:text-[#141C12] font-bold"
              >
                <span>Builders &amp; Developers Overview</span>
              </Link>
              <Link
                to="/construction-cost-dehradun"
                className="btn-olive-outline px-6 py-3 border-white/60 text-white hover:bg-white hover:text-[#141C12] font-bold"
              >
                <span>Commercial Cost Estimator</span>
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
