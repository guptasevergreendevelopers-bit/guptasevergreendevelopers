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
  BadgeCheck,
  ExternalLink 
} from 'lucide-react';
import Comparison from '../components/Comparison';
import CitationsAndBacklinks from '../components/CitationsAndBacklinks';
import { usePageSEO } from '../hooks/usePageSEO';

interface AboutPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export default function AboutPage({ onOpenConsultation }: AboutPageProps) {
  usePageSEO({
    title: "About Gupta's Evergreen Developers | Dehradun Builders",
    description: "Learn about Gupta's Evergreen Developers LLP (LLPIN: ACP-3601). Operating since 2012 in Dehradun under civil engineers Sunil Kumar Gupta and Vansh Gupta.",
    canonicalPath: "/about",
  });

  return (
    <div className="bg-[#FAF8F5] text-neutral-900 space-y-0">
      
      {/* Page Header Banner (Deep Forest Olive Night) */}
      <section className="relative py-8 sm:py-14 lg:py-18 bg-[#141C12] text-white border-b border-[#31432B]/60">
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-3 sm:space-y-4">
          <h1 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
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
                Statutory Corporate Profile &amp; History
              </div>
              <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#1C1917]">
                A Decade of Pedigree Meets <br />
                <span className="text-olive-gradient">Corporate Accountability</span>
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Since 2012, founder <strong>Sunil Kumar Gupta</strong> and his civil engineering teams have delivered over 500 bespoke villas, structural RCC frames, and commercial developments across Dehradun and the Himalayan foothills.
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                On <strong>23 June 2025</strong>, our founders formalized this long-standing trade legacy into a corporate Limited Liability Partnership—<strong>GUPTA'S EVERGREEN DEVELOPERS LLP (LLPIN: ACP-3601)</strong>, registered with the Registrar of Companies (ROC Uttarakhand), Ministry of Corporate Affairs, Government of India. This corporate structure provides our clients with legally enforceable 5-year warranties, milestone-based escrow payouts, and structured compliance under Indian building codes.
              </p>

              {/* Transparent Company History Callout */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border-l-4 border-[#5C3D2B] text-xs text-neutral-700 space-y-1.5 shadow-sm">
                <div className="font-bold text-[#1C1917] uppercase tracking-wider text-[11px]">
                  Transparent History Disclosure: Operating Trade (2012) vs. Legal LLP (2025)
                </div>
                <p className="text-[11.5px] leading-relaxed text-neutral-600">
                  In strict adherence to factual integrity: public statutory records verify the legal LLP entity was incorporated on <strong>23 June 2025</strong>. References to "Operating since 2012" represent the continuous 13+ years of civil contracting, geotechnical supervision, and residential construction practice of our founding partners prior to corporate formalization.
                </p>
              </div>

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
                  <span className="text-neutral-500 font-medium">Incorporation Date:</span>
                  <strong className="text-[#1C1917]">23 June 2025</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E6DFD5]">
                  <span className="text-neutral-500 font-medium">Incorporation Registrar:</span>
                  <strong className="text-[#1C1917]">ROC Uttarakhand (MCA, Govt. of India)</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E6DFD5]">
                  <span className="text-neutral-500 font-medium">Founder Operating History:</span>
                  <strong className="text-[#1C1917]">Operating Trade Since 2012 (13+ Years Service)</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E6DFD5]">
                  <span className="text-neutral-500 font-medium">Designated Partners:</span>
                  <strong className="text-[#1C1917]">Sunil Kumar Gupta &amp; Vansh Gupta</strong>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-500 font-medium">Client Rating:</span>
                  <strong className="text-[#5C3D2B] font-bold">5.0 ★ Across 120 Google &amp; 159 Justdial Reviews</strong>
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

