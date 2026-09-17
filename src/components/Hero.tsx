import { 
  ShieldCheck, 
  Award, 
  Star, 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  PhoneCall, 
  Building2,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation?: () => void;
  onNavigate?: (id: string) => void;
}

export default function Hero({ onOpenConsultation, onNavigate }: HeroProps) {
  const scrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden blueprint-grid">
      {/* Background Hero Layer with Luxury Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/image_03.jpeg"
          alt="Luxury Architectural Villa in Dehradun by Gupta's Evergreen Developers LLP"
          className="w-full h-full object-cover object-center filter brightness-[0.4] scale-105 transform motion-safe:animate-pulse transition-all duration-1000"
          style={{ animationDuration: '10s' }}
        />
        {/* Cinematic Vignette & Radial Gold Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080E1A] via-[#080E1A]/80 to-[#080E1A]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080E1A] via-[#080E1A]/70 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          
          {/* Top Verification Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-[#C5A059]/40 backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]"></span>
            </span>
            <span className="text-xs uppercase tracking-widest text-[#E8D3A2] font-semibold">
              ESTD. 2012 • Dehradun's Premier Turnkey Builders • LLPIN: ACP-3601
            </span>
          </div>

          {/* Majestic Main Headline */}
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6">
            BUILDING ARCHITECTURAL <br className="hidden sm:block" />
            <span className="text-gold-gradient">LEGACIES & MASTERPIECES</span>
          </h1>

          {/* Subheading with Local Authority */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mb-10">
            From bespoke hillside villas in Mussoorie to turnkey residences and commercial complexes across Dehradun, 
            <strong> Gupta's Evergreen Developers LLP</strong> delivers uncompromising engineering, earthquake-resistant structural design, and transparent pricing backed by our <strong>5-Year Warranty</strong>.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14 justify-center lg:justify-start">
            <button
              onClick={() => scrollTo('calculator')}
              className="btn-gold-luxury w-full sm:w-auto flex items-center justify-center gap-2 text-sm px-8 py-4 shadow-xl"
            >
              <Calculator className="w-4 h-4" />
              <span>Calculate Construction Cost</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => scrollTo('packages')}
              className="btn-gold-outline w-full sm:w-auto flex items-center justify-center gap-2 text-sm px-8 py-4"
            >
              <Building2 className="w-4 h-4 text-[#C5A059]" />
              <span>View ₹/Sq.ft Packages</span>
            </button>

            <a
              href="tel:+919548393798"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#C5A059]" />
              <span>Call: +91 95483 93798</span>
            </a>
          </div>

          {/* Trust Guarantees Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.1]">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E8D3A2] mb-0.5">13+</div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Years Experience</div>
              <div className="text-[10px] text-slate-500">Established 2012</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E8D3A2] mb-0.5">500+</div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Structures Delivered</div>
              <div className="text-[10px] text-slate-500">Residential & Commercial</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E8D3A2] mb-0.5">5.0 ★</div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Perfect Rating</div>
              <div className="text-[10px] text-slate-500">Google (120) & Justdial (159)</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E8D3A2] mb-0.5">5 YR</div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Project Warranty</div>
              <div className="text-[10px] text-slate-500">10-Yr Structural Guarantee</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}