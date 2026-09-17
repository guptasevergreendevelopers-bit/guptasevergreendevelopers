import { Phone, MessageSquare, Calculator, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileActionDockProps {
  onOpenConsultation: () => void;
}

export default function MobileActionDock({ onOpenConsultation }: MobileActionDockProps) {
  const whatsappUrl = `https://wa.me/919548393798?text=${encodeURIComponent(
    "Hello Gupta's Evergreen Developers, I would like to enquire about house construction in Dehradun."
  )}`;

  return (
    <div className="block lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#141C12]/95 backdrop-blur-md border-t border-[#31432B]/60 px-2 py-2 shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto text-center">
        
        {/* Direct Call Button */}
        <a
          href="tel:+919548393798"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white transition-colors"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-4 h-4 text-[#A87B5C] mb-1" />
          <span className="text-[10px] uppercase font-bold tracking-wider leading-none text-neutral-200">Call</span>
        </a>

        {/* WhatsApp Direct Chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white transition-colors"
          aria-label="WhatsApp Chat"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366] mb-1 fill-current" />
          <span className="text-[10px] uppercase font-bold tracking-wider leading-none text-neutral-200">WhatsApp</span>
        </a>

        {/* Cost Calculator Shortcut */}
        <Link
          to="/packages#calculator"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white transition-colors"
          aria-label="Cost Estimator"
        >
          <Calculator className="w-4 h-4 text-[#B0C5A6] mb-1" />
          <span className="text-[10px] uppercase font-bold tracking-wider leading-none text-neutral-200">Estimate</span>
        </Link>

        {/* Book Site Visit Modal Trigger */}
        <button
          onClick={onOpenConsultation}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#5C3D2B] hover:bg-[#724C35] text-white font-bold transition-colors shadow-md border border-[#8E6144]/40"
          aria-label="Book Site Visit"
        >
          <CalendarCheck className="w-4 h-4 text-[#D5BAA6] mb-1" />
          <span className="text-[10px] uppercase font-extrabold tracking-wider leading-none">Visit</span>
        </button>

      </div>
    </div>
  );
}