              <div className="pt-6 mt-6 border-t border-[#FAF8F5] text-xs text-neutral-500 flex flex-wrap items-center justify-between gap-2">
                <span>Direct Contact: <strong className="text-[#5C3D2B]">+91 76687 66118</strong></span>
                <a
                  href="https://in.linkedin.com/in/vansh-gupta-490868359"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1 font-bold text-[#0A66C2] hover:underline"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Verified Corporate Profiles & Industry Directories */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#E6DFD5]">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#31432B]/10 text-[#31432B] text-[11px] font-bold uppercase tracking-widest mb-3 border border-[#31432B]/20">
              <BadgeCheck className="w-3.5 h-3.5 text-[#5C3D2B]" />
              Entity Verification
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#1C1917] mb-3">
              Corporate Registries &amp; Verified Profiles
            </h2>
            <div className="olive-brown-divider" />
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              In accordance with statutory transparency and corporate due diligence, our corporate entity, professional licensing, and architectural portfolio are independently verifiable across major industry networks:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'LinkedIn Corporate Page',
                badge: 'Verified Company',
                url: 'https://www.linkedin.com/company/gupta-s-evergreen-developers-llp',
                desc: 'Official company page indexing active site progress, civil milestones, and executive leadership updates.',
                cta: 'View LinkedIn Profile'
              },
              {
                title: 'Crunchbase Enterprise Database',
                badge: 'Global Directory',
                url: 'https://www.crunchbase.com/organization/gupta-s-evergreen-developers-llp',
                desc: 'Verified enterprise dossier recording LLP status (ACP-3601), 2012 founding year, and contracting operations.',
                cta: 'View on Crunchbase'
              },
              {
                title: 'Google Business Profile',
                badge: '5.0 Star Rating',
                url: 'https://www.google.com/maps?q=105+Rajpur+Road+Dehradun',
                desc: 'Customer-facing local listing at 105 Rajpur Road with verified client ratings and Google Maps directions.',
                cta: 'View Google Profile'
              },
              {
                title: 'Medium Technical Whitepaper',
                badge: 'Editorial Feature',
                url: 'https://medium.com/@aromalgiyer/the-ultimate-home-builders-blueprint-navigating-construction-costs-mdda-regulations-and-hill-962085b3e62b?sharedUserId=aromalgiyer',
                desc: 'In-depth engineering whitepaper analyzing Dehradun construction costs, Seismic Zone IV codes, and MDDA bye-laws.',
                cta: 'Read on Medium'
              },
              {
                title: 'Pinterest Architectural Showcase',
                badge: 'Portfolio Pinboard',
                url: 'https://pin.it/gRJEAMxYw',
                desc: 'Curated architectural boards featuring 3D elevation renders, luxury hill cottage blueprints, and interior joinery.',
                cta: 'Explore on Pinterest'
              },
              {
                title: 'Zauba Corp Corporate Registry',
                badge: 'MCA Index',
                url: 'https://www.zaubacorp.com/company/GUPTA-S-EVERGREEN-DEVELOPERS-LLP/ACP-3601',
                desc: 'Public corporate master filing detailing statutory incorporation with the Registrar of Companies (ROC Uttarakhand).',
                cta: 'Inspect MCA Record'
              }
            ].map((p, idx) => (
              <a
                key={idx}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="card-olive-brown p-5 bg-white rounded-2xl border border-[#E6DFD5] hover:border-[#3D5337] transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF8F5] text-[#5C3D2B] border border-[#E6DFD5]">
                      {p.badge}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#5C3D2B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#1C1917] mb-2 group-hover:text-[#3D5337] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#3D5337] group-hover:text-[#5C3D2B] pt-3 border-t border-[#FAF8F5] flex items-center justify-between transition-colors">
                  <span>{p.cta}</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Office Location Section (White Background) */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#5C3D2B]" />
              Verified Dehradun Office
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#1C1917] mb-4">
              OUR DEHRADUN <span className="text-olive-gradient">OFFICE</span>
            </h2>
            <div className="olive-brown-divider" />
            <p className="text-sm text-neutral-600">
              Visit our customer consultation studio at 105 Rajpur Road to review architectural blueprints, material specifications, and turnkey construction agreements.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card-olive-brown p-8 bg-white border-[#D5BAA6] shadow-md text-center sm:text-left">
              <span className="text-xs uppercase tracking-widest text-[#5C3D2B] font-bold block mb-2">
                Customer-Facing Office &amp; Design Studio
              </span>
              <h3 className="font-cinzel text-xl font-bold text-[#1C1917] mb-3">
                105 Rajpur Road Consultation Suites
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4 font-medium">
                105 Rajpur Road, near Parsvnath Eleganza, Hathibarkala Salwala, Dehradun, Uttarakhand – 248001 (Opposite RTO Office).
              </p>
              <div className="text-xs text-neutral-600 space-y-1.5 pt-3 border-t border-[#FAF8F5]">
                <div>• Architecture &amp; 3D Elevation Consultations</div>
                <div>• Material Samples &amp; Structural Specifications Library</div>
                <div>• Transparent BOQ Pricing &amp; Agreement Execution</div>
                <div>• Direct Meeting with Partners Sunil Kumar Gupta &amp; Vansh Gupta</div>
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