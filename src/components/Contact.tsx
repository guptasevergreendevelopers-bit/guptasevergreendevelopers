import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Building,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'turnkey-villa',
    location: 'Dehradun (Rajpur Road)',
    plotArea: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const whatsappUrl = `https://wa.me/919548393798?text=${encodeURIComponent(
    `Hello Gupta's Evergreen Developers LLP, I am interested in discussing a construction project (${formData.projectType || 'Turnkey Construction'}) in ${formData.location || 'Dehradun'}.`
  )}`;

  return (
    <section id="contact" className="section-padding bg-[#FAF8F5] relative border-t border-[#E6DFD5]">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#5C3D2B]" />
            Corporate Headquarters & Consultations
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] mb-4">
            DISCUSS YOUR <span className="text-olive-gradient">VISION WITH US</span>
          </h2>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-600">
            Schedule a complimentary on-site architectural consultation with our founders Sunil Kumar Gupta and Vansh Gupta. We inspect plots across Dehradun, Mussoorie, Haridwar, and Rishikesh.
          </p>
        </div>

        {/* 2-Column Contact Layout (Olive Green & Warm Walnut Brown Theme) */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Details, Phones & Interactive Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Operating Office Card */}
            <div className="card-olive-brown p-6 bg-white border-[#D5BAA6]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2D3E28] text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                  <Building className="w-6 h-6 text-[#D5BAA6]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5C3D2B] block mb-1">
                    Operating Corporate Office
                  </span>
                  <h4 className="font-cinzel text-base font-bold text-[#1C1917] mb-2">
                    Rajpur Road Executive Office
                  </h4>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    105 Rajpur Road, Near Parsvnath Eleganza, Hathibarkala Salwala, Dehradun, Uttarakhand – 248001
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-2">
                    (Landmark: Opp. RTO Office / Hathibarkala Commercial Enclave)
                  </p>
                </div>
              </div>
            </div>

            {/* Registered Statutory Office Card */}
            <div className="card-olive-brown p-6 bg-white border-[#E6DFD5]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#D5BAA6] flex items-center justify-center text-[#5C3D2B] flex-shrink-0 mt-1">
                  <ShieldCheck className="w-6 h-6 text-[#5C3D2B]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                    Statutory Registered Office
                  </span>
                  <h4 className="font-cinzel text-base font-bold text-[#1C1917] mb-1">
                    Chander Nagar Headquarters
                  </h4>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    83/266, Chander Nagar, Dehradun, Uttarakhand – 248001
                  </p>
                  <div className="text-[11px] text-[#3D5337] mt-1 font-mono font-bold">
                    LLPIN: ACP-3601 (ROC Uttarakhand)
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="tel:+919548393798"
                className="card-olive-brown p-4 block bg-white hover:border-[#3D5337] transition-all"
              >
                <div className="text-[10px] uppercase tracking-wider text-[#5C3D2B] mb-1 font-semibold">
                  Sunil Gupta (Founder)
                </div>
                <div className="text-sm font-bold text-[#1C1917] flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#3D5337]" />
                  +91 95483 93798
                </div>
              </a>

              <a
                href="tel:+917668766118"
                className="card-olive-brown p-4 block bg-white hover:border-[#5C3D2B] transition-all"
              >
                <div className="text-[10px] uppercase tracking-wider text-[#5C3D2B] mb-1 font-semibold">
                  Vansh Gupta (Operations)
                </div>
                <div className="text-sm font-bold text-[#1C1917] flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#5C3D2B]" />
                  +91 76687 66118
                </div>
              </a>
            </div>

            <a
              href="mailto:guptasevergreendevelopers@gmail.com"
              className="card-olive-brown p-4 block bg-white hover:border-[#3D5337] transition-all"
            >
              <div className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1 font-semibold">
                Official Corporate Email
              </div>
              <div className="text-sm font-bold text-[#1C1917] flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#3D5337]" />
                guptasevergreendevelopers@gmail.com
              </div>
            </a>

            {/* Direct WhatsApp Quick Chat Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#1C2618] text-white flex items-center justify-between hover:bg-[#283622] transition-all shadow-md border border-[#405737]/60"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#B0C5A6]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#E8EDE4]">
                    Instant WhatsApp Consultation
                  </div>
                  <div className="text-[11px] text-[#B0C5A6]">
                    Send floor plan or plot location directly to founders
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#D5BAA6]" />
            </a>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden border border-[#D5BAA6] h-48 bg-white shadow-sm">
              <iframe
                title="Gupta's Evergreen Developers LLP Office Location"
                src="https://maps.google.com/maps?q=105%20Rajpur%20Road,%20Dehradun,%20Uttarakhand&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

          </div>

          {/* Right Column: Inquiry Form (7 cols, White Card) */}
          <div className="lg:col-span-7 card-olive-brown p-6 sm:p-10 bg-white border-[#D5BAA6] shadow-xl">
            
            {submitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#EBF1E8] border border-[#405737] text-[#2D3E28] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-[#1C1917]">
                  Consultation Request Received!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our designated partner will review your requirements for <strong>{formData.location}</strong> and call you at <strong>{formData.phone}</strong> within 2 hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-olive-sleek text-xs px-6 py-3 inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Chat Directly</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        projectType: 'turnkey-villa',
                        location: 'Dehradun (Rajpur Road)',
                        plotArea: '',
                        message: ''
                      });
                    }}
                    className="btn-brown-outline text-xs px-6 py-3"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5C3D2B]">
                    Free Architectural & Civil Consultation
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917] mt-1 mb-2">
                    Request Plot Inspection or Construction Quote
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Share your plot size, location, and desired specifications. We respond with a personalized preliminary cost analysis.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#31432B] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Sharma"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D5BAA6] focus:border-[#3D5337] rounded-xl text-sm text-[#1C1917] placeholder-neutral-400 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#31432B] mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D5BAA6] focus:border-[#3D5337] rounded-xl text-sm text-[#1C1917] placeholder-neutral-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#31432B] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@domain.com"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D5BAA6] focus:border-[#3D5337] rounded-xl text-sm text-[#1C1917] placeholder-neutral-400 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#31432B] mb-1.5">
                      Project Nature *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D5BAA6] focus:border-[#3D5337] rounded-xl text-sm text-[#1C1917] focus:outline-none transition-all"
                    >
                      <option value="turnkey-villa">Turnkey Luxury Villa Construction</option>
                      <option value="residential-house">Residential Home (₹1,650 – ₹1,950/sqft)</option>
                      <option value="commercial-plaza">Commercial Plaza / Retail Showroom</option>
                      <option value="rcc-structural">RCC Structural Foundation & Casting</option>
                      <option value="interior-kitchen">Luxury Interior & Modular Kitchen</option>
                      <option value="renovation">Renovation & Structural Floor Addition</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#31432B] mb-1.5">
                      Location / Region *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Rajpur Road / Mussoorie / Sahastradhara"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D5BAA6] focus:border-[#3D5337] rounded-xl text-sm text-[#1C1917] placeholder-neutral-400 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#31432B] mb-1.5">
                      Approx. Built-Up Area (Sq.Ft)
                    </label>
                    <input
                      type="text"
                      value={formData.plotArea}
                      onChange={(e) => setFormData({ ...formData, plotArea: e.target.value })}
                      placeholder="e.g. 2,400 sq.ft or 300 sq.yards plot"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D5BAA6] focus:border-[#3D5337] rounded-xl text-sm text-[#1C1917] placeholder-neutral-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#31432B] mb-1.5">
                    Project Vision / Special Architectural Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your dream project: number of floors, preferred architectural style, expected start month..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D5BAA6] focus:border-[#3D5337] rounded-xl text-sm text-[#1C1917] placeholder-neutral-400 focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-olive-sleek w-full py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
                >
                  {loading ? (
                    <span>Registering Consultation...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Request For Free Site Consultation</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-neutral-500">
                  🔒 Your contact information is strictly confidential. Direct communication with designated partners only.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}