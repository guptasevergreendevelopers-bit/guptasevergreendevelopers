import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';

// Interaction-only chrome: kept out of the initial bundle so it never gates LCP
const MobileActionDock = lazy(() => import('./components/MobileActionDock'));
const ConsultationModal = lazy(() => import('./components/ConsultationModal'));

// Lazy load non-homepage routes for mobile performance and faster TTI
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PackagesPage = lazy(() => import('./pages/PackagesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const ArticleDetailPage = lazy(() => import('./pages/ArticleDetailPage'));
const HomeConstructionPage = lazy(() => import('./pages/HomeConstructionPage'));
const TurnkeyConstructionPage = lazy(() => import('./pages/TurnkeyConstructionPage'));
const BuildersDevelopersPage = lazy(() => import('./pages/BuildersDevelopersPage'));
const ConstructionCostPage = lazy(() => import('./pages/ConstructionCostPage'));
const VillaConstructionPage = lazy(() => import('./pages/VillaConstructionPage'));
const CommercialConstructionPage = lazy(() => import('./pages/CommercialConstructionPage'));
const HomeRenovationPage = lazy(() => import('./pages/HomeRenovationPage'));

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
      <div className="premium-site min-h-screen bg-[#FAF8F5] text-neutral-900 flex flex-col font-sans selection:bg-[#3D5337] selection:text-white pb-14 lg:pb-0">
        
        {/* Forest Olive & Walnut Luxury Navbar */}
        <Header onOpenConsultation={() => handleOpenConsultation()} />

        {/* Dynamic Multi-Page Content (Warm Alabaster / Stone Background) */}
        <main className="flex-1 bg-[#FAF8F5]">
          <Suspense fallback={<div className="min-h-[60vh] bg-[#FAF8F5]" />}>
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
                path="/projects/:slug" 
                element={<ProjectDetailPage onOpenConsultation={handleOpenConsultation} />} 
              />
              <Route 
                path="/contact" 
                element={<ContactPage />} 
              />
              <Route 
                path="/articles" 
                element={<ArticlesPage onOpenConsultation={handleOpenConsultation} />} 
              />
              <Route 
                path="/articles/:slug" 
                element={<ArticleDetailPage onOpenConsultation={handleOpenConsultation} />} 
              />

              {/* Dedicated High-Intent Service Landing Pages */}
              <Route path="/home-construction-dehradun" element={<HomeConstructionPage onOpenConsultation={handleOpenConsultation} />} />
              <Route path="/turnkey-construction-dehradun" element={<TurnkeyConstructionPage onOpenConsultation={handleOpenConsultation} />} />
              <Route path="/builders-developers-dehradun" element={<BuildersDevelopersPage onOpenConsultation={handleOpenConsultation} />} />
              <Route path="/construction-cost-dehradun" element={<ConstructionCostPage onOpenConsultation={handleOpenConsultation} onOpenCalculatorConsultation={handleCalculatorConsultation} />} />
              <Route path="/villa-construction-dehradun" element={<VillaConstructionPage onOpenConsultation={handleOpenConsultation} />} />
              <Route path="/commercial-construction-dehradun" element={<CommercialConstructionPage onOpenConsultation={handleOpenConsultation} />} />
              <Route path="/home-renovation-dehradun" element={<HomeRenovationPage onOpenConsultation={handleOpenConsultation} />} />

              {/* Canonical Redirects from root slugs to /articles/[slug] */}
              <Route path="/house-construction-cost-dehradun-2026" element={<Navigate to="/articles/house-construction-cost-dehradun-2026" replace />} />
              <Route path="/best-construction-companies-dehradun" element={<Navigate to="/articles/best-construction-companies-dehradun" replace />} />
              <Route path="/house-construction-contractors-dehradun" element={<Navigate to="/articles/house-construction-contractors-dehradun" replace />} />
              <Route path="/turnkey-house-construction-dehradun" element={<Navigate to="/articles/turnkey-house-construction-dehradun" replace />} />
              <Route path="/villa-construction-mussoorie" element={<Navigate to="/articles/villa-construction-mussoorie" replace />} />
              <Route path="/construction-cost-calculator-dehradun" element={<Navigate to="/articles/construction-cost-calculator-dehradun" replace />} />
              <Route path="/mdda-building-approval-guide-dehradun" element={<Navigate to="/articles/mdda-building-approval-guide-dehradun" replace />} />
              <Route path="/house-construction-timeline-dehradun" element={<Navigate to="/articles/house-construction-timeline-dehradun" replace />} />
              <Route path="/construction-materials-and-specifications" element={<Navigate to="/articles/construction-materials-and-specifications" replace />} />
              <Route path="/completed-projects-dehradun" element={<Navigate to="/articles/completed-projects-dehradun" replace />} />
              <Route path="/construction-company-comparison-guide-dehradun" element={<Navigate to="/articles/construction-company-comparison-guide-dehradun" replace />} />

              {/* Catch-all fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
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
        <Suspense fallback={null}>
          <MobileActionDock onOpenConsultation={() => handleOpenConsultation()} />
        </Suspense>

        {/* Interactive Site Visit / Quotation Booking Modal */}
        {modalOpen && (
          <Suspense fallback={null}>
            <ConsultationModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              prefill={modalPrefill}
            />
          </Suspense>
        )}

      </div>
    </BrowserRouter>
  );
}