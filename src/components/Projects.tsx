import { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Ruler, 
  Calendar, 
  Eye, 
  X, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HardHat
} from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'interior' | 'structural';
  categoryLabel: string;
  location: string;
  area: string;
  year: string;
  image: string;
  description: string;
  highlights: string[];
}

interface ProjectsProps {
  onOpenConsultation?: (projectTitle?: string) => void;
}

export default function Projects({ onOpenConsultation }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'proj-1',
      title: 'The Summit Villa — Rajpur Road',
      category: 'residential',
      categoryLabel: 'Luxury Villa',
      location: '108 Rajpur Road, Dehradun',
      area: '6,800 Sq.Ft',
      year: 'Completed 2025',
      image: '/images/image_03.jpeg',
      description: 'An iconic three-level bespoke contemporary villa featuring natural stone cladding, dark architectural fins, expansive cantilevered balconies with glass railings, landscaped terrace roof garden, and integrated perimeter security lighting.',
      highlights: [
        'Turnkey architectural design & civil construction',
        'Seismic Zone IV ductile detailing with Fe550 steel',
        'Soundproof double-glazed UPVC thermal windows',
        'Complete smart home automation & landscape lighting'
      ]
    },
    {
      id: 'proj-2',
      title: 'Greenwood Horizon Duplex',
      category: 'residential',
      categoryLabel: 'Contemporary Residence',
      location: 'Mussoorie Foothills, Dehradun',
      area: '4,500 Sq.Ft',
      year: 'Completed 2024',
      image: '/images/image_07.jpeg',
      description: 'A striking contemporary home characterized by crisp horizontal volumes, vertical privacy louvers, rich wooden ceiling soffits with recessed warm lighting, and private gated motor court.',
      highlights: [
        'Custom 2-story steel and concrete structural frame',
        'Vastu-compliant east-facing architectural layout',
        'High-grade Asian Paints Apex Ultima exterior finish',
        'Seamless indoor-outdoor courtyard integration'
      ]
    },
    {
      id: 'proj-3',
      title: 'Active RCC Slab & Anti-Seismic Casting',
      category: 'structural',
      categoryLabel: 'RCC Civil Engineering',
      location: 'Sahastradhara Valley, Dehradun',
      area: '8,200 Sq.Ft Slab',
      year: 'Active Project 2026',
      image: '/images/image_08.jpeg',
      description: 'On-site structural reinforcement binding and heavy concrete casting under direct engineering supervision. Features high-yield Fe550 TMT rebar grid, heavy beam-column nodes, and anti-settlement deep foundation.',
      highlights: [
        'High-grade M25 machine-batched concrete pour',
        'Strict cube compression test quality compliance',
        'Integrated electrical conduit & plumbing sleeves',
        'Full digital documentation & drone progress tracking'
      ]
    },
    {
      id: 'proj-4',
      title: 'Rajpur Commercial Complex Framework',
      category: 'commercial',
      categoryLabel: 'Commercial Infrastructure',
      location: 'Rajpur Road Commercial Corridor',
      area: '14,000 Sq.Ft',
      year: 'Under Construction',
      image: '/images/image_10.jpeg',
      description: 'Multi-level mixed-use commercial plaza featuring heavy structural brick masonry, reinforced concrete floor plates, dedicated customer parking frontage, and MDDA sanctioned commercial floor height.',
      highlights: [
        'High load-bearing capacity commercial foundation',
        'Wide column-free interior retail showroom spans',
        'Heavy vehicular parking and reinforced ramp access',
        'Strict fire escape and commercial NOC compliance'
      ]
    },
    {
      id: 'proj-5',
      title: 'Bespoke Modern Culinary Studio',
      category: 'interior',
      categoryLabel: 'Modular Interior',
      location: 'Chander Nagar Estate, Dehradun',
      area: '420 Sq.Ft Kitchen',
      year: 'Completed 2025',
      image: '/images/image_11.jpeg',
      description: 'Ultra-luxury German-engineered modular kitchen featuring fluted reeded glass upper display cabinets with warm 3000K LED illumination, honed Italian marble backsplash, matte finish soft-close drawers, and integrated gas hob.',
      highlights: [
        'Hafele soft-close tandem drawer mechanisms',
        'Full heat-resistant and stain-proof countertop',
        'Concealed ducted exhaust ventilation system',
        'Under-cabinet ambient architectural lighting'
      ]
    },
    {
      id: 'proj-6',
      title: 'Dark Slate Master Bathroom Suite',
      category: 'interior',
      categoryLabel: 'Luxury Bathroom',
      location: 'Hathibarkala Residence, Dehradun',
      area: '180 Sq.Ft',
      year: 'Completed 2025',
      image: '/images/image_06.jpeg',
      description: 'Spa-inspired luxury bathroom clad in large-format dark slate porcelain marble tiles. Features a wall-hung rimless toilet, custom marble vanity with undermount basin, circular backlit vanity mirror, and multi-jet stainless rainfall shower tower.',
      highlights: [
        'Dr. Fixit 2-coat tanking waterproofing system',
        'Concealed thermostatic diverter & pressure pump lines',
        'Anti-skid textured natural stone floor tiles',
        'Warm backlit LED vanity mirror and towel warmer'
      ]
    },
    {
      id: 'proj-7',
      title: 'Himalayan Ridge Master Attic Suite',
      category: 'residential',
      categoryLabel: 'Hillside Cottage Suite',
      location: 'Mussoorie Hilltop',
      area: '650 Sq.Ft Suite',
      year: 'Completed 2024',
      image: '/images/image_05.jpeg',
      description: 'Warm timber-lined penthouse bedroom suite featuring an angled high-pitched wood ceiling, panoramic floor-to-apex glass gable window framing Himalayan views, polished wood flooring, and bespoke wrought-iron bedstead.',
      highlights: [
        'Thermal insulation roof sandwich panels for hill winters',
        'Acoustic double-glazed panoramic gable glazing',
        'Natural seasoned pinewood paneling with fire retardant coat',
        'Private adjoining viewing deck and reading nook'
      ]
    },
    {
      id: 'proj-8',
      title: 'Grand Classical Living Salon',
      category: 'interior',
      categoryLabel: 'Classical Interior',
      location: 'Vasant Vihar, Dehradun',
      area: '1,200 Sq.Ft Salon',
      year: 'Finishing Phase 2026',
      image: '/images/image_01.jpeg',
      description: 'Sophisticated neoclassical living hall with custom handcrafted wainscoting paneling, Italian damask patterned wall coverings, coffered ceiling moldings, crystal chandeliers, and polished imported marble flooring.',
      highlights: [
        'Custom CNC millwork wall framing with teak accents',
        'Multi-tiered architectural ceiling light coves',
        'Acoustically treated wall substructure',
        'Concealed VRV air conditioning ducts'
      ]
    },
    {
      id: 'proj-9',
      title: 'The Spiral Sovereign Marble Staircase',
      category: 'structural',
      categoryLabel: 'Architectural Stairway',
      location: 'Rajpur Road Villa',
      area: '3 Levels',
      year: 'Completed 2025',
      image: '/images/image_02.jpeg',
      description: 'Cantilevered sweeping architectural staircase clad in pure white marble treads with custom hand-forged wrought iron balustrades and brass cap rail ascending gracefully across three stories.',
      highlights: [
        'Heavy cantilevered reinforced concrete step cores',
        'Seamless single-slab marble tread installation',
        'Custom cast-iron ornamental scrolls and balusters',
        'Concealed step riser LED profile illumination'
      ]
    },
    {
      id: 'proj-10',
      title: 'Scenic Mountain Terrace & Deck',
      category: 'residential',
      categoryLabel: 'Scenic Hill Terrace',
      location: 'Mussoorie Overlook, Uttarakhand',
      area: '900 Sq.Ft Deck',
      year: 'Completed 2024',
      image: '/images/image_09.jpeg',
      description: 'High-altitude cantilevered outdoor observation terrace engineered to withstand hill winds and monsoon downpours. Features seamless waterproof coating, safety balustrades, and unobstructed views of the Shivalik range.',
      highlights: [
        'Heavy-duty bituminous waterproofing membrane',
        'Engineered slope drainage and rainwater harvesting lines',
        'Weather-proof outdoor synthetic wicker furnishings',
        'Panoramic 180-degree hill valley viewpoint'
      ]
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-white relative">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-widest mb-4">
            <Building2 className="w-3.5 h-3.5 text-[#5C3D2B]" />
            Delivered Masterpieces
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] mb-4">
            FEATURED <span className="text-olive-gradient">PORTFOLIO & SITES</span>
          </h2>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-600">
            Real photographic evidence of our live construction sites, finished luxury residences, commercial frameworks, and interior fitouts across Dehradun and Uttarakhand.
          </p>
        </div>

        {/* Category Tabs (Olive & Brown) */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'residential', label: 'Luxury Villas & Residences' },
            { id: 'commercial', label: 'Commercial Infrastructure' },
            { id: 'interior', label: 'Interiors & Modular' },
            { id: 'structural', label: 'RCC & Civil Works' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#2D3E28] text-white shadow-md border border-[#405737]'
                  : 'bg-[#FAF8F5] text-neutral-700 hover:text-[#2D3E28] border border-[#E6DFD5] hover:border-[#5C3D2B]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-olive-brown overflow-hidden flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141C12]/85 via-[#141C12]/20 to-transparent" />
                
                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#141C12]/90 backdrop-blur-md text-[#D5BAA6] border border-[#405737]/60">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/95 text-[#2D3E28]">
                    {project.year}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#D5BAA6]" />
                    {project.location.split(',')[0]}
                  </span>
                  <span className="font-bold text-[#E6ECE2]">
                    {project.area}
                  </span>
                </div>

                {/* Quick View Hover Button */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF8F5] text-[#2D3E28] text-xs font-bold uppercase tracking-wider shadow-lg">
                    <Eye className="w-4 h-4 text-[#5C3D2B]" />
                    Inspect Details
                  </span>
                </div>
              </div>

              {/* Title & Short Description */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-[#1C1917] mb-2 group-hover:text-[#3D5337] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#FAF8F5] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#3D5337] group-hover:text-[#5C3D2B] transition-colors">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Lightbox / Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in-up">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FAF8F5] border border-[#D5BAA6] rounded-2xl shadow-2xl p-6 sm:p-8">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#E6ECE2] hover:bg-[#CFDCC8] text-[#2D3E28] transition-colors z-10"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Big Image */}
                <div className="rounded-xl overflow-hidden border border-[#D5BAA6] relative">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-[380px] object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#141C12]/90 px-3 py-1 rounded-full text-xs font-bold text-[#D5BAA6]">
                    {activeProject.categoryLabel}
                  </div>
                </div>

                {/* Project Specs */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#5C3D2B] font-bold">
                      {activeProject.year}
                    </span>
                    <h3 className="font-cinzel text-2xl font-bold text-[#1C1917] mb-2">
                      {activeProject.title}
                    </h3>
                    <p className="text-xs text-neutral-600 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#3D5337]" />
                      {activeProject.location}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {activeProject.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#E6DFD5] text-xs">
                    <div>
                      <span className="text-neutral-500 block">Total Built-Up Area:</span>
                      <strong className="text-[#1C1917]">{activeProject.area}</strong>
                    </div>
                    <div>
                      <span className="text-neutral-500 block">Structural Warranty:</span>
                      <strong className="text-[#3D5337]">10-Year Guarantee</strong>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#31432B]">
                      Engineering Scope & Highlights:
                    </div>
                    {activeProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#537048] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button
                      onClick={() => {
                        const title = activeProject.title;
                        setActiveProject(null);
                        onOpenConsultation?.(`Project: ${title}`);
                      }}
                      className="btn-olive-sleek text-xs px-6 py-3 flex-1 text-center"
                    >
                      Enquire for Similar Project
                    </button>
                    <button
                      onClick={() => setActiveProject(null)}
                      className="btn-brown-outline text-xs px-5 py-3"
                    >
                      Close
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}