import { 
  Building2, 
  HardHat, 
  ArrowRight,
  ShieldCheck,
  Phone
} from 'lucide-react';
import Projects from '../components/Projects';
import { usePageSEO } from '../hooks/usePageSEO';
import { projects } from '../data/projects';

interface ProjectsPageProps {
  onOpenConsultation: (projectName?: string) => void;
}

export default function ProjectsPage({ onOpenConsultation }: ProjectsPageProps) {
  usePageSEO({
    title: "Construction Projects in Dehradun | Gupta's Evergreen",
    description: "Explore our portfolio of luxury villas, commercial retail plazas, hillside duplexes, and anti-seismic RCC slab castings across Dehradun and Mussoorie.",
    canonicalPath: "/projects",
  });

  // Generate structured data for the projects page
  const projectItems = projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: project.name,
    item: `https://www.guptasevergreendevelopers.com/projects/${project.slug}`,
    description: project.description,
    image: project.images[0]?.url ? `https://www.guptasevergreendevelopers.com${project.images[0].url}` : undefined,
  }));

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.guptasevergreendevelopers.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: 'https://www.guptasevergreendevelopers.com/projects'
      }
    ]
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projectItems
  };

  return (
    <div className="bg-[#FAF8F5] text-neutral-900 space-y-0">
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, itemListJsonLd]) }}
      />

      {/* Page Header (Forest Olive Night) */}
      <section className="relative py-8 sm:py-14 lg:py-18 bg-[#141C12] text-white border-b border-[#31432B]/60">
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-3 sm:space-y-4">
          <h1 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            COMPLETED & ONGOING <br />
            <span className="text-[#D5BAA6] border-b-2 border-[#8E6144] pb-1">CONSTRUCTION LANDMARKS</span>
          </h1>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Real photographic evidence of our projects: luxury contemporary villas, anti-seismic RCC slab castings, commercial retail frameworks, and luxury modular interiors.
          </p>
        </div>
      </section>

      {/* Main Interactive Projects Component */}
      <Projects onOpenConsultation={onOpenConsultation} />

      {/* Book In-Person Site Visit CTA */}
      <section className="py-20 bg-white border-t border-[#E6DFD5]">
        <div className="container-custom max-w-4xl mx-auto rounded-3xl bg-[#182316] text-white p-8 sm:p-14 text-center space-y-5 shadow-2xl border border-[#31432B]/60">
          <div className="w-14 h-14 rounded-2xl bg-[#2E3F27] border border-[#537048]/40 flex items-center justify-center text-[#D5BAA6] mx-auto">
            <HardHat className="w-7 h-7" />
          </div>
          <h3 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white">
            Want to Inspect Our Active Construction Sites in Person?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            We invite prospective homeowners and commercial developers to visit our ongoing sites in Dehradun and Mussoorie. Inspect our rebar grid, shuttering quality, M25 concrete casting, and brickwork craftsmanship firsthand.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation('In-Person Site Inspection Tour')}
              className="btn-brown-sleek text-xs px-8 py-3.5 inline-flex items-center justify-center gap-2 shadow-xl"
            >
              Book In-Person Site Inspection Tour
            </button>
            <a
              href="tel:+919548393798"
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full border-2 border-[#D5BAA6]/70 bg-transparent hover:bg-white text-white hover:text-[#141C12] transition-all duration-300 shadow-lg group"
            >
              <Phone className="w-4 h-4 text-[#D5BAA6] group-hover:text-[#141C12] transition-colors" />
              <span>Call +91 95483 93798</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}