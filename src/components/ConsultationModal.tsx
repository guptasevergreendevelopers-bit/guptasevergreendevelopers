import { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Calendar
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: {
    pkgTitle?: string;
    area?: number;
    floors?: string;
    totalEstimate?: string;
  };
}

export default function ConsultationModal({ isOpen, onClose, prefill }: ConsultationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Dehradun');
  const [projectType, setProjectType] = useState(prefill?.pkgTitle || 'Turnkey Residential Villa');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefill?.pkgTitle) {
      setProjectType(prefill.pkgTitle);
    }
  }, [prefill]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const whatsappMessage = `Hello Gupta's Evergreen Developers, I would like to book a site consultation for ${projectType} in ${location}. ${
    prefill?.area ? `Plot/Built-up Area: ${prefill.area} sq.ft, Estimated Budget: ${prefill.totalEstimate}.` : ''
  }`;

  const whatsappLink = `https://wa.me/919548393798?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in-up">
      <div className="relative w-full max-w-xl bg-[#FAF8F5] border border-[#D5BAA6] rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-neutral-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#E6ECE2] hover:bg-[#CFDCC8] text-[#2D3E28] transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EBF1E8] border border-[#405737] text-[#2D3E28] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-cinzel text-2xl font-bold text-[#1C1917]">
              Site Inspection Confirmed!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md mx-auto">
              Thank you, <strong>{name}</strong>. Our designated partner Sunil Gupta or Vansh Gupta will call you directly at <strong>{phone}</strong> to confirm your plot visit in <strong>{location}</strong>.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-olive-sleek text-xs px-6 py-3 inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Chat Now</span>
              </a>
              <button
                onClick={onClose}
                className="btn-brown-outline text-xs px-6 py-3"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#31432B]/10 text-[#31432B] text-[10px] font-bold uppercase tracking-wider mb-2 border border-[#31432B]/20">
                <Calendar className="w-3 h-3 text-[#5C3D2B]" />
                Complimentary Site Visit
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917]">
                Book a Free Architectural Consultation
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Direct discussion with managing partners. We evaluate your plot, check soil conditions, and provide a tailored estimate.
              </p>
            </div>

            {/* Prefill Banner if available */}
            {prefill?.totalEstimate && (
              <div className="p-3.5 rounded-xl bg-white border border-[#D5BAA6] mb-5 flex items-center justify-between text-xs">
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Selected Configuration:</span>
                  <strong className="text-[#1C1917]">{prefill.pkgTitle} • {prefill.area} Sq.Ft ({prefill.floors})</strong>
                </div>
                <div className="text-right">
                  <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Estimate:</span>
                  <strong className="text-[#5C3D2B] font-extrabold">{prefill.totalEstimate}</strong>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#31432B] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sanjeev Rawat"
                  className="w-full px-4 py-2.5 bg-white border border-[#D5BAA6] focus:border-[#3D5337] rounded-xl text-xs text-[#1C1917] placeholder-neutral-400 focus:outline-none"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#31432B] mb-1">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 XXXXX"
                    className="w-full px-4 py-2.5 bg-white border border-[#D5BAA6] focus:border-[#3D5337] rounded-xl text-xs text-[#1C1917] placeholder-neutral-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#31432B] mb-1">
                    Plot / Project Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Rajpur Road / Mussoorie"
                    className="w-full px-4 py-2.5 bg-white border border-[#D5BAA6] focus:border-[#3D5337] rounded-xl text-xs text-[#1C1917] placeholder-neutral-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#31432B] mb-1">
                  Scope / Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention plot dimensions, desired start timeline, or any specific architectural preferences..."
                  className="w-full px-4 py-2.5 bg-white border border-[#D5BAA6] focus:border-[#3D5337] rounded-xl text-xs text-[#1C1917] placeholder-neutral-400 focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-olive-sleek w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  {loading ? 'Confirming...' : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm Site Visit Request</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#3D5337] hover:text-[#5C3D2B] hover:underline flex items-center justify-center gap-1.5 font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#3D5337]" />
                  Or click here to chat instantly on WhatsApp (+91 95483 93798)
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}