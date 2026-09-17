import { useState } from 'react';
import { 
  Check, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  ArrowRight, 
  Layers,
  FileCheck2
} from 'lucide-react';

interface PackagesProps {
  onOpenConsultation?: (pkgTitle?: string) => void;
}

export default function Packages({ onOpenConsultation }: PackagesProps) {
  const packagesList = [
    {
      id: 'basic',
      title: 'Basic Essential',
      rate: '₹ 1,650',
      unit: 'per sq.ft built-up area',
      tagline: 'Sturdy, Reliable & Cost-Effective Construction',
      badge: 'Budget Friendly',
      popular: false,
      warranty: '5-Year Workmanship Warranty',
      specs: [
        { label: 'Steel (TMT)', val: 'Fe500 Grade TMT (Kamdhenu / A-One Gold)' },
        { label: 'Cement', val: 'Ultratech / ACC / Ambuja 43 & 53 Grade' },
        { label: 'Masonry', val: 'Class-A Red Clay Bricks (9" Ext / 4.5" Int)' },
        { label: 'Flooring', val: 'Vitrified Tiles up to ₹55/sq.ft (Kajaria / Somany)' },
        { label: 'Bathrooms', val: 'Standard Sanitaryware & CP Fittings (Cera / Parryware)' },
        { label: 'Electricals', val: 'Anchor / Rider Modular Switches, Polycab Wires' },
        { label: 'Painting', val: 'Asian Paints Tractor Emulsion (Int), Apex (Ext)' },
        { label: 'Plumbing', val: 'Supreme / Astral CPVC Hot & Cold Lines' },
        { label: 'Drawings', val: '2D Floor Plans + Basic 3D Elevation Views' },
      ],
      features: [
        'Dedicated Site Supervisor',
        'Weekly Digital Photographic Progress Report',
        'Zero Brand Subcontracting Guarantee',
        'Government MDDA Guidelines Compliance',
      ]
    },
    {
      id: 'standard',
      title: 'Premium Standard',
      rate: '₹ 1,950',
      unit: 'per sq.ft built-up area',
      tagline: 'Our Flagship Architectural Package for Dehradun Homes',
      badge: '★ Most Selected by Homeowners',
      popular: true,
      warranty: '5-Yr Comprehensive + 10-Yr Structural Guarantee',
      specs: [
        { label: 'Steel (TMT)', val: 'Fe550 High-Yield TMT (Tata Tiscon / Jindal Panther)' },
        { label: 'Cement', val: 'Ultratech Super / ACC Gold Weather-Plus' },
        { label: 'Masonry', val: 'Class-A Kiln Bricks + River Coarse Sand Plaster' },
        { label: 'Flooring', val: '4x2 Double-Charged Vitrified Tiles (₹85/sq.ft)' },
        { label: 'Bathrooms', val: 'Jaquar / Cera Wall-Hung WC & Single-Lever Diverters' },
        { label: 'Windows', val: 'Heavy UPVC Double-Glazed Soundproof Window Sections' },
        { label: 'Painting', val: 'Asian Paints Royale Luxury Emulsion + 2 Coats Putty' },
        { label: 'Waterproofing', val: 'Dr. Fixit 2K Chemical Membrane on Slabs & Toilets' },
        { label: 'Drawings', val: 'Full 2D Blueprints + 3D Photorealistic Exterior Renders' },
      ],
      features: [
        'Experienced Senior Civil Engineer on Site',
        'Seismic Zone IV & V Uttarakhand Earthquake Proofing',
        'Daily WhatsApp Drone/Photo Log to Client',
        'Anti-Termite Soil Treatment with 10-Yr Certificate',
        'Granite Kitchen Slab with Stainless Steel Double Sink',
      ]
    },
    {
      id: 'luxury',
      title: 'Luxury Turnkey Elite',
      rate: '₹ 2,450',
      unit: 'per sq.ft built-up area',
      tagline: 'Opulent Finishes for Villas, Estates & Signature Properties',
      badge: 'Bespoke Architectural Luxury',
      popular: false,
      warranty: '10-Year Full Structural & Waterproofing Guarantee',
      specs: [
        { label: 'Steel (TMT)', val: 'Primary Fe550D TMT (Tata Tiscon / SAIL Certified)' },
        { label: 'Cement', val: 'Ultratech Premium / High-Grade Ready Mix RMC' },
        { label: 'Flooring', val: 'Imported Italian Marble (Living) & Wooden Floor (Master)' },
        { label: 'Bathrooms', val: 'Kohler / Grohe Thermostatic Rain Showers & Vanities' },
        { label: 'Kitchen', val: 'Complete Modular Kitchen with Hafele/Hettich Soft-Close' },
        { label: 'Ceilings', val: 'Saint-Gobain False Ceiling with Warm LED Ambient Coves' },
        { label: 'Automation', val: 'Smart Wi-Fi Modular Touch Switches (Schneider/Legrand)' },
        { label: 'Doors/Windows', val: 'Teakwood Main Door + Fenesta UPVC Acoustic Glazing' },
        { label: 'Drawings', val: 'Full BIM Architectural, Structural, MEP & Vastu Plans' },
      ],
      features: [
        'Dedicated Resident Project Director on Site Full-time',
        'Soil Core Lab Testing & Geotechnical Engineering',
        'MDDA Map Sanction Approval Liaison Assistance',
        'Customized Exterior Architectural Facade Lighting',
        '10-Year Water-Proofing & Foundation Guarantee',
      ]
    }
  ];

  return (
    <section id="packages" className="section-padding bg-white relative">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5 text-[#5C3D2B]" />
            Transparent Construction Packages
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] mb-4">
            PRICING TIERS & <span className="text-olive-gradient">SPECIFICATIONS</span>
          </h2>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-600">
            Zero hidden costs, locked milestone payments, and legally enforceable 5-year warranties tailored to your vision.
          </p>
        </div>

        {/* Packages Cards Grid (Olive Green & Warm Walnut Brown) */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {packagesList.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl relative flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-[#182316] text-white shadow-2xl border-2 border-[#537048] lg:-translate-y-3' 
                  : 'bg-white text-neutral-900 border border-[#E6DFD5] shadow-sm hover:border-[#5C3D2B]'
              }`}
            >
              {/* Top Banner Ribbon */}
              {pkg.badge && (
                <div className={`py-2 px-4 text-center text-[11px] font-bold uppercase tracking-wider ${
                  pkg.popular 
                    ? 'bg-[#5C3D2B] text-white font-extrabold tracking-widest' 
                    : 'bg-[#FAF8F5] text-[#31432B] border-b border-[#E6DFD5]'
                }`}>
                  {pkg.badge}
                </div>
              )}

              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                {/* Title & Tagline */}
                <div className="mb-4">
                  <h3 className={`font-cinzel text-2xl font-bold mb-1 ${pkg.popular ? 'text-white' : 'text-[#1C1917]'}`}>
                    {pkg.title}
                  </h3>
                  <p className={`text-xs ${pkg.popular ? 'text-[#B0C5A6]' : 'text-neutral-500'}`}>
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className={`mb-6 pb-6 border-b ${pkg.popular ? 'border-[#31432B]' : 'border-[#E6DFD5]'}`}>
                  <div className="flex items-baseline gap-2">
                    <span className={`font-cinzel text-3xl sm:text-4xl font-extrabold ${pkg.popular ? 'text-[#D5BAA6]' : 'text-[#5C3D2B]'}`}>
                      {pkg.rate}
                    </span>
                    <span className={`text-xs font-medium ${pkg.popular ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      / sq.ft
                    </span>
                  </div>
                  <div className={`text-[11px] mt-1.5 flex items-center gap-1 font-semibold ${pkg.popular ? 'text-[#B0C5A6]' : 'text-[#405737]'}`}>
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {pkg.warranty}
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="space-y-3 mb-8 flex-1">
                  <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${pkg.popular ? 'text-[#D5BAA6]' : 'text-[#31432B]'}`}>
                    Material Specifications:
                  </div>
                  {pkg.specs.map((item, idx) => (
                    <div key={idx} className={`flex flex-col text-xs py-1 border-b ${pkg.popular ? 'border-[#263421]' : 'border-[#FAF8F5]'}`}>
                      <span className={`font-medium ${pkg.popular ? 'text-neutral-400' : 'text-neutral-500'}`}>{item.label}</span>
                      <span className={`font-semibold ${pkg.popular ? 'text-white' : 'text-neutral-800'}`}>{item.val}</span>
                    </div>
                  ))}
                </div>

                {/* Value Highlights */}
                <div className={`space-y-2 mb-8 pt-4 border-t ${pkg.popular ? 'border-[#31432B]' : 'border-[#E6DFD5]'}`}>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${pkg.popular ? 'text-[#D5BAA6]' : 'text-[#31432B]'}`}>
                    Package Inclusions:
                  </div>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className={`flex items-start gap-2 text-xs ${pkg.popular ? 'text-neutral-300' : 'text-neutral-700'}`}>
                      <Check className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-[#B0C5A6]' : 'text-[#537048]'}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <button
                  onClick={() => onOpenConsultation?.(pkg.title)}
                  className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                    pkg.popular
                      ? 'btn-brown-sleek'
                      : 'btn-olive-sleek'
                  }`}
                >
                  <span>Choose {pkg.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Custom Consultation Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5] max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#2D3E28] text-white flex items-center justify-center flex-shrink-0">
            <FileCheck2 className="w-6 h-6 text-[#D5BAA6]" />
          </div>
          <div className="flex-1 text-xs sm:text-sm text-neutral-700">
            <strong className="text-[#1C1917]">Custom Architectural BOQ:</strong> Already have blueprints approved by MDDA? Send us your architectural plans and our quantity surveyors will provide a free itemized BOQ quotation within 24 hours.
          </div>
          <button
            onClick={() => onOpenConsultation?.('Customized Architectural Blueprint')}
            className="btn-brown-sleek text-xs px-6 py-3 whitespace-nowrap flex-shrink-0"
          >
            Custom Quote
          </button>
        </div>

      </div>
    </section>
  );
}