import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ConsultationModal from './components/ConsultationModal';
import MobileActionDock from './components/MobileActionDock';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PackagesPage from './pages/PackagesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

import { Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPrefill, setModalPrefill] = useState<{
    pkgTitle?: string;
    area?: number;
    floors?: string;
    totalEstimate?: string;
  } | undefined>(undefined);

  const handleOpenConsultation = (pkgOrProject?: string) => {
    setModalPrefill(pkgOrProject ? { pkgTitle: pkgOrProject } : undefined);
    setModalOpen(true);
  };

  const handleCalculatorConsultation = (data?: {
    area: number;
    packageType: string;
    floors: string;
    totalEstimate: string;
  }) => {
    if (data) {
      setModalPrefill({
        pkgTitle: data.packageType,
        area: data.area,
        floors: data.floors,
        totalEstimate: data.totalEstimate,
      });
    }
    setModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF8F5] text-neutral-900 flex flex-col font-sans selection:bg-[#3D5337] selection:text-white pb-14 lg:pb-0">
        
        {/* Forest Olive & Walnut Luxury Navbar */}
        <Header onOpenConsultation={() => handleOpenConsultation()} />

        {/* Dynamic Multi-Page Content (Warm Alabaster / Stone Background) */}
        <main className="flex-1 bg-[#FAF8F5]">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenConsultation={handleOpenConsultation}
                  onOpenCalculatorConsultation={handleCalculatorConsultation}
                />
              } 
            />
            <Route 
              path="/about" 
              element={<AboutPage onOpenConsultation={handleOpenConsultation} />} 
            />
            <Route 
              path="/services" 
              element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} 
            />
            <Route 
              path="/packages" 
              element={
                <PackagesPage 
                  onOpenConsultation={handleOpenConsultation}
                  onOpenCalculatorConsultation={handleCalculatorConsultation}
                />
              } 
            />
            <Route 
              path="/projects" 
              element={<ProjectsPage onOpenConsultation={handleOpenConsultation} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Deep Forest Olive & Walnut Corporate Footer */}
        <Footer />

        {/* Desktop Floating Action Buttons in Olive & Brown */}
        <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
          {/* Direct WhatsApp Chat */}
          <a
            href="https://wa.me/919548393798?text=Hello%20Gupta's%20Evergreen%20Developers,%20I%20would%20like%20to%20discuss%20a%20construction%20project%20in%20Dehradun."
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 rounded-full bg-[#182316] hover:bg-[#253622] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-[#537048]/50 p-3.5 group"
            aria-label="Direct WhatsApp Chat"
          >
            <MessageSquare className="w-6 h-6 text-[#25D366] fill-current" />
          </a>

          {/* Direct Founder Hotline Call (Walnut Brown) */}
          <a
            href="tel:+919548393798"
            className="w-13 h-13 rounded-full bg-[#5C3D2B] hover:bg-[#724C35] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-[#8E6144]/60 p-3.5 group"
            aria-label="Direct Phone Call"
          >
            <Phone className="w-6 h-6 text-[#D5BAA6] fill-current" />
          </a>
        </div>

        {/* Mobile Quick-Action Dock (Fixed Bottom Bar on Mobile) */}
        <MobileActionDock onOpenConsultation={() => handleOpenConsultation()} />

        {/* Interactive Site Visit / Quotation Booking Modal */}
        <ConsultationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          prefill={modalPrefill}
        />

      </div>
    </BrowserRouter>
  );
}