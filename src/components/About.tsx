import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Building, 
  Users, 
  HardHat, 
  ArrowRight,
  BadgeCheck
} from 'lucide-react';

interface AboutProps {
  onOpenConsultation?: () => void;
}

export default function About({ onOpenConsultation }: AboutProps) {
  const highlights = [
    {
      title: 'Active LLP Entity (ACP-3601)',
      desc: 'Formally incorporated as Gupta\'s Evergreen Developers LLP under ROC Uttarakhand for complete legal and contractual transparency.',
      icon: BadgeCheck
    },
    {
      title: '13+ Years Heritage (Estd. 2012)',
      desc: 'Over 13 years of demonstrated excellence with 500+ completed residential, villa, and commercial structures across Dehradun and Mussoorie.',
      icon: Award
    },
    {
      title: 'Seismic Zone IV & V Compliance',
      desc: 'Specialized deep piling, reinforced retaining walls, and shear column designs engineered specifically for Himalayan foothill geography.',
      icon: ShieldCheck
    },
    {
      title: '100% In-House Engineering Corps',
      desc: 'Direct execution through salaried civil engineers, site managers, licensed architects, and quality audit inspectors. Zero subcontracting.',
      icon: Users
    }
  ];

  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container-custom relative z-10">
        
        {/* Top Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-widest mb-4">
            <Building className="w-3.5 h-3.5 text-[#5C3D2B]" />
            Corporate Due-Diligence Profile
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] mb-4">
            TIMELESS ARCHITECTURE <br />
            <span className="text-olive-gradient">& PRECISION ENGINEERING</span>
          </h2>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-600">
            Headquartered on Rajpur Road, Dehradun. We combine master craftsmanship, seismic engineering, and modern architecture to create structures that stand for generations.
          </p>
        </div>

        {/* Narrative & Image 2-Column Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Imagery (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D5BAA6] shadow-xl group">
              <img
                src="/images/image_08.jpeg"
                alt="Active RCC Slab Reinforcement Inspection by Site Engineer in Dehradun"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141C12]/85 via-[#141C12]/20 to-transparent" />
              
              {/* Floating Bottom Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#141C12]/95 backdrop-blur-md border border-[#405737]/60 text-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2E3F27] flex items-center justify-center text-[#D5BAA6] flex-shrink-0">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      On-Site Engineering Rigor
                    </div>
                    <div className="text-[11px] text-[#B0C5A6]">
                      Fe550 Rebar & High-Grade Concrete Casting Under Direct Founder Supervision
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Olive Accent Borders */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#537048] pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#8E6144] pointer-events-none" />
          </div>

          {/* Right Detailed Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#1C1917]">
              A Legacy of Trust Rooted in the <span className="text-olive-gradient">Doon Valley Since 2012</span>
            </h3>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Founded in 2012, <strong>Gupta's Evergreen Developers LLP</strong> was established with a singular objective: to eliminate the ambiguity, delays, and substandard substitutions common in the unorganized construction sector. We recognized that constructing a home or commercial building in Uttarakhand demands extraordinary vigilance due to regional seismic conditions, variable hill topography, and stringent municipal approvals.
            </p>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              In June 2025, our long-standing enterprise transitioned into an official corporate entity—<strong>Gupta's Evergreen Developers LLP (LLPIN: ACP-3601)</strong>, registered with the Registrar of Companies (ROC Uttarakhand). This legal restructuring affords our clients corporate-grade accountability, escrow-linked milestone payments, and legally enforceable 5-year warranties.
            </p>

            {/* Founders Leadership Card (Olive & Brown Palette) */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5] grid sm:grid-cols-2 gap-6 my-6 shadow-sm">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#5C3D2B] font-bold mb-1">
                  Founder & Designated Partner
                </div>
                <div className="font-cinzel text-lg font-bold text-[#1C1917] mb-2">
                  Sunil Kumar Gupta
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Pioneering structural integrity, RCC foundations, and master materials procurement for over two decades across Uttarakhand.
                </p>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-[#5C3D2B] font-bold mb-1">
                  Designated Partner & Operations
                </div>
                <div className="font-cinzel text-lg font-bold text-[#1C1917] mb-2">
                  Vansh Gupta
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Spearheading modern BIM architectural visualization, sustainable luxury aesthetics, and seamless digital progress transparency.
                </p>
              </div>
            </div>

            {/* Strategic Addresses Bar */}
            <div className="space-y-2 text-xs text-neutral-700 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#5C3D2B] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Operating Corporate Office:</strong> 105 Rajpur Road, Near Parsvnath Eleganza, Hathibarkala Salwala, Dehradun – 248001
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Building className="w-4 h-4 text-[#3D5337] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Registered Statutory Office:</strong> 83/266, Chander Nagar, Dehradun, Uttarakhand – 248001
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="btn-olive-sleek text-xs px-8 py-3.5 inline-flex items-center gap-2"
              >
                <span>Schedule Meeting with Founders</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => {
            const IconComponent = h.icon;
            return (
              <div 
                key={i} 
                className="card-olive-brown p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2D3E28] text-white flex items-center justify-center mb-4 shadow-sm">
                    <IconComponent className="w-6 h-6 text-[#D5BAA6]" />
                  </div>
                  <h4 className="font-cinzel text-base font-bold text-[#1C1917] mb-2">
                    {h.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}