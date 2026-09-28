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
  Award
} from 'lucide-react';
import { usePageSEO } from '../hooks/usePageSEO';
import CitationsAndBacklinks from '../components/CitationsAndBacklinks';

interface BuildersDevelopersPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export default function BuildersDevelopersPage({ onOpenConsultation }: BuildersDevelopersPageProps) {
  usePageSEO({
    title: "Builders and Developers in Dehradun | Gupta's Evergreen",
    description: "Licensed builders and developers in Dehradun. Gupta's Evergreen delivers residential developments, commercial plazas and civil engineering across Uttarakhand.",
    canonicalPath: "/builders-developers-dehradun",
  });

  const whatsappUrl = `https://wa.me/919548393798?text=${encodeURIComponent(
    "Hello Gupta's Evergreen Developers, I am looking for licensed builders and developers in Dehradun for my project."
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Civil Building and Development Services in Dehradun",
    "serviceType": "Builders and Developers",
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
      "@type": "AdministrativeArea",
      "name": "Uttarakhand"
    },
    "description": "Licensed builders and developers offering turnkey construction, residential building development, and commercial structural civil engineering in Dehradun and the Garhwal foothills."
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
        "name": "Builders & Developers in Dehradun",
        "item": "https://guptasevergreendevelopers.com/builders-developers-dehradun"
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
          <span className="text-[#D5BAA6]">Builders &amp; Developers Dehradun</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-[#141C12] text-white border-b border-[#31432B]/60">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E3F27] border border-[#537048]/40 text-[#D5BAA6] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[#A87B5C]" />
            Civil Engineering &amp; Development
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Builders and Developers in Dehradun
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Registered corporate builders delivering premium residences, hillside duplexes, and commercial developments with institutional governance and written warranties.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5 text-xs">
            <button
              type="button"
              onClick={() => onOpenConsultation?.('Builders & Developers Inquiry')}
              className="btn-brown-sleek px-7 py-3.5 text-xs shadow-xl"
            >
              Consult with Our Team
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
              Professional Development Standards for Uttarakhand
            </h2>
            <div className="olive-brown-divider !mx-0" />
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              When searching for builders and developers in Dehradun, property owners require partners who combine technical civil engineering expertise with statutory municipal compliance. Gupta's Evergreen Developers LLP (LLPIN: ACP-3601, operating trade dating to 2012) bridges the gap between disorganized local contractors and large corporate developers, providing hands-on engineering supervision by founders Sunil Kumar Gupta and Vansh Gupta.
            </p>
          </div>

          {/* Section 2: Core Development Capabilities */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#5C3D2B]" />
                Statutory Corporate Compliance
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Registered with the Ministry of Corporate Affairs (ROC Uttarakhand). We execute projects with formal legal contracts, transparent GST invoices, and verifiable corporate accountability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <HardHat className="w-4 h-4 text-[#5C3D2B]" />
                Geotechnical &amp; Seismic Design
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Every residential and commercial structure undergoes STAAD Pro modeling conforming to IS 1893 and IS 13920 seismic standards, specifically calibrated for Doon Valley alluvial soil.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#5C3D2B]" />
                MDDA Sanctions &amp; Bye-Laws
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We handle the entire municipal blueprint approval workflow with the Mussoorie Dehradun Development Authority, ensuring road width, setback, and rainwater harvesting compliance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#5C3D2B]" />
                Written Structural Warranties
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Unlike freelance contractors who offer zero post-handover liability, our builds come backed by a formal 5-Year Comprehensive Workmanship and 10-Year Structural Stability Warranty.
              </p>
            </div>
          </div>

          {/* Section 3: Project Evidence */}
          <div className="p-8 rounded-2xl bg-white border-2 border-[#D5BAA6] space-y-6">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917]">
              Standing Civil &amp; Residential Landmarks
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Inspect physical construction evidence delivered across major Dehradun corridors:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <Link
                to="/projects/active-rcc-slab-anti-seismic-casting"
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#3D5337] transition-all block group"
              >
                <div className="font-bold text-[#1C1917] group-hover:text-[#3D5337] transition-colors mb-1">
                  Active RCC Slab &amp; Anti-Seismic Casting
                </div>
                <div className="text-neutral-600">8,200 sq.ft civil structural slab casting in Sahastradhara Valley.</div>
                <div className="text-[#5C3D2B] font-bold mt-2">Inspect Case Study →</div>
              </Link>

              <Link
                to="/projects/rajpur-commercial-complex-framework"
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#3D5337] transition-all block group"
              >
                <div className="font-bold text-[#1C1917] group-hover:text-[#3D5337] transition-colors mb-1">
                  Rajpur Commercial Plaza Framework
                </div>
                <div className="text-neutral-600">14,000 sq.ft multi-level commercial infrastructure development.</div>
                <div className="text-[#5C3D2B] font-bold mt-2">Inspect Case Study →</div>
              </Link>
            </div>
          </div>

          {/* Section 4: Internal Links */}
          <div className="p-8 rounded-2xl bg-[#141C12] text-white border border-[#31432B]/60 space-y-4">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Explore Our Comprehensive Construction Solutions
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Learn more about our turnkey building methodology, home construction packages, and transparent costing models.
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
                <span>Turnkey Contracting Process</span>
              </Link>
              <Link
                to="/construction-cost-dehradun"
                className="btn-olive-outline px-6 py-3 border-white/60 text-white hover:bg-white hover:text-[#141C12] font-bold"
              >
                <span>Construction Cost Matrix</span>
              </Link>
            </div>
          </div>

          {/* Contact Details */}
          <div className="text-center space-y-3 pt-6 border-t border-[#E6DFD5]">
            <div className="text-xs text-neutral-500">
              <MapPin className="w-3.5 h-3.5 inline mr-1 text-[#5C3D2B]" />
              <strong>Operating Office:</strong> 105 Rajpur Road, near Parsvnath Eleganza, Hathibarkala Salwala, Dehradun, Uttarakhand – 248001
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
