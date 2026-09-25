import { 
  Calculator, 
  Layers, 
  ShieldCheck, 
  Award, 
  Check, 
  ArrowRight, 
  CalendarCheck
} from 'lucide-react';
import CostCalculator from '../components/CostCalculator';
import Packages from '../components/Packages';

interface PackagesPageProps {
  onOpenConsultation: (pkgTitle?: string) => void;
  onOpenCalculatorConsultation: (data?: any) => void;
}

export default function PackagesPage({ onOpenConsultation, onOpenCalculatorConsultation }: PackagesPageProps) {
  return (
    <div className="bg-[#FAF8F5] text-neutral-900 space-y-0">
      
      {/* Page Header (Forest Olive Night) */}
      <section className="relative py-24 bg-[#141C12] text-white border-b border-[#31432B]/60">
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E3F27] border border-[#537048]/40 text-[#D5BAA6] text-xs font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-[#A87B5C]" />
            Transparent Construction Packages & Rates
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            CONSTRUCTION PACKAGES & <br />
            <span className="text-[#D5BAA6] border-b-2 border-[#8E6144] pb-1">INTERACTIVE ESTIMATOR</span>
          </h1>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate all ambiguity. View our standard ₹/sq.ft packages or calculate your custom project budget dynamically based on current Dehradun material costs.
          </p>
        </div>
      </section>

      {/* The 3 Construction Packages */}
      <Packages onOpenConsultation={onOpenConsultation} />

      {/* The Interactive Cost Calculator Section */}
      <CostCalculator onOpenConsultation={onOpenCalculatorConsultation} />

      {/* Milestone Payment Escrow Schedule */}
      <section className="py-20 bg-white border-t border-[#E6DFD5]">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 text-[#31432B] text-xs font-bold uppercase tracking-wider mb-3">
              <CalendarCheck className="w-3.5 h-3.5 text-[#5C3D2B]" />
              Zero Escrow Risk
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#1C1917] mb-4">
              MILESTONE-LINKED <span className="text-olive-gradient">PAYMENT STAGES</span>
            </h2>
            <div className="olive-brown-divider" />
            <p className="text-sm text-neutral-600">
              You never pay for work before it is completed. Payments are broken into verified construction stages with client inspection sign-offs at each milestone.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { stage: 'Stage 01', pct: '10%', title: 'Booking & Soil Testing', desc: 'Soil core lab testing, Vastu survey & 2D/3D architectural blueprint finalization' },
              { stage: 'Stage 02', pct: '15%', title: 'Excavation & Plinth Beam', desc: 'Foundation digging, anti-termite treatment, column footing & plinth beam casting' },
              { stage: 'Stage 03', pct: '20%', title: 'Ground Floor RCC Slab', desc: 'Ground floor column casting, shuttering, Fe550 steel rebar binding & slab concrete pour' },
              { stage: 'Stage 04', pct: '15%', title: 'Upper RCC Slabs & Beams', desc: 'First/Second floor column reinforcement and upper roof slab monolithic casting' },
              { stage: 'Stage 05', pct: '15%', title: 'Brickwork & Internal Plaster', desc: 'Class-A kiln red brick walls, door frame installation & dual-coat sand plastering' },
              { stage: 'Stage 06', pct: '15%', title: 'Flooring, Tiling & MEP', desc: 'Double-charged Kajaria tiles, concealed wiring, CPVC plumbing & bathroom tanking' },
              { stage: 'Stage 07', pct: '10%', title: 'Painting, Fixtures & Finishes', desc: 'Asian Paints Royale emulsion, switch plates, Jaquar sanitaryware & UPVC glazing' },
              { stage: 'Stage 08', pct: '0% Final', title: 'Deep Cleaning & Key Handover', desc: '100+ point quality audit sign-off, defect checklist clearance & 5-year warranty handover' }
            ].map((st, idx) => (
              <div key={idx} className="card-olive-brown p-6 flex flex-col justify-between bg-[#FAF8F5] border-[#E6DFD5]">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs uppercase font-bold text-[#5C3D2B]">{st.stage}</span>
                    <span className="font-cinzel text-lg font-bold text-[#31432B]">{st.pct}</span>
                  </div>
                  <h4 className="font-cinzel text-base font-bold text-[#1C1917] mb-2">{st.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Custom Estimate CTA Banner */}
      <section className="py-16 bg-[#141C12] text-white text-center border-t border-[#31432B]/60">
        <div className="container-custom max-w-2xl mx-auto space-y-4">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
            Need a Custom Bill of Quantities (BOQ)?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300">
            Have architectural drawings already prepared? Send us your AutoCAD or PDF blueprints, and our quantity surveyors will provide a free itemized BOQ within 48 hours.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenConsultation('Custom BOQ Blueprint Request')}
              className="btn-brown-sleek text-xs px-8 py-3.5 inline-flex items-center justify-center gap-2 shadow-xl"
            >
              <span>Upload Blueprints for BOQ Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}