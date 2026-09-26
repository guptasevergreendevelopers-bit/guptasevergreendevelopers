import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Ruler, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  HardHat, 
  ChevronRight, 
  Phone, 
  MessageSquare, 
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  Award,
  Lock,
  Camera,
  Check
} from 'lucide-react';
import { getProjectBySlug, projects } from '../data/projects';
import { usePageSEO } from '../hooks/usePageSEO';

interface ProjectDetailPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export default function ProjectDetailPage({ onOpenConsultation }: ProjectDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  usePageSEO({
    title: project.seoTitle,
    description: project.metaDescription,
    canonicalPath: `/projects/${project.slug}`,
  });

  const whatsappUrl = `https://wa.me/919548393798?text=${encodeURIComponent(
    `Hello Gupta's Evergreen Developers, I was reviewing your case study on "${project.name}" in ${project.location} and would like to discuss my project in Dehradun.`
  )}`;

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  // Status Styling & Evidence Badging
  const isCompleted = project.status === 'completed';
  const isOngoing = project.status === 'ongoing';
  const isProposed = project.status === 'proposed';
  const isConceptual = project.status === 'conceptual';

  const statusBadgeClass = isCompleted 
    ? 'bg-[#31432B]/15 text-[#31432B] border-[#31432B]/30'
    : isOngoing
    ? 'bg-[#5C3D2B]/15 text-[#5C3D2B] border-[#5C3D2B]/30'
    : isProposed
    ? 'bg-amber-900/15 text-amber-900 border-amber-900/30'
    : 'bg-neutral-800/10 text-neutral-700 border-neutral-300';

  const evidenceBadgeClass = project.isRender
    ? 'bg-amber-100 text-amber-900 border-amber-300'
    : 'bg-[#2E3F27] text-[#D5BAA6] border-[#537048]/50';

  // Structured Data Schema
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: project.name,
    description: project.description,
    url: `https://www.guptasevergreendevelopers.com/projects/${project.slug}`,
    publisher: {
      '@type': 'Organization',
      name: "Gupta's Evergreen Developers LLP",
      url: 'https://www.guptasevergreendevelopers.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.guptasevergreendevelopers.com/images/drive_logo_full.png',
      },
    },
    mainEntity: {
      '@type': 'Place',
      name: project.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: project.location,
        addressLocality: 'Dehradun',
        addressRegion: 'Uttarakhand',
        addressCountry: 'IN',
      },
      image: `https://www.guptasevergreendevelopers.com${project.images[0]?.url || '/images/image_03.jpeg'}`,
      description: project.description,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.guptasevergreendevelopers.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects Portfolio',
        item: 'https://www.guptasevergreendevelopers.com/projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.name,
        item: `https://www.guptasevergreendevelopers.com/projects/${project.slug}`,
      },
    ],
  };

  return (
    <div className="bg-[#FAF8F5] text-neutral-900 min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Top Breadcrumb Bar */}
      <div className="bg-[#121A10] border-b border-[#31432B]/50 py-2 text-xs text-neutral-400">
        <div className="container-custom flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600 flex-shrink-0" />
          <Link to="/projects" className="hover:text-white transition-colors">Projects Evidence Hub</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600 flex-shrink-0" />
          <span className="text-[#D5BAA6] truncate max-w-xs sm:max-w-md">{project.name}</span>
        </div>
      </div>

      {/* Project Hero Header */}
      <header className="py-6 sm:py-12 bg-white border-b border-[#E6DFD5]">
        <div className="container-custom max-w-4xl space-y-6">
          
          {/* Top Status & Verification Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${statusBadgeClass}`}>
              Status: {project.status.toUpperCase()}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border flex items-center gap-1.5 ${evidenceBadgeClass}`}>
              <Camera className="w-3.5 h-3.5" />
              {project.visualLabel}
            </span>
            <span className="text-xs text-neutral-400">•</span>
            <span className="text-xs text-neutral-500 font-medium">{project.year}</span>
          </div>

          <h1 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] leading-tight">
            {project.name}
          </h1>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-neutral-600">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#31432B]" />
              <strong>Location:</strong> {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Ruler className="w-4 h-4 text-[#5C3D2B]" />
              <strong>Built-Up Area:</strong> {project.builtUpArea}
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#31432B]" />
              <strong>Classification:</strong> {project.categoryLabel}
            </span>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal pt-2">
            {project.description}
          </p>

          {/* Client Confidentiality & Verification Strip */}
          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] flex items-start gap-3 text-xs text-neutral-600">
            <Lock className="w-4 h-4 text-[#5C3D2B] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1C1917]">Confidentiality &amp; Publishing Disclosure:</strong>{' '}
              {project.confidentialityNote}
            </div>
          </div>

        </div>
      </header>

      {/* Main Evidence Content */}
      <div className="py-12 sm:py-16">
        <div className="container-custom max-w-4xl space-y-12">

          {/* Featured Visual Evidence (Explicitly Labeled) */}
          <div className="space-y-3">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#D5BAA6]/70 bg-[#162114]">
              <img
                src={project.images[0]?.url}
                alt={project.images[0]?.caption || project.name}
                className="w-full h-auto max-h-[520px] object-cover"
                loading="eager"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow ${
                  project.isRender ? 'bg-amber-900/90 text-amber-100' : 'bg-[#141C12]/90 text-[#D5BAA6]'
                }`}>
                  {project.visualLabel}
                </span>
                <span className="px-3 py-0.5 rounded-full text-[11px] font-semibold bg-white/95 text-[#2D3E28] shadow">
                  Built-Up: {project.builtUpArea}
                </span>
              </div>
            </div>
            <div className="text-xs text-neutral-500 italic text-center px-4">
              Photo: {project.images[0]?.caption}
            </div>
          </div>

          {/* Engineering Scope Highlights */}
          <div className="card-olive-brown p-6 sm:p-8 bg-[#FAF8F5] border border-[#D5BAA6] rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[#31432B] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#5C3D2B]" />
              Engineering Scope &amp; Technical Highlights
            </div>
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#31432B] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Technical Discipline Breakdown */}
          <div className="space-y-8">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917] border-b border-[#E6DFD5] pb-3">
              Comprehensive Engineering &amp; Architectural Dossier
            </h2>

            {/* 1. Overall Scope */}
            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5C3D2B]">
                <Layers className="w-4 h-4" />
                Overall Project Scope
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {project.scopeOfWork}
              </p>
            </div>

            {/* 2. Architectural Scope */}
            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#31432B]">
                <Building2 className="w-4 h-4" />
                Architectural &amp; Planning Scope
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {project.architecturalScope}
              </p>
            </div>

            {/* 3. Structural & Seismic Scope */}
            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#31432B]">
                <ShieldCheck className="w-4 h-4" />
                Structural Engineering &amp; Seismic Zone IV Compliance
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {project.structuralScope}
              </p>
            </div>

            {/* 4. Turnkey Interior Scope */}
            <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5C3D2B]">
                <Sparkles className="w-4 h-4" />
                Interior Architecture &amp; Finishes Scope
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {project.interiorScope}
              </p>
            </div>

            {/* 5. Construction Methods Grid */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#D5BAA6] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#31432B]">
                <HardHat className="w-4 h-4 text-[#5C3D2B]" />
                Civil Construction Methodology &amp; Quality Control
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-800">
                {project.constructionMethods.map((method, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#5C3D2B] flex-shrink-0 mt-0.5" />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. Material Specifications */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#D5BAA6] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#31432B]">
                <Award className="w-4 h-4 text-[#5C3D2B]" />
                Specified Materials &amp; Primary Brands
              </div>
              <div className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-800">
                {project.materialsSpecifications.map((mat, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-[#E6DFD5]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#31432B] flex-shrink-0 mt-0.5" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Handover & Completion Information */}
            <div className="p-6 rounded-2xl bg-[#141C12] text-white border border-[#31432B]/60 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D5BAA6]">
                <ShieldCheck className="w-4 h-4 text-[#A87B5C]" />
                Completion, Warranties &amp; Handover Status
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.completionInfo}
              </p>
            </div>

          </div>

          {/* Action Conversion Card */}
          <div className="card-olive-brown p-8 sm:p-10 bg-white border-2 border-[#D5BAA6] rounded-2xl shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E6DFD5]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#31432B] bg-[#31432B]/10 px-3 py-1 rounded-full">
                  Direct Builder Inspection
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917] mt-2">
                  Planning a Similar Project in Dehradun or Mussoorie?
                </h3>
                <p className="text-xs text-neutral-600 mt-1">
                  Connect with designated partner Sunil Kumar Gupta or schedule an in-person site walk of our active projects.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="tel:+919548393798"
                  className="px-4 py-2.5 rounded-xl bg-[#31432B] hover:bg-[#253320] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Founder
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5]">
                <div className="font-bold text-[#1C1917] mb-1">On-Site Soil &amp; Plot Check</div>
                <div className="text-neutral-600">Complimentary 24-hour physical evaluation of slope, approach road, and MDDA setbacks.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5]">
                <div className="font-bold text-[#1C1917] mb-1">Transparent Itemized BOQ</div>
                <div className="text-neutral-600">Zero escalation price lock with exact brand specifications and stage-wise billing.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5]">
                <div className="font-bold text-[#1C1917] mb-1">Live Construction Tours</div>
                <div className="text-neutral-600">Visit our ongoing sites to inspect rebar density, shuttering, and M25 batching firsthand.</div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs">
              <Link
                to="/projects"
                className="font-bold text-[#31432B] hover:text-[#5C3D2B] flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Projects
              </Link>
              <button
                type="button"
                onClick={() => onOpenConsultation(`Inquiry for project similar to ${project.name}`)}
                className="px-6 py-2.5 rounded-xl bg-[#5C3D2B] hover:bg-[#724C35] text-white font-bold transition-colors shadow"
              >
                Book In-Person Site Visit
              </button>
            </div>
          </div>

          {/* Related Projects Evidence */}
          <div className="pt-8 border-t border-[#E6DFD5] space-y-6">
            <h3 className="font-cinzel text-xl font-bold text-[#1C1917]">
              Other Verified Projects in Uttarakhand
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/projects/${rel.slug}`}
                  className="card-olive-brown p-5 bg-white flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#31432B] uppercase tracking-wider">
                        {rel.categoryLabel}
                      </span>
                      <span className="text-[10px] font-semibold text-neutral-500">
                        {rel.status}
                      </span>
                    </div>
                    <h4 className="font-cinzel text-sm font-bold text-[#1C1917] group-hover:text-[#31432B] transition-colors line-clamp-2">
                      {rel.name}
                    </h4>
                    <p className="text-[11px] text-neutral-600 line-clamp-2">
                      {rel.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#E6DFD5] flex items-center justify-between text-[11px] font-bold text-[#5C3D2B]">
                    <span>{rel.builtUpArea}</span>
                    <span className="group-hover:translate-x-1 transition-transform">Inspect →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
