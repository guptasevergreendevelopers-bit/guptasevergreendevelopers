import { 
  ShieldCheck, 
  ExternalLink, 
  BadgeCheck
} from 'lucide-react';

export default function CitationsAndBacklinks() {
  const citations = [
    {
      organization: 'Ministry of Corporate Affairs (MCA)',
      registry: 'ROC Uttarakhand Master Data',
      identifier: 'LLPIN: ACP-3601',
      description: 'Official corporate registration verifying active status, statutory filings, and designated partner appointments.',
      linkText: 'Verify MCA Master Data',
      url: 'https://www.mca.gov.in',
      authority: 'Govt. of India Regulatory Registry'
    },
    {
      organization: 'Google Business Profile',
      registry: 'Dehradun Local Pack Verified Listing',
      identifier: '105 Rajpur Road, Dehradun',
      description: 'Official verified business profile with 5.0 Star rating across 120+ client reviews and geo-location pins.',
      linkText: 'View Google Local Profile',
      url: 'https://www.google.com/maps?q=105+Rajpur+Road+Dehradun',
      authority: 'Local Search & Maps Authority'
    },
    {
      organization: 'Justdial Business Directory',
      registry: 'Dehradun Verified Civil Contractors',
      identifier: '5.0 ★ Across 159+ Ratings',
      description: 'Premier verified listing in Dehradun building contractors, architects, and turnkey residential developers.',
      linkText: 'Check Justdial Credentials',
      url: 'https://www.justdial.com/Dehradun',
      authority: 'National Business Directory'
    },
    {
      organization: 'Zauba Corp Corporate Directory',
      registry: 'Indian Companies Master Index',
      identifier: 'ROC-Uttarakhand / ACP-3601',
      description: 'Public corporate record indexing incorporation date, designated partners Sunil Kumar Gupta and Vansh Gupta.',
      linkText: 'View Zauba Corp Registry',
      url: 'https://www.zaubacorp.com',
      authority: 'Corporate Due Diligence Directory'
    },
    {
      organization: 'Mussoorie Dehradun Development Authority (MDDA)',
      registry: 'Building Bye-Laws & Sanctions',
      identifier: 'MDDA Master Plan Compliance',
      description: 'Licensed architectural blueprints and structural calculations compliant with Uttarakhand urban planning regulations.',
      linkText: 'MDDA Sanction Guidelines',
      url: 'https://mddaonline.in',
      authority: 'State Urban Planning Authority'
    },
    {
      organization: 'Bureau of Indian Standards (BIS)',
      registry: 'Seismic Zone IV & V Codes',
      identifier: 'IS 13920 & IS 456 Compliant',
      description: 'Ductile detailing and concrete design engineered for earthquake resistance across the Himalayan Doon Valley.',
      linkText: 'BIS Civil Standards',
      url: 'https://www.bis.gov.in',
      authority: 'National Engineering Standards'
    }
  ];

  return (
    <section className="py-16 bg-[#FAF8F5] border-t border-[#E6DFD5]">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#31432B]/10 text-[#31432B] text-[11px] font-bold uppercase tracking-widest mb-3 border border-[#31432B]/20">
            <BadgeCheck className="w-3.5 h-3.5 text-[#5C3D2B]" />
            Authoritative Citations & Local E-E-A-T Verification
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#1C1917]">
            STATUTORY CITATIONS & <span className="text-olive-gradient">AUTHORITY PROFILES</span>
          </h2>
          <div className="olive-brown-divider my-4" />
          <p className="text-xs sm:text-sm text-neutral-600">
            Gupta's Evergreen Developers LLP maintains verifiable corporate listings and compliance credentials across state and national registries.
          </p>
        </div>

        {/* 6 Citations Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {citations.map((c, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E6DFD5] hover:border-[#3D5337] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] uppercase font-bold text-neutral-500 mb-2">
                  <span>{c.authority}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#5C3D2B]" />
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#1C1917] mb-1">
                  {c.organization}
                </h3>
                <div className="text-xs font-semibold text-[#5C3D2B] mb-3">
                  {c.identifier}
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {c.description}
                </p>
              </div>

              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#31432B] hover:text-[#5C3D2B] pt-2 border-t border-[#FAF8F5] transition-colors"
              >
                <span>{c.linkText}</span>
                <ExternalLink className="w-3 h-3 text-[#A87B5C]" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}