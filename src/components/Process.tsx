import { 
  Compass, 
  Ruler, 
  FileCheck2, 
  Hammer, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

interface ProcessProps {
  onOpenConsultation?: () => void;
}

export default function Process({ onOpenConsultation }: ProcessProps) {
  const steps = [
    {
      num: '01',
      title: 'Geotechnical Soil Testing & Vastu Consultation',
      desc: 'Before breaking ground, our certified engineers conduct core soil lab testing to assess bearing capacity, water table, and seismic susceptibility, while our Vastu experts align your floor plan.',
      icon: Compass,
      points: ['Soil core lab report', 'Topographical survey', 'Vastu energy alignment']
    },
    {
      num: '02',
      title: '3D Photorealistic Blueprints & MDDA Sanctions',
      desc: 'Our architects develop comprehensive 2D working floor plans and high-resolution 3D elevations. We handle documentation for MDDA (Mussoorie Dehradun Development Authority) map approval.',
      icon: Ruler,
      points: ['Interactive 3D elevations', 'Structural STAAD analysis', 'MDDA sanction facilitation']
    },
    {
      num: '03',
      title: 'Itemized BOQ & Fixed-Price Legal Agreement',
      desc: 'Complete transparency from day one. You receive a legally binding Bill of Quantities specifying every material brand (Tata, Ultratech, Kajaria, Jaquar) with locked milestone payments.',
      icon: FileCheck2,
      points: ['Zero hidden price escalations', 'Milestone-based escrow stages', 'Contractually guaranteed timeline']
    },
    {
      num: '04',
      title: 'Anti-Seismic Foundation & RCC Superstructure',
      desc: 'Heavy reinforced column-beam frame casting strictly adhering to Uttarakhand Seismic Zone IV & V standards using certified Fe550 steel, river sand, and continuous cube test verification.',
      icon: Hammer,
      points: ['Ductile seismic detailing', 'Lab cube compression tests', 'Daily photo & drone log via WhatsApp']
    },
    {
      num: '05',
      title: 'Luxury Finishing & 100+ Quality Audits',
      desc: 'Our master craftsmen install precision vitrified or Italian marble flooring, concealed plumbing with 24-hr pressure testing, Dr. Fixit chemical waterproofing, and luxury lighting.',
      icon: Sparkles,
      points: ['Multi-coat water testing', 'Concealed MEP pressure check', 'German hardware alignment']
    },
    {
      num: '06',
      title: 'Key Handover & 5-Year Warranty Certificate',
      desc: 'Upon full deep cleaning and final defect-free audit, you receive the keys along with our official 5-Year Workmanship Warranty and 10-Year Structural Guarantee Certificate.',
      icon: ShieldCheck,
      points: ['5-Year project warranty card', 'As-built electrical/plumbing diagrams', 'Lifetime structural support']
    }
  ];

  return (
    <section id="process" className="section-padding bg-white relative border-t border-[#E6DFD5]">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#5C3D2B]" />
            The 6-Stage Precision Methodology
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] mb-4">
            HOW WE BUILD <span className="text-olive-gradient">WITHOUT COMPROMISE</span>
          </h2>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-600">
            A battle-tested turnkey construction workflow engineered over 13+ years to ensure total peace of mind, on-time delivery, and zero cost overruns.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="card-olive-brown p-7 relative flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-cinzel text-3xl font-extrabold text-[#CFDCC8] group-hover:text-[#405737] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#2D3E28] text-white flex items-center justify-center group-hover:bg-[#5C3D2B] transition-colors shadow-sm">
                      <Icon className="w-6 h-6 text-[#D5BAA6]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-cinzel text-lg font-bold text-[#1C1917] mb-3 group-hover:text-[#3D5337] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Sub Points */}
                <div className="pt-4 border-t border-[#E6DFD5] space-y-1.5">
                  {step.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-[11px] text-[#31432B] font-medium">
                      <CheckCircle2 className="w-3 h-3 text-[#537048] flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <button
            onClick={onOpenConsultation}
            className="btn-olive-sleek text-xs px-8 py-4 inline-flex items-center gap-2"
          >
            <span>Start Your Stage 01 Site Evaluation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}