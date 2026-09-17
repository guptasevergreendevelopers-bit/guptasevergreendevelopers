import { useState } from 'react';
import { 
  Building2, 
  Home, 
  Compass, 
  Hammer, 
  Sparkles, 
  RefreshCw, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface ServicesProps {
  onOpenConsultation?: (serviceName?: string) => void;
}

export default function Services({ onOpenConsultation }: ServicesProps) {
  const services = [
    {
      id: 'turnkey-residential',
      title: 'Turnkey Residential Construction',
      tagline: 'From Bare Plot to Handover with 5-Year Warranty',
      icon: Home,
      image: '/images/image_03.jpeg',
      description: 'End-to-end villa and residence construction taking complete responsibility for architectural blueprints, foundation digging, RCC casting, brickwork, MEP electrical/plumbing, and luxury finishing.',
      deliverables: [
        'Complete architectural 2D & 3D blueprints',
        'Foundation, anti-seismic columns & RCC roof casting',
        'Certified branded materials (Tata, Ultratech, Kajaria)',
        '100% In-house project management & zero subcontracting',
        '5-Year Comprehensive Workmanship & Waterproofing Warranty'
      ]
    },
    {
      id: 'architectural-design',
      title: 'Architectural Design & 3D Elevation',
      tagline: 'Vastu-Compliant Blueprints & MDDA Sanctions',
      icon: Compass,
      image: '/images/image_07.jpeg',
      description: 'Award-winning architectural conceptualization combining contemporary aesthetics, passive solar climate responsiveness, and strict adherence to Mussoorie Dehradun Development Authority (MDDA) building bye-laws.',
      deliverables: [
        'Vastu Shastra architectural orientation analysis',
        'Photorealistic 3D day/night architectural elevations',
        'Structural engineering calculations (STAAD Pro)',
        'Electrical, plumbing & HVAC schematic drawings',
        'MDDA municipal map sanction documentation assistance'
      ]
    },
    {
      id: 'commercial-civil',
      title: 'Commercial & Institutional Infrastructure',
      tagline: 'High-Traffic Retail, Offices, Resorts & Plazas',
      icon: Building2,
      image: '/images/image_10.jpeg',
      description: 'Full-scale commercial building development engineered for maximum floor efficiency, high occupant load, fire-safety compliance, and rapid return on capital investment.',
      deliverables: [
        'Grade-A commercial plazas, retail stores & office towers',
        'Hill resort & boutique hotel construction in Mussoorie/Doon',
        'Heavy vehicular parking basements & ramp engineering',
        'Government tender & public infrastructure contract execution',
        'Fire NOC compliance & structural stability certification'
      ]
    },
    {
      id: 'rcc-structural',
      title: 'Structural RCC & Seismic Engineering',
      tagline: 'Zone IV & V Earthquake Resilience for Hill Topography',
      icon: Hammer,
      image: '/images/image_08.jpeg',
      description: 'Specialized structural reinforcement tailored to Uttarakhand’s sensitive geology. We deploy heavy reinforced retaining walls, deep bored piling, and high-yield Fe550 steel rebars.',
      deliverables: [
        'Geotechnical soil testing & lab core evaluation',
        'Retaining walls for steep hill-slope stabilization',
        'High-grade M25/M30 concrete casting with chemical plasticizers',
        'Anti-seismic ductile detailing as per IS 13920 codes',
        '10-Year Anti-Settlement & Structural Integrity Guarantee'
      ]
    },
    {
      id: 'interior-modular',
      title: 'Interior Architecture & Modular Studios',
      tagline: 'Bespoke Fluted Glass, Italian Marble & Smart Living',
      icon: Sparkles,
      image: '/images/image_11.jpeg',
      description: 'Bespoke interior transformations crafting sophisticated living spaces with German soft-close fittings, marble slab accent walls, concealed LED cove lighting, and luxury bathroom suites.',
      deliverables: [
        'Custom modular kitchens with Hafele/Hettich hardware',
        'Luxury master bathroom suites with rain towers & slate tile',
        'Designer false ceilings with customized warm architectural lighting',
        'Smart home Wi-Fi automation & security integration',
        'Veneered paneling, custom wainscoting & walk-in wardrobes'
      ]
    },
    {
      id: 'renovation-retrofitting',
      title: 'Renovation & Structural Retrofitting',
      tagline: 'Transforming Aging Properties into Modern Assets',
      icon: RefreshCw,
      image: '/images/image_06.jpeg',
      description: 'Comprehensive structural renovation, floor additions, seismic retrofitting, and aesthetic facade overhauls for older residences, heritage properties, and underutilized commercial spaces.',
      deliverables: [
        'Non-destructive structural health audits & crack stitching',
        'Vertical expansions & additional floor slab casting',
        'Complete bathroom & plumbing overhaul with leakproofing',
        'Contemporary facade modernizations with louvers & stone cladding',
        'Energy efficiency upgrades with thermal UPVC glazing'
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-[#FAF8F5] relative border-t border-[#E6DFD5]">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-[#5C3D2B]" />
            Full-Spectrum Civil & Architectural Capabilities
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] mb-4">
            SPECIALIZED <span className="text-olive-gradient">CONSTRUCTION SERVICES</span>
          </h2>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-600">
            From preliminary soil testing and Vastu planning to turnkey structural casting and luxury handover, all capabilities are executed under one unified roof without subcontracting.
          </p>
        </div>

        {/* 6 Services Grid (Olive Green & Warm Walnut Brown) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="card-olive-brown overflow-hidden flex flex-col justify-between group bg-white"
              >
                {/* Service Visual Thumbnail */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141C12]/85 via-[#141C12]/20 to-transparent" />
                  
                  {/* Floating Icon Pill */}
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-[#141C12]/90 backdrop-blur-md border border-[#405737]/60 flex items-center justify-center text-white">
                    <Icon className="w-5 h-5 text-[#D5BAA6]" />
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-white bg-[#141C12]/90 px-2.5 py-0.5 rounded border border-[#405737]/40">
                      0{idx + 1} • {svc.tagline}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[#1C1917] mb-3 group-hover:text-[#3D5337] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                      {svc.description}
                    </p>

                    {/* Key Deliverables Bullet Points */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-[#FAF8F5]">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#31432B] mb-2">
                        Key Inclusions:
                      </div>
                      {svc.deliverables.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#537048] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenConsultation?.(svc.title)}
                    className="btn-olive-sleek w-full py-3 text-xs flex items-center justify-center gap-2"
                  >
                    <span>Enquire for {svc.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}