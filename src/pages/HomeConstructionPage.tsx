import { Link } from 'react-router-dom';
import { 
  Home, 
  ShieldCheck, 
  Ruler, 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageSquare,
  Building2,
  HardHat,
  ChevronRight,
  MapPin
} from 'lucide-react';
import { usePageSEO } from '../hooks/usePageSEO';
import CitationsAndBacklinks from '../components/CitationsAndBacklinks';

interface HomeConstructionPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export default function HomeConstructionPage({ onOpenConsultation }: HomeConstructionPageProps) {
  usePageSEO({
    title: "Home Construction Company in Dehradun | Custom House Builders",
    description: "Planning to build a home in Dehradun? Gupta's Evergreen Developers provides comprehensive residential construction, anti-seismic RCC engineering, and transparent pricing across the Doon Valley.",
    canonicalPath: "/home-construction-dehradun",
  });

  const whatsappUrl = `https://wa.me/919548393798?text=${encodeURIComponent(
    "Hello Gupta's Evergreen Developers, I am planning a residential home construction project in Dehradun and would like to request an estimate."
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Home Construction in Dehradun",
    "serviceType": "House Construction",
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
    "description": "Comprehensive residential home construction services in Dehradun covering architectural floor plans, structural engineering compliant with Seismic Zone IV codes, civil construction, and turnkey finishing."
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
        "name": "Home Construction in Dehradun",
        "item": "https://guptasevergreendevelopers.com/home-construction-dehradun"
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
          <span className="text-[#D5BAA6]">Home Construction Dehradun</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-[#141C12] text-white border-b border-[#31432B]/60">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E3F27] border border-[#537048]/40 text-[#D5BAA6] text-xs font-bold uppercase tracking-wider">
            <Home className="w-3.5 h-3.5 text-[#A87B5C]" />
            Residential Civil Construction
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Home Construction Company in Dehradun
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Turnkey home building from initial plot assessment and MDDA building sanction to earthquake-resistant structural casting and interior handover.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5 text-xs">
            <button
              type="button"
              onClick={() => onOpenConsultation?.('Home Construction Inquiry')}
              className="btn-brown-sleek px-7 py-3.5 text-xs shadow-xl"
            >
              Get Free Construction Estimate
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
              Building Reliable Residential Homes Across Dehradun
            </h2>
            <div className="olive-brown-divider !mx-0" />
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Constructing an independent house in Dehradun requires addressing regional environmental conditions, including sloping foothills, high monsoon precipitation, and the valley’s position in **Seismic Zone IV**. Gupta's Evergreen Developers LLP manages every phase of residential house construction with dedicated in-house civil engineering teams, ensuring structural durability, transparent milestone payments, and complete adherence to building codes.
            </p>
          </div>

          {/* Section 2: Core Scope */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#5C3D2B]" />
                Structural Engineering
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We engineer reinforced concrete frames using Tata Tiscon Fe550D rebar and machine-batched M25 concrete, strictly conforming to IS 1893 and IS 13920 ductile detailing for earthquake resistance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#5C3D2B]" />
                Municipal Sanction Support
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Full architectural coordination with the Mussoorie Dehradun Development Authority (MDDA) for building map approval, ensuring front setbacks, ground coverage, and rainwater harvesting compliance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <Ruler className="w-4 h-4 text-[#5C3D2B]" />
                Itemized BOQ Pricing
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Our house construction contracts feature an itemized Bill of Quantities (BOQ) with locked-in pricing and zero cost escalation, linking every payment stage directly to physical site completion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <HardHat className="w-4 h-4 text-[#5C3D2B]" />
                Multi-Tier Waterproofing
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Dehradun monsoon protection with Dr. Fixit elastomeric polymer tanking on foundation footings, sunken bathrooms, and rooftop terrace slabs backed by written workmanship warranties.
              </p>
            </div>
          </div>

          {/* Section 3: Real Project Evidence */}
          <div className="p-8 rounded-2xl bg-white border-2 border-[#D5BAA6] space-y-6">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917]">
              Verified Residential Project Evidence
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Explore authentic case studies of residential homes completed by our team in Dehradun:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <Link
                to="/projects/summit-villa-rajpur-road"
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#3D5337] transition-all block group"
              >
                <div className="font-bold text-[#1C1917] group-hover:text-[#3D5337] transition-colors mb-1">
                  The Summit Villa — Rajpur Road
                </div>
                <div className="text-neutral-600">6,800 sq.ft luxury contemporary 3-level residence completed in 2025.</div>
                <div className="text-[#5C3D2B] font-bold mt-2">Inspect Case Study →</div>
              </Link>

              <Link
                to="/projects/greenwood-horizon-duplex"
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#3D5337] transition-all block group"
              >
                <div className="font-bold text-[#1C1917] group-hover:text-[#3D5337] transition-colors mb-1">
                  Greenwood Horizon Duplex — Mussoorie Foothills
                </div>
                <div className="text-neutral-600">4,500 sq.ft contemporary duplex residence completed in 2024.</div>
                <div className="text-[#5C3D2B] font-bold mt-2">Inspect Case Study →</div>
              </Link>
            </div>
          </div>

          {/* Section 4: Cost Estimator Link */}
          <div className="p-8 rounded-2xl bg-[#141C12] text-white border border-[#31432B]/60 space-y-4">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Residential Construction Packages &amp; Rates
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Our residential home construction packages range from ₹1,650/sq.ft for basic essential specifications to ₹1,950/sq.ft for premium builds and ₹2,450+/sq.ft for luxury villas. Calculate your home budget with our online tool.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/construction-cost-dehradun"
                className="btn-brown-sleek text-xs px-6 py-3 inline-flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#D5BAA6]" />
                <span>View Construction Cost Guide</span>
              </Link>
              <Link
                to="/packages#calculator"
                className="btn-olive-outline text-xs px-6 py-3 border-white/60 text-white hover:bg-white hover:text-[#141C12] font-bold"
              >
                <span>Calculate Cost for Your Plot</span>
              </Link>
            </div>
          </div>

          {/* Contact Details */}
          <div className="text-center space-y-3 pt-6 border-t border-[#E6DFD5]">
            <div className="text-xs text-neutral-500">
              <MapPin className="w-3.5 h-3.5 inline mr-1 text-[#5C3D2B]" />
              <strong>Office:</strong> 105 Rajpur Road, near Parsvnath Eleganza, Hathibarkala Salwala, Dehradun, Uttarakhand – 248001
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
