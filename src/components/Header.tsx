import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Calculator, 
  Award,
  CalendarCheck
} from 'lucide-react';

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Projects', path: '/projects' },
    { name: 'Guides', path: '/articles' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Pre-Header Bar (Deep Olive Night) */}
      <div className="bg-[#121A10] border-b border-[#31432B]/40 text-[10.5px] text-neutral-300 py-1.5 px-4 z-50 relative hidden lg:block">
        <div className="container-custom flex items-center justify-between h-5">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#B0C5A6] font-medium tracking-wider">
              <Award className="w-3 h-3 text-[#A87B5C] flex-shrink-0" />
              OPERATING SINCE 2012 • LLPIN: ACP-3601 (ROC UTTARAKHAND)
            </span>
            <span className="text-[#31432B]">•</span>
            <span className="flex items-center gap-1.5 text-neutral-400 tracking-wide">
              <MapPin className="w-3 h-3 text-[#A87B5C] flex-shrink-0" />
              105 Rajpur Road, Dehradun (Near Parsvnath Eleganza)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#D5BAA6] font-medium tracking-wide">
              ★ 5.0 (120+ Google Reviews | 159+ Justdial)
            </span>
            <span className="text-[#31432B]">|</span>
            <a 
              href="tel:+919548393798" 
              className="flex items-center gap-1.5 text-white hover:text-[#B0C5A6] transition-colors font-medium tracking-wide"
            >
              <Phone className="w-3 h-3 text-[#A87B5C]" />
              Hotline: +91 95483 93798
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar (Rich Forest Olive with Warm Walnut Accents) */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#162114] text-white border-b ${
          scrolled
            ? 'shadow-2xl shadow-black/50 border-[#405737]/50 backdrop-blur-md'
            : 'border-[#31432B]/50'
        }`}
      >
        <div className="container-custom w-full flex items-center justify-between gap-4 h-16 sm:h-[72px] lg:h-20">
          
          {/* Left: Brand Logo from Google Drive */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group flex-shrink-0"
            aria-label="Gupta's Evergreen Developers LLP Home"
          >
            {/* Authentic Google Drive Logo Emblem Container */}
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-[#23301E] border border-[#537048]/60 p-1 flex items-center justify-center shadow-md group-hover:border-[#A87B5C] transition-all flex-shrink-0">
              <img
                src="/images/drive_logo_gold.webp"
                alt="Gupta's Evergreen Developers Official Logo"
                className="w-full h-full object-contain filter drop-shadow"
                width="44"
                height="44"
              />
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col justify-center">
              <span className="font-cinzel text-sm sm:text-base lg:text-[17px] font-bold tracking-[0.06em] text-white group-hover:text-[#B0C5A6] transition-colors leading-tight whitespace-nowrap">
                GUPTA'S EVERGREEN
              </span>
              <span className="text-[8px] sm:text-[8.5px] tracking-[0.24em] uppercase text-[#D5BAA6] font-medium leading-none mt-1">
                Developers LLP • Dehradun
              </span>
            </div>
          </Link>

          {/* Center: Perfectly Aligned Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-shrink-0">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `h-9 px-3 xl:px-3.5 inline-flex items-center justify-center rounded-lg text-xs uppercase tracking-[0.12em] font-medium transition-all duration-200 relative whitespace-nowrap leading-none ${
                    isActive
                      ? 'text-white bg-[#2E3F27] border border-[#537048] shadow-sm font-bold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/[0.06]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right: Quick Action Buttons (Olive & Brown Palette) */}
          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
            <Link
              to="/packages#calculator"
              className="hidden xl:inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg text-xs uppercase tracking-[0.12em] text-[#D5BAA6] hover:text-white bg-white/[0.05] border border-[#8E6144]/40 hover:border-[#8E6144] transition-all font-medium whitespace-nowrap leading-none"
            >
              <Calculator className="w-3.5 h-3.5 text-[#A87B5C]" />
              Estimator
            </Link>

            <button
              onClick={onOpenConsultation}
              className="h-9 px-4 inline-flex items-center justify-center font-bold text-xs uppercase tracking-[0.12em] rounded-lg bg-[#5C3D2B] hover:bg-[#724C35] text-white transition-all shadow-md gap-1.5 border border-[#8E6144]/40 whitespace-nowrap leading-none"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#D5BAA6]" />
              <span>Book Site Visit</span>
            </button>
          </div>

          {/* Mobile Hamburger & Call */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+919548393798"
              className="p-2.5 rounded-xl bg-[#2E3F27] text-[#D5BAA6] border border-[#537048]/40 hover:bg-[#3D5337] transition-colors"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl bg-[#2E3F27] text-white hover:text-[#D5BAA6] hover:bg-[#3D5337] transition-colors border border-[#537048]/40"
              aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileOpen ? <X className="w-5 h-5 text-[#D5BAA6]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#121A10] border-t border-[#31432B] px-5 py-6 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `py-3 px-4 rounded-xl text-xs uppercase tracking-[0.14em] font-semibold transition-all ${
                      isActive
                        ? 'bg-[#2E3F27] text-white border border-[#537048] shadow-sm'
                        : 'text-neutral-300 hover:text-white hover:bg-white/[0.04]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-4 mt-2 border-t border-[#31432B] flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenConsultation?.();
                  }}
                  className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider bg-[#5C3D2B] text-white hover:bg-[#724C35] rounded-xl flex items-center justify-center gap-2 transition-all shadow-md border border-[#8E6144]/40"
                >
                  <CalendarCheck className="w-4 h-4 text-[#D5BAA6]" />
                  <span>Book Free Site Consultation</span>
                </button>

                <a
                  href="tel:+919548393798"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#2E3F27] border border-[#537048]/40 text-xs font-bold text-neutral-200 uppercase tracking-wider hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#A87B5C]" />
                  Call Hotline: +91 95483 93798
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}