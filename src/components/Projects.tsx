import { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Ruler, 
  Eye, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HardHat,
  Camera,
  Lock,
  Filter,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, Project } from '../data/projects';

interface ProjectsProps {
  onOpenConsultation?: (projectTitle?: string) => void;
}

export default function Projects({ onOpenConsultation }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeStatus, setActiveStatus] = useState<string>('all');

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.projectType === activeCategory;
    const matchesStatus = activeStatus === 'all' || p.status === activeStatus;
    return matchesCategory && matchesStatus;
  });

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-[#31432B]/15 text-[#31432B] border-[#31432B]/30';
      case 'ongoing':
        return 'bg-[#5C3D2B]/15 text-[#5C3D2B] border-[#5C3D2B]/30';
      case 'proposed':
        return 'bg-amber-900/15 text-amber-900 border-amber-900/30';
      case 'conceptual':
        return 'bg-neutral-800/10 text-neutral-700 border-neutral-300';
      default:
        return 'bg-[#31432B]/15 text-[#31432B] border-[#31432B]/30';
    }
  };

  return (
    <section id="projects" className="section-padding bg-white relative">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#31432B]/10 border border-[#31432B]/20 text-[#31432B] text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#5C3D2B]" />
            Verifiable Construction Evidence
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] mb-4">
            PORTFOLIO &amp; <span className="text-olive-gradient">ON-SITE EVIDENCE</span>
          </h2>
          <div className="olive-brown-divider" />
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Real photographic records of completed residences, active anti-seismic RCC civil sites, commercial frameworks, and luxury interiors across Dehradun, Mussoorie, and the Garhwal foothills.
          </p>
        </div>

        {/* Client Confidentiality & Publishing Rules Notice */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-between gap-4 text-xs text-neutral-600">
          <div className="flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-[#5C3D2B] flex-shrink-0" />
            <span>
              <strong>Authenticity &amp; Privacy Rule:</strong> We only publish real authorized projects with confirmed site evidence. Confidential homeowner identities are shielded under NDA. Renders are strictly labeled and never presented as completed construction.
            </span>
          </div>
        </div>

        {/* Filtering Controls */}
        <div className="space-y-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'residential', label: 'Luxury Villas & Residences' },
              { id: 'commercial', label: 'Commercial Plazas' },
              { id: 'structural', label: 'RCC & Civil Works' },
              { id: 'interior', label: 'Interiors & Kitchens' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#2D3E28] text-white shadow-md border border-[#405737]'
                    : 'bg-[#FAF8F5] text-neutral-700 hover:text-[#2D3E28] border border-[#E6DFD5] hover:border-[#5C3D2B]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Status Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="text-xs text-neutral-400 font-medium mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Status:
            </span>
            {[
              { id: 'all', label: 'All Statuses' },
              { id: 'completed', label: 'Completed (Verified Handover)' },
              { id: 'ongoing', label: 'Ongoing (Live Site Work)' },
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setActiveStatus(st.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-colors border ${
                  activeStatus === st.id
                    ? 'bg-[#5C3D2B] text-white border-[#5C3D2B]'
                    : 'bg-white text-neutral-600 border-[#E6DFD5] hover:border-[#5C3D2B]'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const primaryImg = project.images[0]?.url || '/images/image_03.jpeg';
            return (
              <div
                key={project.id}
                className="card-olive-brown overflow-hidden flex flex-col justify-between group bg-white rounded-2xl border border-[#E6DFD5] hover:border-[#3D5337] transition-all shadow-sm"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#141C12]">
                  <img
                    src={primaryImg}
                    alt={project.images[0]?.caption || project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141C12]/90 via-[#141C12]/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#141C12]/90 backdrop-blur-md text-[#D5BAA6] border border-[#405737]/60">
                      {project.categoryLabel}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-sm ${getStatusBadge(project.status)}`}>
                      {project.status.toUpperCase()}
                    </span>
                  </div>

                  {/* Evidence Type Badge */}
                  <div className="absolute bottom-10 left-4">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/95 text-[#2D3E28] shadow">
                      <Camera className="w-3 h-3 text-[#5C3D2B]" />
                      {project.visualLabel}
                    </span>
                  </div>

                  {/* Bottom Overlay Location & Area */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1 font-medium truncate max-w-[65%]">
                      <MapPin className="w-3.5 h-3.5 text-[#D5BAA6] flex-shrink-0" />
                      <span className="truncate">{project.location.split(',')[0]}</span>
                    </span>
                    <span className="font-bold text-[#E6ECE2]">
                      {project.builtUpArea}
                    </span>
                  </div>

                  {/* Hover Quick Link Overlay */}
                  <Link 
                    to={`/projects/${project.slug}`}
                    className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    aria-label={`Inspect case study for ${project.name}`}
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF8F5] text-[#2D3E28] text-xs font-bold uppercase tracking-wider shadow-lg">
                      <Eye className="w-4 h-4 text-[#5C3D2B]" />
                      Inspect Technical Case Study
                    </span>
                  </Link>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <Link to={`/projects/${project.slug}`} className="block">
                      <h3 className="font-cinzel text-lg font-bold text-[#1C1917] mb-2 group-hover:text-[#3D5337] transition-colors leading-snug">
                        {project.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Quick Feature Points */}
                  <div className="space-y-1.5 pt-2 border-t border-[#FAF8F5]">
                    {project.highlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1.5 text-[11px] text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#31432B] flex-shrink-0 mt-0.5" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Link */}
                  <div className="pt-3 border-t border-[#E6DFD5] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#3D5337]">
                    <Link 
                      to={`/projects/${project.slug}`} 
                      className="flex items-center gap-1.5 hover:text-[#5C3D2B] transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[10px] text-neutral-400 font-semibold">{project.year}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Inspection Tour CTA */}
        <section className="py-16 bg-white border-t border-[#E6DFD5] mt-20">
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#182316] text-white p-8 sm:p-12 text-center space-y-5 shadow-2xl border border-[#31432B]/60">
            <div className="w-14 h-14 rounded-2xl bg-[#2E3F27] border border-[#537048]/40 flex items-center justify-center text-[#D5BAA6] mx-auto">
              <HardHat className="w-7 h-7" />
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">
              Want to Inspect Our Active Construction Sites in Person?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              We invite prospective residential plot owners and commercial builders in Dehradun to visit our active sites. Verify our rebar binding density, shuttering precision, M25 concrete casting, and brickwork quality firsthand.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onOpenConsultation?.('In-Person Site Inspection Tour')}
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
    </section>
  );
}
