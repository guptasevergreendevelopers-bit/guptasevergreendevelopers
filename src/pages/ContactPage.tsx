import { useState } from 'react';
import { 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle
} from 'lucide-react';
import Contact from '../components/Contact';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the current house construction cost per sq.ft in Dehradun?',
      a: 'In Dehradun, residential construction typically costs ₹1,650/sq.ft for our Basic Essential Package (Fe500 steel, Ultratech cement, standard tiles), ₹1,950/sq.ft for our most popular Premium Standard Package (Fe550 Tata/Jindal steel, Kajaria tiles, Jaquar fittings, UPVC windows), and ₹2,450+/sq.ft for Luxury Turnkey finishes with Italian marble, modular kitchens, and smart automation.'
    },
    {
      q: 'What is covered under Gupta\'s Evergreen Developers\' 5-Year Warranty?',
      a: 'Our 5-Year Comprehensive Warranty covers all workmanship defects, roof and sunken toilet water-proofing leakage, structural cracks, window seal integrity, and concealed plumbing lines. Additionally, we provide a 10-Year Structural Stability Guarantee on the foundation, RCC columns, and load-bearing superstructure.'
    },
    {
      q: 'Do you assist with MDDA (Mussoorie Dehradun Development Authority) map sanction?',
      a: 'Yes. Our licensed architectural and structural team prepares all 2D blueprints, site layout plans, and structural stability certificates in strict accordance with MDDA building bye-laws and liaisons the application process through the online single-window portal.'
    },
    {
      q: 'How do you ensure earthquake safety in Dehradun and Mussoorie?',
      a: 'Uttarakhand is situated in Seismic Zones IV and V. All our structural designs utilize ductile rebar detailing under IS 13920, heavy Fe550 TMT steel cages, M25/M30 machine-batched concrete, and custom reinforced retaining walls for hill slopes to prevent ground movement or settlement.'
    },
    {
      q: 'Does Gupta\'s Evergreen Developers subcontract work to outside contractors?',
      a: 'Never. Unlike most unorganized contractors, we operate with a 100% in-house workforce of civil engineers, project managers, licensed architects, and vetted mason teams. Sunil Kumar Gupta and Vansh Gupta personally oversee daily quality control.'
    },
    {
      q: 'How does the milestone-based payment schedule work?',
      a: 'You never pay for uncompleted work. Our contract breaks payments into 8 transparent milestones (Booking, Plinth, Ground Slab, Upper Slabs, Brickwork, Flooring/MEP, Finishing, and Handover). Each stage is released only after physical inspection and client sign-off.'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-neutral-900 space-y-0">
      
      {/* Page Header (Forest Olive Night) */}
      <section className="relative py-24 bg-[#141C12] text-white border-b border-[#31432B]/60">
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E3F27] border border-[#537048]/40 text-[#D5BAA6] text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-[#A87B5C]" />
            Corporate Headquarters & Site Consultations
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            CONTACT GUPTA'S EVERGREEN <br />
            <span className="text-[#D5BAA6] border-b-2 border-[#8E6144] pb-1">DEVELOPERS LLP</span>
          </h1>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Visit our 105 Rajpur Road corporate suites, call our founders directly, or book a complimentary on-site architectural evaluation for your plot.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Component */}
      <Contact />

      {/* Frequently Asked Questions (FAQ) Accordion */}
      <section className="py-20 bg-white border-t border-[#E6DFD5]">
        <div className="container-custom max-w-4xl mx-auto">
          
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#5C3D2B]" />
              Clear Answers to Critical Questions
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#1C1917] mb-3">
              FREQUENTLY ASKED <span className="text-olive-gradient">QUESTIONS</span>
            </h2>
            <div className="olive-brown-divider" />
            <p className="text-xs sm:text-sm text-neutral-600">
              Essential knowledge on Dehradun construction bye-laws, costs, soil conditions, and our corporate guarantees.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="card-olive-brown overflow-hidden border-[#E6DFD5] transition-all bg-white"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:text-[#3D5337] transition-colors"
                  >
                    <span className="font-cinzel text-sm sm:text-base font-bold text-[#1C1917]">
                      {faq.q}
                    </span>
                    <span className="text-[#5C3D2B] flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-[#FAF8F5] pt-4 animate-fade-in-up">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}