import { 
  Award, 
  ShieldCheck, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Users, 
  HardHat, 
  PhoneCall, 
  ArrowRight, 
  BadgeCheck 
} from 'lucide-react';
import Comparison from '../components/Comparison';
import CitationsAndBacklinks from '../components/CitationsAndBacklinks';

interface AboutPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export default function AboutPage({ onOpenConsultation }: AboutPageProps) {
  return (
    <div className="bg-[#FAF8F5] text-neutral-900 space-y-0">
      
      {/* Page Header Banner (Deep Forest Olive Night) */}
      <section className="relative py-24 bg-[#141C12] text-white border-b border-[#31432B]/60">
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E3F27] border border-[#537048]/40 text-[#D5BAA6] text-xs font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-[#A87B5C]" />
            Corporate Profile & Due Diligence Dossier
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            ABOUT GUPTA'S EVERGREEN <br />
            <span className="text-[#D5BAA6] border-b-2 border-[#8E6144] pb-1">DEVELOPERS LLP</span>
          </h1>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Founded in 2012 in Dehradun, Uttarakhand. Combining 13+ years of civil contracting pedigree with corporate-grade accountability under LLPIN: ACP-3601.
          </p>
        </div>
      </section>

      {/* Corporate Overview & Legal Foundation (White Background) */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-wider">
                <BadgeCheck className="w-4 h-4 text-[#5C3D2B]" />
                Statutory LLP Incorporation
              </div>
              <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#1C1917]">
                A Decade of Pedigree Meets <br />
                <span className="text-olive-gradient">Corporate Accountability</span>
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                For over a decade, <strong>Gupta's Evergreen Developers</strong> has operated as an esteemed construction institution in Dehradun, completing more than 500 bespoke villas, multi-family residences, and commercial developments across Uttarakhand.
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                In June 2025, our founders formalized this legacy into a dedicated Limited Liability Partnership—<strong>GUPTA'S EVERGREEN DEVELOPERS LLP (LLPIN: ACP-3601)</strong>, registered with the Registrar of Companies (ROC Uttarakhand). This transition provides institutional protection to our clients: legally enforceable 5-year warranties, milestone-based escrow payouts, and structured compliance with state building codes.
              </p>

              {/* Legal Info Table */}
              <div className="card-olive-brown p-5 space-y-3 text-xs bg-[#FAF8F5] border-[#E6DFD5]">
                <div className="flex justify-between py-1.5 border-b border-[#E6DFD5]">
                  <span className="text-neutral-500 font-medium">Statutory Legal Entity:</span>
                  <strong className="text-[#1C1917]">GUPTA'S EVERGREEN DEVELOPERS LLP</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E6DFD5]">
                  <span className="text-neutral-500 font-medium">LLP Identification No (LLPIN):</span>
                  <strong className="text-[#3D5337] font-mono font-bold">ACP-3601</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E6DFD5]">
                  <span className="text-neutral-500 font-medium">Incorporation Registrar:</span>
                  <strong className="text-[#1C1917]">ROC Uttarakhand (MCA, Govt. of India)</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E6DFD5]">
                  <span className="text-neutral-500 font-medium">Operational History:</span>
                  <strong className="text-[#1C1917]">Established 2012 (13+ Years Active Service)</strong>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-500 font-medium">Client Rating:</span>
                  <strong className="text-[#5C3D2B] font-bold">5.0 ★ Across 120 Google & 159 Justdial Reviews</strong>
                </div>
              </div>
            </div>

