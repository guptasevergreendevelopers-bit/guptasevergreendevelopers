import { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Award,
  MapPin
} from 'lucide-react';

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Amit Singh Rawat',
      title: 'Infrastructure Project Director',
      project: 'Government Infrastructure & Civil Works',
      location: 'Rishikesh – Dehradun Corridor',
      rating: 5,
      review: 'Gupta\'s Evergreen Developers demonstrated exceptional technical competence during our civil infrastructure execution. Their engineering corps met all stringent soil stability, RCC cube tests, and seismic safety guidelines. Delivered within budget with uncompromising quality.',
      badge: 'Verified Infrastructure Project'
    },
    {
      id: 2,
      name: 'Dr. Rajesh Sharma',
      title: 'Senior Healthcare Consultant',
      project: '6,800 Sq.Ft Contemporary Villa',
      location: 'Rajpur Road, Dehradun',
      rating: 5,
      review: 'Sunil Gupta and Vansh Gupta handled my Rajpur Road residence with unparalleled personal dedication. From soil testing to the intricate Italian marble and UPVC double glazing, every milestone was executed with precision. Their 5-year warranty provides complete peace of mind.',
      badge: 'Turnkey Luxury Villa Client'
    },
    {
      id: 3,
      name: 'Priya Malhotra',
      title: 'Boutique Resort Owner',
      project: 'Heritage Resort Expansion & Suites',
      location: 'Mussoorie Hills, Uttarakhand',
      rating: 5,
      review: 'Building on hill slopes in Mussoorie is notoriously difficult due to logistics, retaining walls, and weather windows. Gupta\'s Evergreen team completed our mountain suites ahead of schedule. The timber-pitched ceilings and seismic engineering are world-class.',
      badge: 'Commercial Resort Client'
    },
    {
      id: 4,
      name: 'Col. Vikramaditya Joshi (Retd.)',
      title: 'Homeowner',
      project: '3,800 Sq.Ft Duplex Residence',
      location: 'Sahastradhara Road, Dehradun',
      rating: 5,
      review: 'As an army veteran, I value discipline, transparent billing, and zero excuses. Gupta\'s Evergreen Developers exceeded my expectations. Daily WhatsApp photos, direct factory-dispatched Tata steel, and zero cost escalation from the initial quote. Highly recommended!',
      badge: 'Residential Turnkey Client'
    },
    {
      id: 5,
      name: 'Deepak Agarwal',
      title: 'Managing Director, Agarwal Retail',
      project: 'Multi-Level Retail Commercial Plaza',
      location: 'Chander Nagar, Dehradun',
      rating: 5,
      review: 'They built our commercial retail showroom with heavy vehicular parking and high structural load capacities. Their familiarity with MDDA sanctions and building bye-laws saved us months of bureaucratic delays. An exemplary construction partner.',
      badge: 'Commercial Developer'
    }
  ];

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIdx];

  return (
    <section id="testimonials" className="section-padding bg-white relative border-t border-[#E6DFD5]">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5 text-[#5C3D2B]" />
            Client Reviews & Reputation
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] mb-4">
            VERIFIED VOICES OF <span className="text-olive-gradient">SATISFACTION</span>
          </h2>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-600">
            Backed by a flawless 5.0 Star Rating across Google and Justdial from discerning homeowners, commercial developers, and government infrastructure officers.
          </p>
        </div>

        {/* Live Ratings Banner (Olive & Brown Theme) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] text-center">
            <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#31432B] mb-0.5">5.0 ★</div>
            <div className="text-xs text-[#1C1917] font-bold">Google Reviews</div>
            <div className="text-[10px] text-neutral-500">120+ Verified Client Ratings</div>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] text-center">
            <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#5C3D2B] mb-0.5">5.0 ★</div>
            <div className="text-xs text-[#1C1917] font-bold">Justdial Verified</div>
            <div className="text-[10px] text-neutral-500">159+ Local Directory Ratings</div>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] text-center">
            <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#31432B] mb-0.5">500+</div>
            <div className="text-xs text-[#1C1917] font-bold">Projects Completed</div>
            <div className="text-[10px] text-neutral-500">Across Uttarakhand Since 2012</div>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] text-center">
            <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#5C3D2B] mb-0.5">100%</div>
            <div className="text-xs text-[#1C1917] font-bold">In-House Staff</div>
            <div className="text-[10px] text-neutral-500">Zero Unvetted Subcontracting</div>
          </div>
        </div>

        {/* Testimonial Showcase Card (Sleek Olive & Brown) */}
        <div className="max-w-4xl mx-auto card-olive-brown p-8 sm:p-12 relative overflow-hidden shadow-xl bg-white border-[#D5BAA6]">
          <Quote className="absolute top-6 right-6 w-20 h-20 text-[#E6ECE2] pointer-events-none" />

          {/* Stars */}
          <div className="flex items-center gap-1.5 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C08261] text-[#C08261]" />
            ))}
            <span className="ml-3 text-xs font-bold uppercase tracking-wider text-[#31432B] bg-[#EBF1E8] px-3 py-1 rounded-full border border-[#CFDCC8]">
              {current.badge}
            </span>
          </div>

          {/* Quote Body */}
          <p className="text-base sm:text-xl text-neutral-800 font-normal leading-relaxed italic mb-8">
            "{current.review}"
          </p>

          {/* Client Details & Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#E6DFD5]">
            <div>
              <div className="font-cinzel text-lg sm:text-xl font-bold text-[#1C1917]">
                {current.name}
              </div>
              <div className="text-xs text-[#5C3D2B] font-semibold">
                {current.title}
              </div>
              <div className="text-xs text-neutral-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-[#3D5337]" />
                {current.project} • {current.location}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-[#FAF8F5] hover:bg-[#2D3E28] hover:text-white text-[#2D3E28] transition-colors flex items-center justify-center border border-[#D5BAA6]"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-[#5C3D2B] font-mono px-2 font-bold">
                0{currentIdx + 1} / 0{testimonials.length}
              </span>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-[#FAF8F5] hover:bg-[#2D3E28] hover:text-white text-[#2D3E28] transition-colors flex items-center justify-center border border-[#D5BAA6]"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}