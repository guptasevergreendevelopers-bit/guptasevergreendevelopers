import { useState } from 'react';
import { 
  Building2, 
  Home, 
  Compass, 
  Hammer, 
  Sparkles, 
  RefreshCw, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Ruler,
  Check
} from 'lucide-react';
import Process from '../components/Process';

interface ServicesPageProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export default function ServicesPage({ onOpenConsultation }: ServicesPageProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const services = [
    {
      id: 'residential',
      category: 'residential',
      title: 'Turnkey Residential Villa Construction',
      tagline: 'End-to-End Execution From Plot Digging to 5-Year Handover',
      rate: '₹1,650 – ₹2,450 / sq.ft',
      image: '/images/image_03.jpeg',
      description: 'We construct prestigious individual homes, hillside duplexes, luxury villas, and multi-family residences across Dehradun, Mussoorie, and Haridwar. Our turnkey mandate covers geotechnical soil core tests, architectural blueprints, anti-seismic RCC frame casting, premium masonry, and luxury interior styling.',
      specs: [
        { label: 'Steel Reinforcement', val: 'Fe550 High-Yield TMT (Tata Tiscon / Jindal Panther)' },
        { label: 'Cement Quality', val: 'Ultratech Super / ACC Gold 43 & 53 Grade' },
        { label: 'Flooring Finish', val: 'Double-Charged Kajaria 4x2 Vitrified / Italian Marble' },
        { label: 'Bathroom Suites', val: 'Jaquar / Kohler Concealed Cisterns & Diverters' },
        { label: 'Glazing & Fenestration', val: 'Heavy UPVC Double-Glazed Soundproof Window Sections' },
        { label: 'Warranty & Guarantee', val: '5-Year Workmanship Warranty + 10-Year Structural' }
      ],
      deliverables: [
        'Complete architectural 2D & 3D blueprints',
        'Anti-seismic structural design tailored to Uttarakhand soil',
        'Full MEP (Mechanical, Electrical, Plumbing) execution',
        'Dr. Fixit 2K chemical waterproofing on all wet areas & roofs',
        'Daily photographic & drone progress logs via WhatsApp'
      ]
    },
    {
      id: 'architecture',
      category: 'architecture',
      title: 'Architectural Planning, 3D Elevation & MDDA Sanctions',
      tagline: 'Vastu-Compliant Blueprints & Municipal Approvals',
      rate: 'Custom Architectural Packages',
      image: '/images/image_07.jpeg',
      description: 'Our licensed architects develop bespoke residential and commercial blueprints that harmoniously blend contemporary luxury with climate-responsive design. Every plan is engineered in compliance with Mussoorie Dehradun Development Authority (MDDA) bye-laws.',
      specs: [
        { label: 'Planning Discipline', val: 'Vastu Shastra & Climate-Responsive Architecture' },
        { label: 'Software Suite', val: 'Autodesk Revit, BIM, AutoCAD, 3ds Max, STAAD Pro' },
        { label: '3D Deliverables', val: 'Photorealistic Day & Night Exterior 3D Renders' },
        { label: 'Regulatory Liaison', val: 'MDDA Sanction Map Documentation Support' },
        { label: 'Structural Modeling', val: 'Seismic Zone IV & V Uttarakhand Safe Detailing' },
        { label: 'Site Visits', val: 'Dedicated Architect Periodic Site Milestone Audits' }
      ],
      deliverables: [
        'Detailed architectural working drawings & dimension sheets',
        'Structural column-beam reinforcement framing schedules',
        'Electrical conduit routing & sanitary plumbing schematics',
        'Door-window schedule with hardware specifications',
        '3D Walkthrough visualization for bespoke estates'
      ]
    },
    {
      id: 'commercial',
      category: 'commercial',
      title: 'Commercial Plazas, Retail Showrooms & Resorts',
      tagline: 'High-Occupancy Structures with Rapid ROI Execution',
      rate: 'Contract & Tender Based',
      image: '/images/image_10.jpeg',
      description: 'Turnkey development of commercial office towers, high-traffic retail spaces, boutique mountain resorts, and government civil works. We engineer for maximum floor plate efficiency, heavy vehicular basement ramps, and fire safety compliance.',
      specs: [
        { label: 'Load Design', val: 'Heavy Live Loads (Commercial Showroom / Office Code)' },
        { label: 'Basement Piling', val: 'Contiguous Shore Piling & Retaining Walls' },
        { label: 'Facade Engineering', val: 'Structural Glazing, ACP Cladding, Exterior Fins' },
        { label: 'MEP Systems', val: 'Centralized HVAC ducting, Fire Hydrants, Lifts' },
        { label: 'Statutory NOCs', val: 'Fire Department & MDDA Commercial Compliance' },
        { label: 'Warranty', val: 'Corporate Structural Stability Certificate' }
      ],
      deliverables: [
        'Large column-free spans for optimal retail merchandise layout',
        'Reinforced basement parking and stormwater sump wells',
        'Lift shaft casting with acoustic elevator isolation',
        'Heavy-duty vitrified commercial floor tiling',
        'High-capacity transformer & DG backup integration'
      ]
    },
    {
      id: 'structural',
      category: 'structural',
      title: 'Anti-Seismic Structural RCC & Foundation Works',
      tagline: 'Engineered for Uttarakhand Seismic Zone IV & V Safety',
      rate: 'Civil Labor + Material Contracts',
      image: '/images/image_08.jpeg',
      description: 'The foundation is the soul of any building in Uttarakhand. We specialize in deep bored piling, slope-stabilizing RCC retaining walls, and ductile column-beam frames built strictly according to IS 13920 seismic standards.',
      specs: [
        { label: 'Steel Grade', val: 'Fe550 / Fe550D High-Yield Rebar with 0% Rust' },
        { label: 'Concrete Mix', val: 'M25 & M30 Machine-Batched Concrete' },
        { label: 'Testing Rigor', val: '7-Day & 28-Day Concrete Cube Compression Lab Tests' },
        { label: 'Soil Stabilization', val: 'Weep-Hole Retaining Walls for Hill Slopes' },
        { label: 'Shuttering', val: 'Waterproof Film-Faced Plywood & Steel Props' },
        { label: 'Structural Audit', val: 'STAAD Pro Certified Structural Stability Stamped' }
      ],
      deliverables: [
        'Geotechnical lab core drilling and soil bearing assessment',
        'Deep foundation / raft casting with anti-capillary moisture barrier',
        'Ductile shear wall casting for multi-story buildings',
        'Comprehensive photographic rebar grid inspection before pours',
        '10-Year Anti-Settlement & Structural Integrity Guarantee'
      ]
    },
    {
      id: 'interiors',
      category: 'interiors',
      title: 'Interior Architecture & Bespoke Modular Studios',
      tagline: 'German Hardware, Italian Marble & Fluted Glass',
      rate: '₹1,200 – ₹3,500 / sq.ft',
      image: '/images/image_11.jpeg',
      description: 'Transforming shell spaces into luxurious sanctuaries. We design custom modular kitchens with acrylic and fluted glass shutters, Italian marble accent features, spa-like master bathrooms with rain towers, and integrated false ceilings.',
      specs: [
        { label: 'Cabinet Hardware', val: 'Hafele / Hettich German Soft-Close Tandem Boxes' },
        { label: 'Countertops', val: 'Polished Quartz, Jet Black Granite, Statuario Marble' },
        { label: 'Wall Accent', val: 'Textured Fluted Wood, Damask Wainscoting, Stone' },
        { label: 'Bathroom Suites', val: 'Large Format Dark Slate Tiles, Wall-Hung Toilets' },
        { label: 'Ceiling Design', val: 'Gyproc False Ceilings with 3000K Warm LED Coves' },
        { label: 'Automation', val: 'Smart Wi-Fi Modular Lighting & Security Integration' }
      ],
      deliverables: [
        'Full 3D photorealistic interior renderings for every room',
        'Modular kitchen with pull-out spice racks and corner carousels',
        'Custom built-in wardrobes with sensory LED hanging rails',
        'Vanity units with vessel sinks and backlit mirrors',
        'Concealed VRV / split AC piping and acoustic paneling'
      ]
    },
    {
      id: 'renovation',
      category: 'renovation',
      title: 'Renovation, Heritage Restoration & Floor Additions',
      tagline: 'Elevating Older Properties to Contemporary Luxury',
      rate: 'Custom Site Assessment Based',
      image: '/images/image_06.jpeg',
      description: 'Expert retrofitting and modern modernization for older homes and estates in Dehradun and Mussoorie. We cast additional floors, reinforce aging foundations, replace outdated plumbing with leakproof CPVC, and install modern thermal UPVC windows.',
      specs: [
        { label: 'Structural Audit', val: 'Non-Destructive Rebound Hammer & Ultrasonic Testing' },
        { label: 'Floor Additions', val: 'Lightweight Steel PEB or Monolithic RCC Slabs' },
        { label: 'Waterproofing', val: 'Polymer-Modified Mortar & Pressure Grouting' },
        { label: 'Facade Revamp', val: 'Modern Exterior Louvers, Texture Paints & Lighting' },
        { label: 'Plumbing Overhaul', val: 'Complete Replacement with Astral Noise-Damped Pipes' },
        { label: 'Permits', val: 'Municipal Addition & Alteration Sanctions' }
      ],
      deliverables: [
        'Structural health safety report before commencing work',
        'Seismic reinforcement of load-bearing brick walls',
        'Complete bathroom demolition, re-waterproofing and modern fitout',
        'Electrical rewiring with fire-retardant copper conduits',
        'Turnkey handover in agreed fixed calendar days'
      ]
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <div className="bg-[#FAF8F5] text-neutral-900 space-y-0">
      
      {/* Header Banner (Forest Olive Night) */}
      <section className="relative py-24 bg-[#141C12] text-white border-b border-[#31432B]/60">
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E3F27] border border-[#537048]/40 text-[#D5BAA6] text-xs font-bold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5 text-[#A87B5C]" />
            Full Architectural & Civil Engineering Suite
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            OUR SPECIALIZED <br />
            <span className="text-[#D5BAA6] border-b-2 border-[#8E6144] pb-1">CONSTRUCTION SERVICES</span>
          </h1>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            From preliminary geotechnical core drilling to turnkey luxury villa handovers, all services are managed 100% in-house with zero subcontracting.
          </p>
        </div>
      </section>

      {/* Filter Tabs (Olive & Brown Accents) */}
      <section className="py-8 bg-white border-b border-[#E6DFD5]">
        <div className="container-custom flex flex-wrap justify-center gap-2">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'residential', label: 'Turnkey Residential' },
            { id: 'architecture', label: '3D Architecture & MDDA' },
            { id: 'commercial', label: 'Commercial Infrastructure' },
            { id: 'structural', label: 'RCC & Seismic Works' },
            { id: 'interiors', label: 'Modular Interiors' },
            { id: 'renovation', label: 'Renovation & Additions' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === tab.id
                  ? 'bg-[#2D3E28] text-white shadow-md border border-[#405737]'
                  : 'bg-[#FAF8F5] text-neutral-700 hover:text-[#2D3E28] border border-[#E6DFD5] hover:border-[#5C3D2B]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Showcase Cards */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container-custom space-y-16">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              className="card-olive-brown p-8 sm:p-10 border-[#D5BAA6] overflow-hidden shadow-sm hover:shadow-xl transition-all bg-white"
            >
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                
                {/* Visual Thumbnail (5 cols) */}
                <div className="lg:col-span-5 relative">
                  <div className="rounded-2xl overflow-hidden border border-[#D5BAA6] relative aspect-[4/3]">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#141C12]/90 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md border border-[#405737]">
                      {svc.rate}
                    </div>
                  </div>
                </div>

                {/* Details (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#5C3D2B] block mb-1">
                      {svc.tagline}
                    </span>
                    <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#1C1917] mb-3">
                      {svc.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  {/* Technical Specs Table */}
                  <div className="grid sm:grid-cols-2 gap-3 py-3 border-y border-[#E6DFD5] text-xs">
                    {svc.specs.map((item, i) => (
                      <div key={i} className="py-1">
                        <span className="text-neutral-500 block text-[11px] font-medium">{item.label}:</span>
                        <strong className="text-[#1C1917] font-semibold">{item.val}</strong>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#31432B]">
                      Guaranteed Deliverables:
                    </div>
                    {svc.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-[#537048] flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => onOpenConsultation(svc.title)}
                      className="btn-olive-sleek text-xs px-6 py-3.5"
                    >
                      Enquire For This Service
                    </button>
                    <a
                      href="tel:+919548393798"
                      className="btn-brown-outline text-xs px-6 py-3.5 flex items-center justify-center gap-2 font-bold"
                    >
                      <span>Discuss with Sunil Gupta</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 6-Stage Process Workflow */}
      <Process onOpenConsultation={() => onOpenConsultation('Precision 6-Step Workflow')} />

    </div>
  );
}