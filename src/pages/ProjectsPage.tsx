import { 
  Building2, 
  HardHat, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import Projects from '../components/Projects';

interface ProjectsPageProps {
  onOpenConsultation: (projectName?: string) => void;
}

export default function ProjectsPage({ onOpenConsultation }: ProjectsPageProps) {
  return (
    <div className="bg-[#FAF8F5] text-neutral-900 space-y-0">
      
      {/* Page Header (Forest Olive Night) */}
      <section className="relative py-24 bg-[#141C12] text-white border-b border-[#31432B]/60">
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E3F27] border border-[#537048]/40 text-[#D5BAA6] text-xs font-bold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5 text-[#A87B5C]" />
            Demonstrated Excellence in Uttarakhand
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            COMPLETED & ONGOING <br />
            <span className="text-[#D5BAA6] border-b-2 border-[#8E6144] pb-1">CONSTRUCTION LANDMARKS</span>
          </h1>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Real photographic evidence of our projects: luxury contemporary villas, anti-seismic RCC slab castings, commercial retail frameworks, and luxury modular kitchens.
          </p>
        </div>
      </section>

      {/* Main Interactive Projects Component */}
      <Projects onOpenConsultation={onOpenConsultation} />

      {/* Book In-Person Site Visit CTA */}
      <section className="py-20 bg-white border-t border-[#E6DFD5]">
        <div className="container-custom max-w-4xl mx-auto rounded-3xl bg-[#182316] text-white p-8 sm:p-14 text-center space-y-5 shadow-2xl border border-[#31432B]/60">
          <div className="w-14 h-14 rounded-2xl bg-[#2E3F27] border border-[#537048]/40 flex items-center justify-center text-[#D5BAA6] mx-auto">
            <HardHat className="w-7 h-7" />
          </div>
          <h3 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white">
            Want to Inspect Our Active Construction Sites in Person?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            We invite prospective homeowners and commercial developers to visit our ongoing sites in Dehradun and Mussoorie. Inspect our rebar grid, shuttering quality, M25 concrete casting, and brickwork craftsmanship firsthand.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation('In-Person Site Inspection Tour')}
              className="btn-brown-sleek text-xs px-8 py-3.5 inline-flex items-center justify-center gap-2 shadow-xl"
            >
              Book In-Person Site Inspection Tour
            </button>
            <a
              href="tel:+919548393798"
              className="btn-olive-outline text-xs px-8 py-3.5 border-white/60 text-white hover:bg-white hover:text-[#2D3E28] font-bold flex items-center justify-center gap-2 transition-all"
            >
              <span>Call +91 95483 93798</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}