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
  Sparkles
} from 'lucide-react';
import { usePageSEO } from '../hooks/usePageSEO';
import CitationsAndBacklinks from '../components/CitationsAndBacklinks';

interface VillaConstructionPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export default function VillaConstructionPage({ onOpenConsultation }: VillaConstructionPageProps) {
  usePageSEO({
    title: "Luxury Villa Construction in Dehradun & Mussoorie | Custom Builders",
    description: "Bespoke luxury villa construction in Dehradun and the Mussoorie foothills. Featuring earthquake-resistant ductile frames, panoramic glass elevations, and premium hill-estate finishes.",
    canonicalPath: "/villa-construction-dehradun",
  });

  const whatsappUrl = `https://wa.me/919548393798?text=${encodeURIComponent(
    "Hello Gupta's Evergreen Developers, I am interested in building a luxury villa in Dehradun / Mussoorie."
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury Villa Construction in Dehradun & Mussoorie",
    "serviceType": "Villa Construction",
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
    "areaServed": [
      { "@type": "City", "name": "Dehradun" },
      { "@type": "City", "name": "Mussoorie" }
    ],
    "description": "Bespoke contemporary and classical luxury villa design and construction in Dehradun and Mussoorie. Specialized in hill slope civil engineering, acoustic double-glazing, cantilevered terraces, and high-altitude weatherproofing."
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
        "name": "Villa Construction in Dehradun",
        "item": "https://guptasevergreendevelopers.com/villa-construction-dehradun"
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
          <span className="text-[#D5BAA6]">Villa Construction Dehradun</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-[#141C12] text-white border-b border-[#31432B]/60">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E3F27] border border-[#537048]/40 text-[#D5BAA6] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#A87B5C]" />
            Bespoke Luxury Architecture
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Luxury Villa Construction in Dehradun
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Architectural masterpieces crafted for the Himalayan foothills. Specialized in cantilevered hillside decks, natural stone cladding, and luxury turnkey finishes.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5 text-xs">
            <button
              type="button"
              onClick={() => onOpenConsultation?.('Villa Construction Inquiry')}
              className="btn-brown-sleek px-7 py-3.5 text-xs shadow-xl"
            >
              Plan Your Custom Villa
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
              Engineering Luxury Residences in the Doon Valley &amp; Mussoorie
            </h2>
            <div className="olive-brown-divider !mx-0" />
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Building a luxury villa in Dehradun or Mussoorie demands a synthesis of contemporary aesthetics and hill slope structural engineering. From navigating steep contours and extreme monsoon rainfalls to capturing panoramic Himalayan vistas through acoustic double-glazed curtain walls, Gupta's Evergreen Developers LLP delivers bespoke residences that endure for generations.
            </p>
          </div>

          {/* Section 2: Villa Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#5C3D2B]" />
                Hill Slope &amp; Seismic Engineering
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Engineered step-footings, deep pile foundations, and reinforced retaining walls designed for foothill gradient slope loads and Seismic Zone IV/V compliance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#5C3D2B]" />
                Bespoke Natural Materials
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Hand-cut Dholpur sandstone facade cladding, seasoned Himalayan pinewood ceiling soffits, Italian Statuario marble floors, and custom wrought-iron balustrades.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#5C3D2B]" />
                Thermal &amp; Acoustic Comfort
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Saint-Gobain double-glazed argon-filled UPVC thermal windows, concealed ducted VRV climate control systems, and polyurethane foam roof sandwich insulation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <HardHat className="w-4 h-4 text-[#5C3D2B]" />
                Cantilevered Terraces &amp; Decks
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                High-altitude cantilevered viewing decks with heavy-duty bituminous torch-on waterproofing membranes and laminated toughened glass perimeter railings.
              </p>
            </div>
          </div>

          {/* Section 3: Villa Case Studies */}
          <div className="p-8 rounded-2xl bg-white border-2 border-[#D5BAA6] space-y-6">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917]">
              Standing Villa Evidence in Uttarakhand
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Explore authentic luxury villa projects delivered by our firm:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <Link
                to="/projects/summit-villa-rajpur-road"
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#3D5337] transition-all block group"
              >
                <div className="font-bold text-[#1C1917] group-hover:text-[#3D5337] transition-colors mb-1">
                  The Summit Villa — Rajpur Road
                </div>
                <div className="text-neutral-600">6,800 sq.ft three-level luxury villa with stone cladding and cantilevered balconies (Completed 2025).</div>
                <div className="text-[#5C3D2B] font-bold mt-2">Inspect Case Study →</div>
              </Link>

              <Link
                to="/projects/greenwood-horizon-duplex"
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#3D5337] transition-all block group"
              >
                <div className="font-bold text-[#1C1917] group-hover:text-[#3D5337] transition-colors mb-1">
                  Greenwood Horizon Duplex — Mussoorie Foothills
                </div>
                <div className="text-neutral-600">4,500 sq.ft contemporary duplex with wooden soffits and privacy louvers (Completed 2024).</div>
                <div className="text-[#5C3D2B] font-bold mt-2">Inspect Case Study →</div>
              </Link>

              <Link
                to="/projects/himalayan-ridge-master-attic-suite"
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#3D5337] transition-all block group"
              >
                <div className="font-bold text-[#1C1917] group-hover:text-[#3D5337] transition-colors mb-1">
                  Himalayan Ridge Penthouse Suite — Mussoorie
                </div>
                <div className="text-neutral-600">650 sq.ft timber-lined attic bedroom with floor-to-apex mountain glazing (Completed 2024).</div>
                <div className="text-[#5C3D2B] font-bold mt-2">Inspect Case Study →</div>
              </Link>

              <Link
                to="/projects/scenic-mountain-terrace-deck"
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#3D5337] transition-all block group"
              >
                <div className="font-bold text-[#1C1917] group-hover:text-[#3D5337] transition-colors mb-1">
                  Scenic Mountain Observation Deck — Mussoorie
                </div>
                <div className="text-neutral-600">900 sq.ft cantilevered hill terrace engineered for monsoon downpours (Completed 2024).</div>
                <div className="text-[#5C3D2B] font-bold mt-2">Inspect Case Study →</div>
              </Link>
            </div>
          </div>

          {/* Section 4: Cost Link */}
          <div className="p-8 rounded-2xl bg-[#141C12] text-white border border-[#31432B]/60 space-y-4">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Luxury Turnkey Villa Rates
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Our Luxury Turnkey Villa package starts at ₹2,450/sq.ft and includes high-tensile steel, machine-batched concrete, soil core drilling, Italian marble flooring, and smart home automation.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs">
              <Link
                to="/construction-cost-dehradun"
                className="btn-brown-sleek px-6 py-3 inline-flex items-center gap-2"
              >
                <span>View Villa Cost Breakdown</span>
              </Link>
              <Link
                to="/turnkey-construction-dehradun"
                className="btn-olive-outline px-6 py-3 border-white/60 text-white hover:bg-white hover:text-[#141C12] font-bold"
              >
                <span>Turnkey Construction Process</span>
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
