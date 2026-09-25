import { useState, useId } from 'react';
import { 
  Calculator, 
  Ruler, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Info
} from 'lucide-react';

interface CostCalculatorProps {
  onOpenConsultation?: (initialData?: { area: number; packageType: string; floors: string; totalEstimate: string }) => void;
}

export default function CostCalculator({ onOpenConsultation }: CostCalculatorProps) {
  const [area, setArea] = useState<number>(1800);
  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'standard' | 'luxury'>('standard');
  const [floors, setFloors] = useState<number>(2); // G+1
  const [includeModularKitchen, setIncludeModularKitchen] = useState<boolean>(true);
  const [includeSolar, setIncludeSolar] = useState<boolean>(false);
  const [includeVastu, setIncludeVastu] = useState<boolean>(true);

  const builtUpAreaInputId = useId();

  const packages = {
    basic: {
      name: 'Basic Essential',
      rate: 1650,
      description: 'Durable quality civil construction with Fe500 TMT steel, Ultratech cement & standard finishes.',
      badge: 'Budget Friendly',
      warranty: '5-Year Warranty',
      steel: 'Fe500 Grade TMT (A-One / Kamdhenu)',
      cement: 'Ultratech / Ambuja / ACC 43/53',
      flooring: 'Vitrified Tiles (₹55/sq.ft)',
      fittings: 'Anchor / Rider & Standard CP',
    },
    standard: {
      name: 'Premium Standard',
      rate: 1950,
      description: 'Top-tier materials, Fe550 TMT, Kajaria double-charged tiles, Jaquar fittings & UPVC windows.',
      badge: '★ Most Popular in Dehradun',
      warranty: '5-Yr Workmanship + 10-Yr Structural',
      steel: 'Fe550 High-Yield TMT (Tata Tiscon / Jindal)',
      cement: 'Ultratech Super / ACC Gold',
      flooring: 'Kajaria 4x2 Vitrified (₹85/sq.ft)',
      fittings: 'Jaquar / Cera Luxury Series',
    },
    luxury: {
      name: 'Luxury Turnkey Elite',
      rate: 2450,
      description: 'Opulent architecture, Italian marble, Kohler fixtures, smart automation & custom modular kitchen.',
      badge: 'Bespoke Architectural Luxury',
      warranty: '10-Yr Comprehensive Guarantee',
      steel: 'Primary TMT Fe550D (Tata Tiscon)',
      cement: 'Ultratech Weather Plus / Premium RMC',
      flooring: 'Italian Marble / Hardwood Flooring',
      fittings: 'Kohler / Grohe European Series',
    },
  };

  const currentPkg = packages[selectedPackage];
  const baseCost = area * currentPkg.rate;
  
  const kitchenCost = includeModularKitchen ? (selectedPackage === 'luxury' ? 250000 : 160000) : 0;
  const solarCost = includeSolar ? 180000 : 0;
  const vastuCost = includeVastu ? 35000 : 0;

  const totalCost = Math.round(baseCost + kitchenCost + solarCost + vastuCost);

  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Crore`;
    }
    return `₹ ${(val / 100000).toFixed(2)} Lakhs`;
  };

  const handleBookEstimate = () => {
    if (onOpenConsultation) {
      onOpenConsultation({
        area,
        packageType: currentPkg.name,
        floors: floors === 1 ? 'Ground Floor Only' : `G+${floors - 1} Floors`,
        totalEstimate: formatINR(totalCost),
      });
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="section-padding bg-[#FAF8F5] relative border-y border-[#E6DFD5]">
      <div className="container-custom relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-[#5C3D2B]" />
            Dehradun & Uttarakhand Cost Estimator
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] mb-4">
            CALCULATE YOUR <span className="text-olive-gradient">CONSTRUCTION BUDGET</span>
          </h2>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-600">
            Based on current market rates across Dehradun, Mussoorie, and Haridwar. Transparent milestone-based execution with zero hidden surcharges.
          </p>
        </div>

        {/* Main Calculator Workspace (Olive Green & Warm Brown Theme) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Configuration Inputs (7 cols) */}
          <div className="lg:col-span-7 card-olive-brown p-6 sm:p-8 space-y-8 bg-white">
            
            {/* Step 1: Built-Up Area */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor={builtUpAreaInputId} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#31432B]">
                  <Ruler className="w-4 h-4 text-[#5C3D2B]" />
                  1. Built-Up Area (Sq.Ft)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id={builtUpAreaInputId}
                    type="number"
                    min="500"
                    max="15000"
                    value={area}
                    onChange={(e) => setArea(Math.max(500, parseInt(e.target.value) || 500))}
                    className="w-24 px-3 py-1.5 text-center font-bold text-[#1C1917] bg-[#FAF8F5] border border-[#D5BAA6] rounded-lg text-sm focus:outline-none focus:border-[#31432B]"
                  />
                  <span className="text-xs text-neutral-500 font-medium">sq.ft</span>
                </div>
              </div>

              {/* Range Slider (Olive) */}
              <input
                type="range"
                min="600"
                max="10000"
                step="50"
                value={area}
                onChange={(e) => setArea(parseInt(e.target.value))}
                className="w-full h-2 bg-[#E6ECE2] rounded-lg appearance-none cursor-pointer accent-[#3D5337]"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-medium">
                <span>600 sq.ft (Compact)</span>
                <span>2,500 sq.ft (Villa)</span>
                <span>6,000 sq.ft (Estate)</span>
                <span>10,000+ sq.ft</span>
              </div>
            </div>

            {/* Step 2: Quality Package Selection */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#31432B] mb-3">
                <Layers className="w-4 h-4 text-[#5C3D2B]" />
                2. Select Specification Tier
              </label>

              <div className="grid sm:grid-cols-3 gap-3">
                {(['basic', 'standard', 'luxury'] as const).map((pkgKey) => {
                  const pkg = packages[pkgKey];
                  const active = selectedPackage === pkgKey;
                  return (
                    <button
                      key={pkgKey}
                      type="button"
                      onClick={() => setSelectedPackage(pkgKey)}
                      className={`text-left p-4 rounded-xl border transition-all relative ${
                        active
                          ? 'bg-[#2E3F27] text-white border-[#405737] shadow-lg'
                          : 'bg-white text-neutral-900 border-[#E6DFD5] hover:border-[#5C3D2B]'
                      }`}
                    >
                      {active && (
                        <div className="absolute top-2 right-2">
                          <CheckCircle2 className="w-4 h-4 text-[#D5BAA6]" />
                        </div>
                      )}
                      <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${active ? 'text-[#E6ECE2]' : 'text-[#31432B]'}`}>
                        {pkg.name}
                      </div>
                      <div className={`font-cinzel text-lg font-bold ${active ? 'text-[#D5BAA6]' : 'text-[#5C3D2B]'}`}>
                        ₹{pkg.rate} <span className={`text-[11px] font-sans ${active ? 'text-neutral-300' : 'text-neutral-500'}`}>/ sq.ft</span>
                      </div>
                      <div className={`text-[10px] mt-2 line-clamp-2 ${active ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {pkg.steel}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Elevation & Floors */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#31432B] mb-3">
                <Layers className="w-4 h-4 text-[#5C3D2B]" />
                3. Number of Levels / Floors
              </label>

              <div className="grid grid-cols-4 gap-3">
                {[
                  { num: 1, label: 'Ground Floor' },
                  { num: 2, label: 'G + 1 (Duplex)' },
                  { num: 3, label: 'G + 2 Floors' },
                  { num: 4, label: 'G + 3 Floors' },
                ].map((item) => (
                  <button
                    key={item.num}
                    type="button"
                    onClick={() => setFloors(item.num)}
                    className={`py-3 px-2 text-center rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                      floors === item.num
                        ? 'bg-[#5C3D2B] text-white border-[#5C3D2B] shadow-md'
                        : 'bg-[#FAF8F5] text-neutral-700 border-[#E6DFD5] hover:border-[#3D5337]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Optional Add-ons */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#31432B] mb-3">
                <Sparkles className="w-4 h-4 text-[#5C3D2B]" />
                4. Optional Architectural Inclusions
              </label>

              <div className="space-y-2.5">
                <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] cursor-pointer hover:border-[#3D5337] transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeModularKitchen}
                      onChange={(e) => setIncludeModularKitchen(e.target.checked)}
                      className="w-4 h-4 rounded text-[#3D5337] accent-[#3D5337]"
                    />
                    <div>
                      <div className="text-xs font-bold text-neutral-900">Bespoke Modular Kitchen with Soft-Close</div>
                      <div className="text-[11px] text-neutral-500">Acrylic finish, granite counter & fluted glass overheads</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#5C3D2B]">
                    +₹{selectedPackage === 'luxury' ? '2.5L' : '1.6L'}
                  </span>
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] cursor-pointer hover:border-[#3D5337] transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeVastu}
                      onChange={(e) => setIncludeVastu(e.target.checked)}
                      className="w-4 h-4 rounded text-[#3D5337] accent-[#3D5337]"
                    />
                    <div>
                      <div className="text-xs font-bold text-neutral-900">Vastu Shastra Consultation & Soil Lab Report</div>
                      <div className="text-[11px] text-neutral-500">Orientation alignment, Brahmasthan marking, geo soil core lab test</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#5C3D2B]">+₹35,000</span>
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] cursor-pointer hover:border-[#3D5337] transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeSolar}
                      onChange={(e) => setIncludeSolar(e.target.checked)}
                      className="w-4 h-4 rounded text-[#3D5337] accent-[#3D5337]"
                    />
                    <div>
                      <div className="text-xs font-bold text-neutral-900">On-Grid Rooftop Solar System (3kW)</div>
                      <div className="text-[11px] text-neutral-500">Zero electric bill setup with net metering subsidy assistance</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#5C3D2B]">+₹1.80L</span>
                </label>
              </div>
            </div>

          </div>

          {/* Right Live Estimate Summary Card (5 cols, Forest Olive Night Card with Walnut Accents) */}
          <div className="lg:col-span-5 rounded-2xl p-6 sm:p-8 sticky top-28 bg-[#182316] text-white shadow-2xl border border-[#31432B]">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#31432B]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D5BAA6]">
                Estimated Budget Summary
              </span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#2E3F27] text-[#B0C5A6] border border-[#537048] font-medium">
                {currentPkg.warranty}
              </span>
            </div>

            {/* Total Highlight */}
            <div className="py-6 text-center border-b border-[#31432B]">
              <div className="text-xs uppercase tracking-widest text-neutral-300 mb-1 font-medium">
                Total Estimated Construction Investment
              </div>
              <div className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#D5BAA6] tracking-wide mb-1">
                {formatINR(totalCost)}
              </div>
              <div className="text-xs text-neutral-400 font-medium">
                ≈ ₹{Math.round(totalCost / area)} per sq.ft effective all-inclusive
              </div>
            </div>

            {/* Capital Allocation Breakdown */}
            <div className="py-5 space-y-3.5 border-b border-[#31432B]">
              <div className="text-xs uppercase tracking-wider font-bold text-neutral-200 mb-2">
                Project Capital Allocation
              </div>

              <div>
                <div className="flex justify-between text-xs text-neutral-300 mb-1">
                  <span>Civil Structure & TMT Steel (42%)</span>
                  <span className="font-semibold text-white">{formatINR(totalCost * 0.42)}</span>
                </div>
                <div className="h-1.5 w-full bg-[#263421] rounded-full overflow-hidden">
                  <div className="h-full bg-[#8FA883] rounded-full w-[42%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-neutral-300 mb-1">
                  <span>Flooring, Tiles & Wall Finishes (26%)</span>
                  <span className="font-semibold text-white">{formatINR(totalCost * 0.26)}</span>
                </div>
                <div className="h-1.5 w-full bg-[#263421] rounded-full overflow-hidden">
                  <div className="h-full bg-[#A87B5C] rounded-full w-[26%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-neutral-300 mb-1">
                  <span>MEP, Sanitaryware & Electricals (18%)</span>
                  <span className="font-semibold text-white">{formatINR(totalCost * 0.18)}</span>
                </div>
                <div className="h-1.5 w-full bg-[#263421] rounded-full overflow-hidden">
                  <div className="h-full bg-[#BF997F] rounded-full w-[18%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-neutral-300 mb-1">
                  <span>Doors, Windows & Woodwork (14%)</span>
                  <span className="font-semibold text-white">{formatINR(totalCost * 0.14)}</span>
                </div>
                <div className="h-1.5 w-full bg-[#263421] rounded-full overflow-hidden">
                  <div className="h-full bg-[#537048] rounded-full w-[14%]" />
                </div>
              </div>
            </div>

            {/* Package Guarantee Inclusions */}
            <div className="py-4 space-y-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B0C5A6]" />
                <span>Steel: <strong>{currentPkg.steel}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B0C5A6]" />
                <span>Cement: <strong>{currentPkg.cement}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B0C5A6]" />
                <span>Fittings: <strong>{currentPkg.fittings}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B0C5A6]" />
                <span>Zero Escrow Risk: <strong>Milestone Payments</strong></span>
              </div>
            </div>

            {/* CTA Button (Warm Walnut Brown) */}
            <button
              onClick={handleBookEstimate}
              className="btn-brown-sleek w-full py-4 text-center mt-3 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl"
            >
              <span>Lock Rate & Book Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-neutral-400 mt-3 flex items-center justify-center gap-1">
              <Info className="w-3 h-3 text-[#B0C5A6]" />
              Free architectural site visit within 24 hours in Dehradun.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}