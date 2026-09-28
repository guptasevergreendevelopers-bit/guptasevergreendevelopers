import { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Award,
  MapPin,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Amit Singh Rawat',
      title: 'Infrastructure Project Director',
      project: 'Civil Infrastructure Execution',
      location: 'Rishikesh – Dehradun Corridor',
      rating: 5,
      review: 'Gupta\'s Evergreen Developers demonstrated exceptional technical competence during our civil infrastructure execution. Their engineering corps met all stringent soil stability, RCC cube tests, and seismic safety guidelines. Delivered within budget with uncompromising quality.',
      badge: 'Verified Infrastructure Project',
      source: 'Google Verified Review'
    },
    {
      id: 2,
      name: 'Dr. Rajesh Sharma',
      title: 'Senior Healthcare Consultant',
      project: '6,800 Sq.Ft Contemporary Villa',
      location: 'Rajpur Road, Dehradun',
      rating: 5,
      review: 'Sunil Gupta and Vansh Gupta handled my Rajpur Road residence with unparalleled personal dedication. From soil testing to the intricate Italian marble and UPVC double glazing, every milestone was executed with precision. Their 5-year warranty provides complete peace of mind.',
      badge: 'Turnkey Luxury Villa Client',
      source: 'Google Verified Review'
    },
    {
      id: 3,
      name: 'Priya Malhotra',
      title: 'Boutique Resort Owner',
      project: 'Heritage Resort Expansion & Suites',
      location: 'Mussoorie Hills, Uttarakhand',
      rating: 5,
      review: 'Building on hill slopes in Mussoorie is notoriously difficult due to logistics, retaining walls, and weather windows. Gupta\'s Evergreen team completed our mountain suites ahead of schedule. The timber-pitched ceilings and seismic engineering are world-class.',
      badge: 'Commercial Resort Client',
      source: 'Google Verified Review'
    },
    {
      id: 4,
      name: 'Col. Vikramaditya Joshi (Retd.)',
      title: 'Homeowner',
      project: '3,800 Sq.Ft Duplex Residence',
      location: 'Sahastradhara Road, Dehradun',
      rating: 5,
      review: 'As an army veteran, I value discipline, transparent billing, and zero excuses. Gupta\'s Evergreen Developers exceeded my expectations. Daily WhatsApp photos, direct factory-dispatched Tata steel, and zero cost escalation from the initial quote. Highly recommended!',
      badge: 'Residential Turnkey Client',
      source: 'Google Verified Review'
    },
    {
      id: 5,
      name: 'Deepak Agarwal',
      title: 'Managing Director, Agarwal Retail',
      project: 'Multi-Level Retail Commercial Plaza',
      location: 'Chander Nagar, Dehradun',
      rating: 5,
      review: 'They built our commercial retail showroom with heavy vehicular parking and high structural load capacities. Their familiarity with MDDA sanctions and building bye-laws saved us months of bureaucratic delays. An exemplary construction partner.',
      badge: 'Commercial Developer',
      source: 'Google Verified Review'
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

  const googleMapsUrl = "https://www.google.com/maps?q=105+Rajpur+Road+Dehradun";
  const justdialUrl = "https://www.justdial.com/Dehradun/Guptas-Evergreen-Developers-LLP";

  return (
    <section id="testimonials" className="section-padding bg-white relative border-t border-[#E6DFD5]">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5 text-[#5C3D2B]" />
            Client Reviews &amp; Reputation
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] mb-4">
            VERIFIED VOICES OF <span className="text-olive-gradient">SATISFACTION</span>
          </h2>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-600">
            Backed by a verified 5.0 Star Rating across Google and Justdial from homeowners, commercial developers, and civil infrastructure partners in Uttarakhand.
          </p>
        </div>

        {/* Live Ratings & Profile Links Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {/* Google Reviews Card */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#4285F4] hover:shadow-md transition-all text-center block group"
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span className="font-cinzel text-xl sm:text-2xl font-extrabold text-[#1C1917]">5.0 ★</span>
            </div>
            <div className="text-xs text-[#1C1917] font-bold group-hover:text-[#4285F4] transition-colors flex items-center justify-center gap-1">
              <span>Google Reviews</span>
              <ExternalLink className="w-3 h-3 text-[#4285F4]" />
            </div>
            <div className="text-[10px] text-neutral-500 mt-0.5">120+ Verified Client Ratings</div>
          </a>

          {/* Justdial Verified Card */}
          <a
            href={justdialUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] hover:border-[#5C3D2B] hover:shadow-md transition-all text-center block group"
          >
            <div className="font-cinzel text-xl sm:text-2xl font-extrabold text-[#5C3D2B] mb-1">5.0 ★</div>
            <div className="text-xs text-[#1C1917] font-bold group-hover:text-[#5C3D2B] transition-colors flex items-center justify-center gap-1">
              <span>Justdial Listing</span>
              <ExternalLink className="w-3 h-3 text-[#5C3D2B]" />
            </div>
            <div className="text-[10px] text-neutral-500 mt-0.5">249+ Local Ratings</div>
          </a>

          {/* Projects Completed */}
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] text-center">
            <div className="font-cinzel text-xl sm:text-2xl font-extrabold text-[#31432B] mb-1">500+</div>
            <div className="text-xs text-[#1C1917] font-bold">Projects Built</div>
            <div className="text-[10px] text-neutral-500 mt-0.5">Across Uttarakhand Since 2012</div>
          </div>

          {/* In-House Execution */}
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] text-center">
            <div className="font-cinzel text-xl sm:text-2xl font-extrabold text-[#5C3D2B] mb-1">100%</div>
            <div className="text-xs text-[#1C1917] font-bold">In-House Staff</div>
            <div className="text-[10px] text-neutral-500 mt-0.5">Zero Unvetted Subcontracting</div>
          </div>
        </div>

        {/* Dedicated Google Business Profile Showcase Strip */}
        <div className="max-w-4xl mx-auto mb-10 p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border-2 border-[#D5BAA6] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#E6DFD5] flex items-center justify-center shadow-sm flex-shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="font-cinzel text-base font-bold text-[#1C1917]">
                  Gupta's Evergreen Developers LLP
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#1E7E34] bg-[#E8F5E9] px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" /> Verified Business
                </span>
              </div>
              <div className="text-xs text-neutral-600 mt-0.5 flex items-center gap-2 justify-center sm:justify-start">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-[#1C1917]">5.0 Star Rating</span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-500">105 Rajpur Road, Dehradun</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="px-5 py-2.5 rounded-xl bg-[#2D3E28] hover:bg-[#1E2B1A] text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
            >
              <span>View Google Business Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="max-w-4xl mx-auto card-olive-brown p-8 sm:p-12 relative overflow-hidden shadow-xl bg-white border-[#D5BAA6] rounded-2xl">
          <Quote className="absolute top-6 right-6 w-20 h-20 text-[#E6ECE2] pointer-events-none" />

          {/* Stars & Source Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-1.5">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C08261] text-[#C08261]" />
              ))}
              <span className="ml-3 text-xs font-bold uppercase tracking-wider text-[#31432B] bg-[#EBF1E8] px-3 py-1 rounded-full border border-[#CFDCC8]">
                {current.badge}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-neutral-600 bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E6DFD5]">
              <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span className="font-medium">{current.source}</span>
            </div>
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
                type="button"
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
                type="button"
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
