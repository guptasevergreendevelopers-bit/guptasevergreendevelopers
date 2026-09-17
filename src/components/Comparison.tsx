import { 
  Check, 
  X, 
  ShieldCheck, 
  Award
} from 'lucide-react';

export default function Comparison() {
  const points = [
    {
      feature: 'Contractual Price Guarantee',
      gupta: 'Fixed-Price Itemized BOQ with 0% Cost Escalation Clause',
      others: 'Frequent price hikes midway through construction claiming material cost surges',
      isGuptaGood: true
    },
    {
      feature: 'Formal Project Warranty',
      gupta: 'Official 5-Year Workmanship Warranty & 10-Year Structural Guarantee Certificate',
      others: 'Zero warranty. Contractors disappear when seepage or cracks appear after 6 months',
      isGuptaGood: true
    },
    {
      feature: 'Site Execution Personnel',
      gupta: '100% In-House Civil Engineers & Licensed Architects on site full-time',
      others: 'Subcontracted to third-party unvetted masons with zero technical degree',
      isGuptaGood: true
    },
    {
      feature: 'Structural & Seismic Compliance',
      gupta: 'STAAD Pro Calculations engineered specifically for Uttarakhand Seismic Zones IV & V',
      others: 'Thumb-rule estimation without structural engineering or soil test reports',
      isGuptaGood: true
    },
    {
      feature: 'Material Procurement Standard',
      gupta: 'Direct factory dispatch of Tata Tiscon/Jindal Fe550 TMT, Ultratech/ACC, Kajaria, Jaquar',
      others: 'Secondary re-rolled local steel and unbranded local sand/gravel mixes',
      isGuptaGood: true
    },
    {
      feature: 'Payment Escrow Structure',
      gupta: 'Milestone-Linked Payments released strictly upon stage verification & client sign-off',
      others: 'Large advance payments demanded upfront before starting critical phases',
      isGuptaGood: true
    },
    {
      feature: 'Daily Transparency & Reporting',
      gupta: 'Daily WhatsApp digital photographic & drone progress log with checklist audits',
      others: 'Client forced to visit construction site constantly to detect substandard work',
      isGuptaGood: true
    },
    {
      feature: 'Timeline & Delay Penalty',
      gupta: 'Contractual handover commitment backed by delay penalty liquidated damages',
      others: 'Indefinite delays stretching projects by 6 to 18 months beyond promised date',
      isGuptaGood: true
    }
  ];

  return (
    <section className="section-padding bg-[#FAF8F5] relative border-t border-[#E6DFD5]">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#5C3D2B]" />
            Why Choose Gupta's Evergreen Developers LLP
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] mb-4">
            ORGANIZED CORPORATE RIGOR <br />
            <span className="text-olive-gradient">VS UNORGANIZED CONTRACTORS</span>
          </h2>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-600">
            Constructing a landmark in Dehradun is a life-defining investment. Here is how our corporate methodology protects your capital and peace of mind.
          </p>
        </div>

        {/* Comparison Table (Olive Green & Warm Brown Accents) */}
        <div className="card-olive-brown overflow-hidden shadow-xl border-[#D5BAA6]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#31432B]/40 bg-[#182316] text-white">
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-[#D5BAA6] w-1/4">
                    Key Assurance Metric
                  </th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#263421] border-x border-[#31432B] w-3/8">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#B0C5A6]" />
                      <span>Gupta's Evergreen Developers LLP</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-neutral-400 w-3/8">
                    Traditional Local Contractors
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6DFD5] text-xs sm:text-sm bg-white">
                {points.map((p, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-[#FAF8F5] transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-[#1C1917]">
                      {p.feature}
                    </td>
                    <td className="py-4 px-6 bg-[#F4F6F2] border-x border-[#E6DFD5] text-[#2D3E28] font-semibold">
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#405737] flex-shrink-0 mt-0.5" />
                        <span>{p.gupta}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-neutral-500">
                      <div className="flex items-start gap-2.5">
                        <X className="w-4 h-4 text-[#8E6144] flex-shrink-0 mt-0.5" />
                        <span>{p.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}