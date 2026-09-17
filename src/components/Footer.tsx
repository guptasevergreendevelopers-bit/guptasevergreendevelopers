import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ArrowUp,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121A10] border-t border-[#31432B]/60 text-neutral-400 text-xs relative">
      {/* Upper Main Footer Grid */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Corporate Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-[#23301E] border border-[#537048]/60 p-1 flex items-center justify-center">
                <img 
                  src="/images/drive_logo_gold.png" 
                  alt="Gupta's Evergreen Developers Logo" 
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <div>
                <span className="block font-cinzel text-lg font-bold tracking-wider text-white group-hover:text-[#B0C5A6] transition-colors">
                  GUPTA'S EVERGREEN
                </span>
                <span className="block text-[10px] tracking-[0.24em] uppercase text-[#D5BAA6] font-medium">
                  Developers LLP • Dehradun
                </span>
              </div>
            </Link>

            <p className="text-xs text-neutral-300 leading-relaxed max-w-sm">
              Established in 2012, <strong>Gupta's Evergreen Developers LLP</strong> is one of Dehradun's best construction companies and architectural engineering practices. Specializing in luxury turnkey residential villas, commercial complexes, and anti-seismic RCC structures with a 5-year project warranty.
            </p>

            <div className="space-y-2 text-xs pt-1">
              <div className="flex items-start gap-2 text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-[#A87B5C] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>LLPIN: ACP-3601</strong> • Registered with ROC Uttarakhand (MCA)
                </span>
              </div>
              <div className="flex items-start gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#A87B5C] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Corporate Operating Office:</strong> 105 Rajpur Road, Dehradun (Near Parsvnath Eleganza)
                </span>
              </div>
              <div className="flex items-start gap-2 text-neutral-300">
                <Building2 className="w-4 h-4 text-[#A87B5C] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Statutory Registered Office:</strong> 83/266, Chander Nagar, Dehradun – 248001
                </span>
              </div>
            </div>
          </div>

          {/* Civil Disciplines & Services */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#31432B] pb-2">
              Civil Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services" className="hover:text-[#B0C5A6] transition-colors">
                  Turnkey Residential Construction
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B0C5A6] transition-colors">
                  Architectural 3D Elevations & MDDA
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B0C5A6] transition-colors">
                  Commercial Complexes & Plazas
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B0C5A6] transition-colors">
                  Anti-Seismic RCC Structural Works
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B0C5A6] transition-colors">
                  Modular Kitchens & Luxury Bathrooms
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B0C5A6] transition-colors">
                  Renovation & Structural Floor Additions
                </Link>
              </li>
            </ul>
          </div>

          {/* Pricing & Estimation Links */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#31432B] pb-2">
              Rates & Packages
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/packages" className="hover:text-[#B0C5A6] transition-colors">
                  Basic Package (₹1,650/sq.ft)
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-[#B0C5A6] transition-colors">
                  Premium Standard (₹1,950/sq.ft)
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-[#B0C5A6] transition-colors">
                  Luxury Turnkey (₹2,450/sq.ft)
                </Link>
              </li>
              <li>
                <Link to="/packages#calculator" className="hover:text-[#B0C5A6] transition-colors flex items-center gap-1 text-[#D5BAA6]">
                  <Layers className="w-3.5 h-3.5 text-[#A87B5C]" />
                  Cost Calculator
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#B0C5A6] transition-colors">
                  Why Us vs Other Contractors
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#B0C5A6] transition-colors">
                  Delivered Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Scraped Geo Territories & Direct Hotline */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#31432B] pb-2">
              Geo Territories
            </h4>
            
            <div className="space-y-3 mb-5">
              <div>
                <span className="text-[10px] uppercase font-bold text-neutral-400 block">Founder Hotlines</span>
                <a href="tel:+919548393798" className="text-white hover:text-[#B0C5A6] font-bold text-xs block">
                  Sunil Gupta: +91 95483 93798
                </a>
                <a href="tel:+917668766118" className="text-white hover:text-[#B0C5A6] font-bold text-xs block">
                  Vansh Gupta: +91 76687 66118
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-neutral-400 block">Corporate Email</span>
                <a href="mailto:guptasevergreendevelopers@gmail.com" className="text-xs text-[#D5BAA6] hover:underline break-all">
                  guptasevergreendevelopers@gmail.com
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">Key Localities Served</span>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Dehradun (Rajpur Road, Sahastradhara Road, IT Park, Chander Nagar, GMS Road, Vasant Vihar), Mussoorie, Haridwar, Rishikesh, and the broader Garhwal foothills.
                </p>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[11px] text-white hover:text-[#B0C5A6] uppercase font-bold tracking-wider py-1.5 px-3 rounded-full bg-[#23301E] border border-[#537048]/50 hover:border-[#537048] transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#A87B5C]" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Statutory Strip */}
      <div className="border-t border-[#31432B]/50 bg-[#0C120B] py-6 px-4">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            &copy; 2012 – {new Date().getFullYear()} <strong>GUPTA'S EVERGREEN DEVELOPERS LLP</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center text-neutral-400">
            <span>LLPIN: ACP-3601</span>
            <span>•</span>
            <span>ROC Uttarakhand</span>
            <span>•</span>
            <span>5 Years Project Warranty</span>
            <span>•</span>
            <span>guptasevergreendevelopersllp.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}