            {/* Right Graphic / Image */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-[#D5BAA6] shadow-xl relative bg-[#FAF8F5] p-4">
                <img
                  src="/images/image_04.jpeg"
                  alt="Gupta's Evergreen Developers Official Logo Badge"
                  className="w-full h-auto max-h-[480px] object-contain rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 p-4 rounded-xl bg-[#141C12] text-white border border-[#405737] shadow-xl text-left hidden sm:block">
                <div className="text-xs uppercase tracking-widest text-[#D5BAA6] font-bold">100% In-House Staff</div>
                <div className="text-[11px] text-[#B0C5A6]">Civil Engineers, Structural Planners & Architects</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Profile Section (Warm Background) */}
      <section className="py-20 bg-[#FAF8F5] border-y border-[#E6DFD5]">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 text-[#31432B] text-xs font-bold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5 text-[#5C3D2B]" />
              Executive Leadership
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#1C1917] mb-4">
              MEET THE <span className="text-olive-gradient">DESIGNATED PARTNERS</span>
            </h2>
            <div className="olive-brown-divider" />
            <p className="text-sm text-neutral-600">
              Personal leadership on every site. Our partners personally supervise foundation casting, structural rebar binding, and finishing handovers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sunil Kumar Gupta */}
            <div className="card-olive-brown p-8 relative flex flex-col justify-between bg-white border-[#D5BAA6]">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#2D3E28] text-white flex items-center justify-center font-cinzel text-2xl font-bold shadow-md">
                  <span className="text-[#D5BAA6]">SKG</span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#5C3D2B] font-bold">
                    Founder & Designated Partner
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-[#1C1917] mt-1">
                    Sunil Kumar Gupta
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  With over two decades of hands-on civil engineering and construction leadership in the Doon Valley, Sunil Kumar Gupta established the enterprise in 2012. His expertise spans geotechnical site evaluation, heavy RCC slab frameworks, high-volume materials procurement, and government civil works.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#FAF8F5] text-xs text-neutral-500">
                Direct Contact: <strong className="text-[#3D5337]">+91 95483 93798</strong>
              </div>
            </div>

            {/* Vansh Gupta */}
            <div className="card-olive-brown p-8 relative flex flex-col justify-between bg-white border-[#D5BAA6]">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#5C3D2B] text-white flex items-center justify-center font-cinzel text-2xl font-bold shadow-md">
                  <span className="text-[#E6ECE2]">VG</span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#5C3D2B] font-bold">
                    Designated Partner & Operations Director
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-[#1C1917] mt-1">
                    Vansh Gupta
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Vansh Gupta directs day-to-day project operations, contemporary architectural design integration, digital reporting, and client relations. Under his leadership, the firm adopted BIM 3D modeling, UPVC soundproof thermal glazing, and smart luxury interior studio craftsmanship.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#FAF8F5] text-xs text-neutral-500">
                Direct Contact: <strong className="text-[#5C3D2B]">+91 76687 66118</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Offices and Locations Distinction (White Background) */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#5C3D2B]" />
              Dual Dehradun Establishments
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#1C1917] mb-4">
              OUR DEHRADUN <span className="text-olive-gradient">ADDRESSES</span>
            </h2>
            <div className="olive-brown-divider" />
            <p className="text-sm text-neutral-600">
              In strict accordance with corporate governance transparency, we clearly delineate our operating customer office from our statutory registered office.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Operating Office */}
            <div className="card-olive-brown p-8 bg-white border-[#D5BAA6]">
              <span className="text-xs uppercase tracking-widest text-[#5C3D2B] font-bold block mb-2">
                1. Customer-Facing & Operating Office
              </span>
              <h3 className="font-cinzel text-xl font-bold text-[#1C1917] mb-3">
                105 Rajpur Road Executive Suites
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                105 Rajpur Road, Near Parsvnath Eleganza, Hathibarkala Salwala, Dehradun, Uttarakhand – 248001 (Opposite RTO Office).
              </p>
              <div className="text-xs text-neutral-500 space-y-1 pt-3 border-t border-[#FAF8F5]">
                <div>• Architecture & 3D Design Consultations</div>
                <div>• Material Samples & Italian Tile Display Studio</div>
                <div>• Client Conference & Agreement Execution</div>
              </div>
            </div>

            {/* Registered Office */}
            <div className="card-olive-brown p-8 bg-white border-[#E6DFD5]">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold block mb-2">
                2. Statutory Registered LLP Office
              </span>
              <h3 className="font-cinzel text-xl font-bold text-[#1C1917] mb-3">
                Chander Nagar Registered Headquarters
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                83/266, Chander Nagar, Dehradun, Uttarakhand – 248001.
              </p>
              <div className="text-xs text-neutral-500 space-y-1 pt-3 border-t border-[#FAF8F5]">
                <div>• Official MCA Corporate Filings & Statutory Records</div>
                <div>• Registered address as per ROC Uttarakhand (ACP-3601)</div>
                <div>• Central Procurement & Heavy Machinery Fleet Depot</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Comparison Table vs Local Unorganized Contractors */}
      <Comparison />

      {/* Citations & Directory Backlinks Section */}
      <CitationsAndBacklinks />

      {/* Bottom CTA Banner (Forest Olive Night) */}
      <section className="py-16 bg-[#141C12] text-white text-center border-t border-[#31432B]/60">
        <div className="container-custom max-w-2xl mx-auto space-y-4">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
            Schedule a Direct Meeting with Our Partners
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300">
            Visit our 105 Rajpur Road office for a cup of coffee and an in-depth review of your plot and architectural plans.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenConsultation('Meeting with Sunil & Vansh Gupta')}
              className="btn-brown-sleek text-xs px-8 py-3.5 inline-flex items-center justify-center gap-2 shadow-xl"
            >
              <span>Schedule Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}