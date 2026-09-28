import { Link } from 'react-router-dom';
import { 
  Calculator, 
  ShieldCheck, 
  Ruler, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageSquare,
  Building2,
  ChevronRight,
  MapPin,
  Layers,
  HelpCircle
} from 'lucide-react';
import { usePageSEO } from '../hooks/usePageSEO';
import CostCalculator from '../components/CostCalculator';
import Packages from '../components/Packages';
import CitationsAndBacklinks from '../components/CitationsAndBacklinks';

interface ConstructionCostPageProps {
  onOpenConsultation?: (topic?: string) => void;
  onOpenCalculatorConsultation?: (data?: any) => void;
}

export default function ConstructionCostPage({ onOpenConsultation, onOpenCalculatorConsultation }: ConstructionCostPageProps) {
  usePageSEO({
    title: "House Construction Cost in Dehradun | 2026 Calculator",
    description: "Transparent 2026 house construction cost per sq ft in Dehradun. Explore packages from ₹1,650 to ₹2,450/sq ft with locked BOQ pricing, material specifications, and instant cost calculator.",
    canonicalPath: "/construction-cost-dehradun",
  });

  const whatsappUrl = `https://wa.me/919548393798?text=${encodeURIComponent(
    "Hello Gupta's Evergreen Developers, I would like to get a detailed construction cost estimate for my residential plot in Dehradun."
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Dehradun House Construction Cost Calculator & Packages",
    "url": "https://guptasevergreendevelopers.com/construction-cost-dehradun",
    "applicationCategory": "RealEstateApplication",
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
    "description": "Interactive residential construction cost estimator for Dehradun and Uttarakhand. Calculate per square foot construction rates across Basic (₹1,650), Standard (₹1,950), and Luxury (₹2,450) tiers."
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
        "name": "Construction Cost in Dehradun",
        "item": "https://guptasevergreendevelopers.com/construction-cost-dehradun"
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
          <span className="text-[#D5BAA6]">Construction Cost Dehradun</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-[#141C12] text-white border-b border-[#31432B]/60">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E3F27] border border-[#537048]/40 text-[#D5BAA6] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#A87B5C]" />
            Transparent 2026 Price Index
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            House Construction Cost in Dehradun
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Realistic per-square-foot residential building rates in Uttarakhand with locked-in material specifications and strict zero price escalation guarantees.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5 text-xs">
            <button
              type="button"
              onClick={() => onOpenConsultation?.('Cost Calculator Consultation')}
              className="btn-brown-sleek px-7 py-3.5 text-xs shadow-xl"
            >
              Get Custom Cost Estimate
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

          {/* Section 1: Overview & Price Matrix */}
          <div className="space-y-4">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1C1917]">
              Understanding Construction Rates per Square Foot in Dehradun
            </h2>
            <div className="olive-brown-divider !mx-0" />
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              In 2026, building costs in Dehradun typically range from **₹1,650 to ₹2,450+ per square foot** of built-up area. As analyzed in our published engineering whitepaper on{' '}
              <a
                href="https://medium.com/@aromalgiyer/the-ultimate-home-builders-blueprint-navigating-construction-costs-mdda-regulations-and-hill-962085b3e62b?sharedUserId=aromalgiyer"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#5C3D2B] font-bold underline hover:text-[#31432B]"
              >
                Medium ("The Ultimate Home Builder’s Blueprint")
              </a>
              , the final expenditure depends directly on the structural steel grade (Fe500 vs. Fe550D), concrete batching methodology (site-mix vs. machine-batched M25), flooring materials (vitrified tiles vs. imported Italian marble), and whether the terrain requires hill slope retaining walls or specialized drainage.
            </p>
          </div>

          {/* Section 2: Rate Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#E6DFD5] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#FAF8F5] text-[#1C1917] font-bold font-cinzel border-b border-[#E6DFD5]">
                <tr>
                  <th className="p-4">Package Tier</th>
                  <th className="p-4">Rate (Per Sq.Ft)</th>
                  <th className="p-4">Core Material Specifications</th>
                  <th className="p-4">Warranty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#FAF8F5] text-neutral-700">
                <tr>
                  <td className="p-4 font-bold text-[#31432B]">Basic Essential</td>
                  <td className="p-4 font-semibold">₹1,650 / sq.ft</td>
                  <td className="p-4">Fe500 TMT Steel, PPC Cement, Red Clay Bricks, 2x2 Vitrified Tiles</td>
                  <td className="p-4">5-Year Warranty</td>
                </tr>
                <tr className="bg-[#FAF8F5]/60">
                  <td className="p-4 font-bold text-[#5C3D2B]">Premium Standard</td>
                  <td className="p-4 font-semibold text-[#5C3D2B]">₹1,950 / sq.ft</td>
                  <td className="p-4">Tata Tiscon Fe550D Rebar, M25 Concrete, Kajaria 4x2 Slabs, Jaquar Bath, UPVC Windows</td>
                  <td className="p-4 font-bold text-[#31432B]">5-Yr + 10-Yr Structural</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#8E6144]">Luxury Turnkey</td>
                  <td className="p-4 font-semibold">₹2,450+ / sq.ft</td>
                  <td className="p-4">Primary Mill Fe550D, M30 Concrete, Italian Marble, Grohe/Kohler, Teakwood Doors</td>
                  <td className="p-4 font-bold text-[#31432B]">10-Yr Structural Guarantee</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 3: Interactive Calculator */}
          <div className="space-y-4 pt-4">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917]">
              Interactive Plot Budget Estimator
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              Select your plot area, desired floor configuration, and package tier below to estimate your construction budget:
            </p>
            <CostCalculator onOpenConsultation={onOpenCalculatorConsultation} />
          </div>

          {/* Section 4: Packages Matrix */}
          <div className="space-y-4 pt-4">
            <Packages onOpenConsultation={onOpenConsultation} />
          </div>

          {/* Section 5: Common Cost Questions */}
          <div className="p-8 rounded-2xl bg-white border border-[#E6DFD5] space-y-6">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#5C3D2B]" />
              Frequently Asked Questions on Dehradun Building Costs
            </h3>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <div className="font-bold text-[#1C1917]">Does the per-square-foot rate include architectural plans and MDDA map approvals?</div>
                <div className="text-neutral-600">Yes, our turnkey packages include complete architectural 2D floor plans, 3D elevations, structural calculations, and documentation coordination for MDDA municipal filing.</div>
              </div>
              <div className="space-y-1 pt-3 border-t border-[#FAF8F5]">
                <div className="font-bold text-[#1C1917]">How are payments structured during construction?</div>
                <div className="text-neutral-600">We use an escrow milestone schedule tied to physical completion stages: 10% on excavation, 15% on plinth beam casting, 20% on ground slab casting, and gradual progress payments through finishing.</div>
              </div>
              <div className="space-y-1 pt-3 border-t border-[#FAF8F5]">
                <div className="font-bold text-[#1C1917]">What happens if steel or cement prices rise during my build?</div>
                <div className="text-neutral-600">Our contract features a strict Zero Price Escalation agreement. Once your Bill of Quantities (BOQ) is signed, our firm absorbs material price fluctuations.</div>
              </div>
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
