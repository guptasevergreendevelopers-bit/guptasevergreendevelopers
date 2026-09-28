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

interface TurnkeyConstructionPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export default function TurnkeyConstructionPage({ onOpenConsultation }: TurnkeyConstructionPageProps) {
  usePageSEO({
    title: "Turnkey Construction in Dehradun | Design-Build Contractors",
    description: "Looking for complete turnkey construction in Dehradun? Gupta's Evergreen Developers manages architectural planning, MDDA approvals, structural casting, and turnkey handover under one contract.",
    canonicalPath: "/turnkey-construction-dehradun",
  });

  const whatsappUrl = `https://wa.me/919548393798?text=${encodeURIComponent(
    "Hello Gupta's Evergreen Developers, I am interested in turnkey construction services in Dehradun and would like to discuss my project."
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Turnkey Construction Services in Dehradun",
    "serviceType": "Turnkey Building Contracting",
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
    "description": "End-to-end turnkey residential and commercial construction in Dehradun including architectural design, MDDA map approvals, civil structural construction, MEP services, and interior handover."
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
        "name": "Turnkey Construction in Dehradun",
        "item": "https://guptasevergreendevelopers.com/turnkey-construction-dehradun"
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
          <span className="text-[#D5BAA6]">Turnkey Construction Dehradun</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-[#141C12] text-white border-b border-[#31432B]/60">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E3F27] border border-[#537048]/40 text-[#D5BAA6] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[#A87B5C]" />
            Single-Contract Accountability
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Turnkey Construction in Dehradun
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate the stress of managing separate architects, masons, electricians, and material suppliers. We deliver complete design-build solutions under one locked-price contract.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5 text-xs">
            <button
              type="button"
              onClick={() => onOpenConsultation?.('Turnkey Construction Inquiry')}
              className="btn-brown-sleek px-7 py-3.5 text-xs shadow-xl"
            >
              Request Project Consultation
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
              Why Choose Turnkey Design-Build in Uttarakhand?
            </h2>
            <div className="olive-brown-divider !mx-0" />
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Traditional piece-rate labor contracting frequently results in cost disputes, coordination delays, and material wastage. Under our turnkey construction model, Gupta's Evergreen Developers LLP assumes full legal, technical, and scheduling responsibility from plot soil testing to final key handover. You receive transparent stage-wise billing, locked-in material brands, and written warranties.
            </p>
          </div>

          {/* Section 2: Turnkey Stages */}
          <div className="space-y-6">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917]">
              Our 8-Stage Turnkey Construction Process
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD5] space-y-1">
                <div className="font-bold text-[#31432B]">Stage 1: Plot Feasibility &amp; Soil Study</div>
                <div className="text-neutral-600">On-site topographical survey, contour mapping, and soil bearing capacity analysis.</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD5] space-y-1">
                <div className="font-bold text-[#31432B]">Stage 2: Architectural &amp; Vastu Layouts</div>
                <div className="text-neutral-600">Custom 2D floor plans, 3D photorealistic elevations, and Vastu orientation review.</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD5] space-y-1">
                <div className="font-bold text-[#31432B]">Stage 3: MDDA Map Sanctions</div>
                <div className="text-neutral-600">Complete municipal documentation and building approval filing with local authorities.</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD5] space-y-1">
                <div className="font-bold text-[#31432B]">Stage 4: Structural RCC Engineering</div>
                <div className="text-neutral-600">Seismic Zone IV compliant column-beam ductile detailing using primary Fe550D rebar.</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD5] space-y-1">
                <div className="font-bold text-[#31432B]">Stage 5: Masonry &amp; MEP Conduit Routing</div>
                <div className="text-neutral-600">First-class red clay brickwork, electrical piping, and pressure-tested plumbing lines.</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD5] space-y-1">
                <div className="font-bold text-[#31432B]">Stage 6: Waterproofing &amp; Plastering</div>
                <div className="text-neutral-600">Dr. Fixit 2-coat tanking membranes on terraces, basements, and wet areas.</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD5] space-y-1">
                <div className="font-bold text-[#31432B]">Stage 7: Flooring &amp; Premium Finishes</div>
                <div className="text-neutral-600">Italian marble / Kajaria tiles, Jaquar bath fittings, and Asian Paints exterior coating.</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E6DFD5] space-y-1">
                <div className="font-bold text-[#31432B]">Stage 8: Final Inspection &amp; Key Handover</div>
                <div className="text-neutral-600">Comprehensive zero-defect audit, warranty documentation, and formal handover.</div>
              </div>
            </div>
          </div>

          {/* Section 3: Project Case Studies */}
          <div className="p-8 rounded-2xl bg-white border-2 border-[#D5BAA6] space-y-6">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917]">
              Turnkey Projects Delivered in Uttarakhand
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Review real case studies of residential and commercial turnkey buildings delivered by our team:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <Link
                to="/projects/summit-villa-rajpur-road"
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#3D5337] transition-all block group"
              >
                <div className="font-bold text-[#1C1917] group-hover:text-[#3D5337] transition-colors mb-1">
                  The Summit Villa — Rajpur Road
                </div>
                <div className="text-neutral-600">Full turnkey architectural, structural, and interior execution (6,800 sq.ft).</div>
                <div className="text-[#5C3D2B] font-bold mt-2">Inspect Case Study →</div>
              </Link>

              <Link
                to="/projects/rajpur-commercial-complex-framework"
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#3D5337] transition-all block group"
              >
                <div className="font-bold text-[#1C1917] group-hover:text-[#3D5337] transition-colors mb-1">
                  Rajpur Road Commercial Framework
                </div>
                <div className="text-neutral-600">14,000 sq.ft commercial plaza framework built with reinforced concrete plates.</div>
                <div className="text-[#5C3D2B] font-bold mt-2">Inspect Case Study →</div>
              </Link>
            </div>
          </div>

          {/* Section 4: Cost Link */}
          <div className="p-8 rounded-2xl bg-[#141C12] text-white border border-[#31432B]/60 space-y-4">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Turnkey Construction Rates &amp; Milestone Disbursements
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Our turnkey packages start at ₹1,650/sq.ft and offer complete price transparency. All disbursements are tied to physical milestones with zero advance payment risks.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/construction-cost-dehradun"
                className="btn-brown-sleek text-xs px-6 py-3 inline-flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#D5BAA6]" />
                <span>Explore Turnkey Pricing</span>
              </Link>
              <Link
                to="/home-construction-dehradun"
                className="btn-olive-outline text-xs px-6 py-3 border-white/60 text-white hover:bg-white hover:text-[#141C12] font-bold"
              >
                <span>View Home Construction Services</span>
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
