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
  PhoneCall
} from 'lucide-react';
import CostCalculator from '../components/CostCalculator';
import Comparison from '../components/Comparison';
import Testimonials from '../components/Testimonials';
import CitationsAndBacklinks from '../components/CitationsAndBacklinks';

interface HomePageProps {
  onOpenConsultation: (pkgOrProject?: string) => void;
  onOpenCalculatorConsultation: (data?: any) => void;
}

export default function HomePage({ onOpenConsultation, onOpenCalculatorConsultation }: HomePageProps) {
  return (
    <div className="bg-[#FAF8F5] text-neutral-900 space-y-0">
      
      {/* Hero Section (Rich Forest Olive Architectural Atmosphere) */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-16 sm:pt-20 pb-16 sm:pb-20 overflow-hidden bg-[#121A10] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image_03.jpeg"
            alt="Luxury Architectural Villa in Dehradun by Gupta's Evergreen Developers LLP"
            className="w-full h-full object-cover object-center filter brightness-[0.38] scale-105 transform transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121A10] via-[#121A10]/75 to-[#121A10]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121A10] via-[#121A10]/70 to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-6 sm:py-10">
          <div className="max-w-4xl mx-auto text-center lg:text-left">
            
            {/* Google Drive Logo Emblem Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-[#182316]/90 border border-[#405737]/60 backdrop-blur-md mb-6 sm:mb-8 shadow-2xl">
              <div className="w-7 h-7 rounded-lg bg-[#2E3F27] p-1 flex items-center justify-center border border-[#537048]/40 flex-shrink-0">
                <img
                  src="/images/drive_logo_gold.png"
                  alt="Drive Logo Crest"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left">
                <span className="text-[9.5px] sm:text-[10px] uppercase tracking-widest text-[#D5BAA6] font-bold block">
                  ESTD. 2012 • ROC UTTARAKHAND • LLPIN: ACP-3601
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#B0C5A6] font-medium">
                  Gupta's Evergreen Developers LLP • 105 Rajpur Road
                </span>
              </div>
            </div>

            {/* Main Responsive Headline */}
            <h1 className="font-cinzel text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.18] sm:leading-[1.14] mb-5 sm:mb-6">
              DEHRADUN'S PREMIER <br className="hidden sm:block" />
              <span className="text-[#D5BAA6] border-b-2 border-[#8E6144] pb-0.5 sm:pb-1">TURNKEY BUILDERS & ARCHITECTS</span>
            </h1>

            {/* Subheading */}
            <p className="text-xs sm:text-base lg:text-lg text-neutral-300 font-normal leading-relaxed max-w-3xl mb-8 sm:mb-10">
              For over 13 years, we have brought architectural precision, earthquake-resistant civil engineering, and bespoke luxury finishes to residences, hill villas, and commercial plazas across Dehradun, Mussoorie, Haridwar, and Rishikesh.
            </p>

            {/* CTAs (Olive & Brown Buttons) */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-10 sm:mb-14 justify-center lg:justify-start">
              <Link
                to="/packages#calculator"
                className="btn-brown-sleek w-full sm:w-auto flex items-center justify-center gap-2 text-xs uppercase tracking-wider px-8 py-4 shadow-xl"
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
                <span>Explore 500+ Projects</span>
              </Link>

              <button
                onClick={() => onOpenConsultation('General Enquiry')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-xs uppercase tracking-wider font-bold text-white transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#D5BAA6]" />
                <span>Book Site Visit</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-[#31432B]/60">
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#182316]/70 border border-[#405737]/40">
                <div className="font-cinzel text-xl sm:text-3xl font-extrabold text-[#D5BAA6] mb-0.5">13+</div>
                <div className="text-[10px] sm:text-xs text-[#B0C5A6] font-bold uppercase tracking-wider">Years Heritage</div>
                <div className="text-[9px] sm:text-[10px] text-neutral-400">Founded in 2012</div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-[#182316]/70 border border-[#405737]/40">
                <div className="font-cinzel text-xl sm:text-3xl font-extrabold text-white mb-0.5">500+</div>
                <div className="text-[10px] sm:text-xs text-[#B0C5A6] font-bold uppercase tracking-wider">Handed Over</div>
                <div className="text-[9px] sm:text-[10px] text-neutral-400">Zero Abandonment</div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-[#182316]/70 border border-[#405737]/40">
                <div className="font-cinzel text-xl sm:text-3xl font-extrabold text-[#D5BAA6] mb-0.5">5.0 ★</div>
                <div className="text-[10px] sm:text-xs text-[#B0C5A6] font-bold uppercase tracking-wider">Perfect Rating</div>
                <div className="text-[9px] sm:text-[10px] text-neutral-400">Google & Justdial</div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-[#182316]/70 border border-[#405737]/40">
                <div className="font-cinzel text-xl sm:text-3xl font-extrabold text-white mb-0.5">5 YR</div>
                <div className="text-[10px] sm:text-xs text-[#B0C5A6] font-bold uppercase tracking-wider">Warranty</div>
                <div className="text-[9px] sm:text-[10px] text-neutral-400">10-Yr Structural</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Summary Strip */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E6DFD5]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#D5BAA6] shadow-xl">
                <img
                  src="/images/image_08.jpeg"
                  alt="Active RCC Rebar Construction in Dehradun"
                  className="w-full h-[280px] sm:h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 p-3.5 rounded-xl bg-[#141C12] text-white border border-[#405737] shadow-xl text-center hidden sm:block">
                <div className="font-cinzel text-lg sm:text-xl font-bold text-[#D5BAA6]">LLPIN: ACP-3601</div>
                <div className="text-[9.5px] uppercase tracking-wider text-[#B0C5A6]">ROC Uttarakhand Registered</div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-[11px] font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#5C3D2B]" />
                Corporate Construction Standards
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C1917]">
                Eliminating Risk from <span className="text-olive-gradient">Uttarakhand Construction</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Building on the foothills of the Himalayas requires specialized knowledge of soil load-bearing capacities, seismic fault lines (Uttarakhand Seismic Zones IV & V), and heavy monsoon drainage. Unlike unorganized local contractors who subcontract to unverified labor, <strong>Gupta's Evergreen Developers LLP</strong> operates with a full-time, in-house team of structural engineers, licensed architects, and certified site supervisors.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 py-2">
                <div className="flex items-start gap-2.5 text-xs text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#3D5337] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Subcontracting:</strong> Direct execution by salaried in-house engineering staff.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#3D5337] flex-shrink-0 mt-0.5" />
                  <span><strong>Fixed-Price BOQ:</strong> 0% price escalation clause once agreement is executed.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#5C3D2B] flex-shrink-0 mt-0.5" />
                  <span><strong>Branded Materials:</strong> Tata Tiscon Fe550 steel & Ultratech cement dispatch slips.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#5C3D2B] flex-shrink-0 mt-0.5" />
                  <span><strong>5-Year Guarantee:</strong> Complete leakproofing and structural workmanship warranty.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="btn-olive-sleek text-xs px-6 sm:px-7 py-3 sm:py-3.5 inline-flex items-center gap-2"
                >
                  <span>Read Full Company Heritage & Leadership Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E6DFD5]">
        <div className="container-custom">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 mb-10 sm:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 text-[#31432B] text-[11px] font-bold uppercase tracking-wider mb-2 sm:mb-3">
                <Building2 className="w-3.5 h-3.5 text-[#5C3D2B]" />
                Comprehensive Capabilities
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C1917]">
                SPECIALIZED <span className="text-olive-gradient">CONSTRUCTION DOMAINS</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="btn-brown-outline text-xs px-5 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2 font-bold"
            >
              <span>View All 6 Service Disciplines</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Turnkey Residential Villas',
                rate: 'From ₹1,650 – ₹2,450/sq.ft',
                image: '/images/image_03.jpeg',
                desc: 'End-to-end luxury residence execution from soil core testing and architectural plans to foundation, RCC frame, and luxury finishing.'
              },
              {
                title: 'Architectural 3D Elevations & MDDA',
                rate: 'Vastu-Compliant Blueprints',
                image: '/images/image_07.jpeg',
                desc: 'Photorealistic 3D day/night visualization, structural STAAD analysis, and full assistance with Mussoorie Dehradun Development Authority map sanctions.'
              },
              {
                title: 'Commercial & Civil Infrastructure',
                rate: 'Plazas, Offices & Public Works',
                image: '/images/image_10.jpeg',
                desc: 'High-traffic retail showrooms, corporate offices, hill resorts in Mussoorie, and verified government civil infrastructure contracts.'
              }
            ].map((s, idx) => (
              <div key={idx} className="card-olive-brown overflow-hidden flex flex-col justify-between group bg-white">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141C12]/85 via-[#141C12]/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#141C12]/90 px-3 py-1 rounded-full text-[10px] font-bold text-[#D5BAA6] border border-[#405737]/60">
                    {s.rate}
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#1C1917] mb-2 group-hover:text-[#3D5337] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-5 sm:mb-6">
                      {s.desc}
                    </p>
                  </div>

                  <Link
                    to="/services"
                    className="btn-olive-sleek w-full py-3 text-xs flex items-center justify-center gap-1.5"
                  >
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Cost Calculator Teaser Widget */}
      <CostCalculator onOpenConsultation={onOpenCalculatorConsultation} />

      {/* Featured Projects Preview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container-custom">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 mb-10 sm:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 text-[#31432B] text-[11px] font-bold uppercase tracking-wider mb-2 sm:mb-3">
                <Building2 className="w-3.5 h-3.5 text-[#5C3D2B]" />
                Visual Evidence
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C1917]">
                RECENT SITES & <span className="text-olive-gradient">LANDMARKS</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="btn-brown-sleek text-xs px-5 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2"
            >
              <span>View Full Project Gallery (10+ Sites)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'The Summit Villa — Rajpur Road',
                location: 'Rajpur Road, Dehradun',
                area: '6,800 Sq.Ft',
                type: 'Luxury Villa',
                image: '/images/image_03.jpeg'
              },
              {
                title: 'Greenwood Horizon Duplex',
                location: 'Mussoorie Foothills',
                area: '4,500 Sq.Ft',
                type: 'Contemporary Residence',
                image: '/images/image_07.jpeg'
              },
              {
                title: 'Active Anti-Seismic RCC Casting',
                location: 'Dehradun Valley Site',
                area: '8,200 Sq.Ft Slab',
                type: 'Structural Engineering',
                image: '/images/image_08.jpeg'
              }
            ].map((p, idx) => (
              <div key={idx} className="card-olive-brown overflow-hidden group bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                <div className="p-4 sm:p-5">
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#1C1917] mb-1 sm:mb-2">
                    {p.title}
                  </h3>
                  <Link
                    to="/projects"
                    className="text-xs uppercase font-bold tracking-wider text-[#3D5337] flex items-center gap-1 hover:text-[#5C3D2B]"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Comparison Matrix */}
      <Comparison />

      {/* Verified Reviews Section */}
      <Testimonials />

      {/* Statutory Citations & Local Authority Backlinks */}
      <CitationsAndBacklinks />

      {/* Bottom Conversion Banner (Rich Forest Olive Atmosphere) */}
      <section className="py-14 sm:py-20 bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="rounded-2xl sm:rounded-3xl bg-[#141C12] text-white p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-5 sm:space-y-6 shadow-2xl relative overflow-hidden border border-[#31432B]/60">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D5BAA6] text-[11px] font-bold uppercase tracking-wider">
              Ready to Begin?
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              START YOUR DEHRADUN <br />
              <span className="text-[#D5BAA6]">CONSTRUCTION JOURNEY</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl mx-auto">
              Meet directly with our designated partners Sunil Kumar Gupta and Vansh Gupta at 105 Rajpur Road or schedule a complimentary on-site plot visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center pt-2 sm:pt-4">
              <button
                onClick={() => onOpenConsultation('Footer Banner Consultation')}
                className="btn-brown-sleek text-xs px-7 py-3.5"
              >
                Book Complimentary Site Inspection
              </button>
              <a
                href="tel:+919548393798"
                className="btn-olive-outline text-xs px-7 py-3.5 flex items-center justify-center gap-2 border-white/60 text-white hover:bg-white hover:text-[#2D3E28] font-bold"
              >
                <PhoneCall className="w-4 h-4 text-[#D5BAA6]" />
                <span>Call +91 95483 93798</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}