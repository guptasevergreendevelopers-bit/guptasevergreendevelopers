export interface ProjectImage {
  url: string;
  caption: string;
  isRender: boolean;
}

export interface BeforeAfterImage {
  before: string;
  after: string;
  beforeCaption: string;
  afterCaption: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  projectType: 'residential' | 'commercial' | 'interior' | 'structural';
  categoryLabel: string;
  year: string;
  status: 'completed' | 'ongoing' | 'proposed' | 'conceptual';
  visualType: 'completed_photo' | 'live_site_photo' | 'architectural_render' | 'conceptual_render';
  visualLabel: string;
  isRender: boolean;
  builtUpArea: string;
  scopeOfWork: string;
  architecturalScope: string;
  structuralScope: string;
  interiorScope: string;
  constructionMethods: string[];
  materialsSpecifications: string[];
  description: string;
  highlights: string[];
  images: ProjectImage[];
  beforeAfterImages?: BeforeAfterImage[];
  completionInfo: string;
  clientType: 'private' | 'commercial' | 'institutional';
  confidentialityNote: string;
  seoTitle: string;
  metaDescription: string;
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'summit-villa-rajpur-road',
    name: 'The Summit Villa — Rajpur Road',
    location: '108 Rajpur Road, Hathibarkala, Dehradun, Uttarakhand',
    projectType: 'residential',
    categoryLabel: 'Luxury Villa',
    year: '2025',
    status: 'completed',
    visualType: 'completed_photo',
    visualLabel: 'Verified Completed Construction Photograph',
    isRender: false,
    builtUpArea: '6,800 Sq.Ft',
    scopeOfWork: 'Turnkey architectural planning, anti-seismic RCC frame civil construction, bespoke natural stone cladding, and full interior execution.',
    architecturalScope: 'Three-level bespoke contemporary villa featuring natural stone cladding, dark architectural fins, cantilevered balconies with laminated glass railings, landscaped terrace roof garden, and perimeter security lighting.',
    structuralScope: 'Seismic Zone IV compliant ductile framed RCC structure (IS 13920 & IS 456), Tata Tiscon Fe550D TMT rebar reinforcement, M25 grade machine-batched concrete, and raft-cum-isolated footing foundation engineered for Doon Valley alluvial soil.',
    interiorScope: 'Italian Statuario marble living areas, concealed ducted VRV HVAC routing, acoustic double-glazed UPVC casement windows (Saint-Gobain glass), bespoke teak veneer doors, and home automation lighting circuits.',
    constructionMethods: [
      'Monolithic M25 Machine-Batched Concrete Pour',
      'Strict 7 & 28-day Laboratory Cube Compression Testing',
      'Ductile Detailing with Continuous Rebar Stirrups',
      '2-Coat Polymer-Modified Cementitious Waterproofing on Terraces'
    ],
    materialsSpecifications: [
      'Tata Tiscon Fe550D High-Yield Rebar',
      'UltraTech 43-Grade Portland Pozzolana Cement (PPC)',
      'Dholpur Natural Sandstone Exterior Accent Cladding',
      'Saint-Gobain Acoustic Double-Glazed Argon-Filled Glass',
      'Dr. Fixit Fastflex Structural Waterproofing'
    ],
    description: 'An iconic three-level bespoke contemporary villa featuring natural stone cladding, dark architectural fins, expansive cantilevered balconies with glass railings, landscaped terrace roof garden, and integrated perimeter security lighting.',
    highlights: [
      'Turnkey architectural design & civil construction',
      'Seismic Zone IV ductile detailing with Fe550 steel',
      'Soundproof double-glazed UPVC thermal windows',
      'Complete smart home automation & landscape lighting'
    ],
    images: [
      {
        url: '/images/image_03.jpeg',
        caption: 'Completed exterior elevation of The Summit Villa on Rajpur Road, Dehradun showing stone cladding and cantilevered balconies.',
        isRender: false
      }
    ],
    completionInfo: 'Completed December 2025; formally handed over to the homeowner with zero defects, MDDA completion certificate documentation, and 5-year comprehensive civil & 10-year structural stability warranty certificates.',
    clientType: 'private',
    confidentialityNote: 'Client personal name and exact plot number withheld in adherence to client privacy guidelines. Architectural layout, technical specifications, and site photographs published with permission.',
    seoTitle: "The Summit Villa Rajpur Road | Dehradun Project",
    metaDescription: "Case study of The Summit Villa on Rajpur Road, Dehradun. 6,800 sq.ft luxury 3-level villa completed in 2025 by Gupta's Evergreen Developers LLP with Seismic Zone IV RCC framing."
  },
  {
    id: 'proj-2',
    slug: 'greenwood-horizon-duplex',
    name: 'Greenwood Horizon Duplex',
    location: 'Mussoorie Foothills Corridor, Dehradun, Uttarakhand',
    projectType: 'residential',
    categoryLabel: 'Contemporary Residence',
    year: '2024',
    status: 'completed',
    visualType: 'completed_photo',
    visualLabel: 'Verified Completed Construction Photograph',
    isRender: false,
    builtUpArea: '4,500 Sq.Ft',
    scopeOfWork: 'Turnkey civil construction, Vastu-compliant architectural planning, bespoke timber ceiling soffits, and thermal hill-climate facade execution.',
    architecturalScope: 'Two-level modern hill residence oriented along natural sunrise contours, vertical privacy solar louvers, rich wooden ceiling soffits with recessed warm lighting, private gated motor court, and indoor-outdoor courtyard integration.',
    structuralScope: 'Composite reinforced concrete framing designed for foothill gradient slope loads, anti-seismic ductile shear tie columns, and moisture-barrier foundation perimeter drains.',
    interiorScope: 'Natural hardwood floor finishes, open-plan island kitchen integration, custom wardrobe millwork, and multi-zone heating conduits.',
    constructionMethods: [
      'Contour-Aligned RCC Footing and Retaining Wall Integration',
      'Machine-Mix Vibrated Concrete Compaction',
      'Thermal Barrier Polyurethane Exterior Wall Coating',
      'Vastu-Compliant Orientation & Sunlight Optimization'
    ],
    materialsSpecifications: [
      'Jindal Panther Fe550D Rebar',
      'ACC Concrete+ Cement',
      'Seasoned Teakwood Ceilings & Soffits',
      'Asian Paints Apex Ultima Protek All-Weather Exterior Emulsion'
    ],
    description: 'A striking contemporary home characterized by crisp horizontal volumes, vertical privacy louvers, rich wooden ceiling soffits with recessed warm lighting, and private gated motor court.',
    highlights: [
      'Custom 2-story steel and concrete structural frame',
      'Vastu-compliant east-facing architectural layout',
      'High-grade Asian Paints Apex Ultima exterior finish',
      'Seamless indoor-outdoor courtyard integration'
    ],
    images: [
      {
        url: '/images/image_07.jpeg',
        caption: 'Completed contemporary facade of Greenwood Horizon Duplex in Mussoorie Foothills showing wooden soffits and privacy louvers.',
        isRender: false
      }
    ],
    completionInfo: 'Delivered October 2024; accompanied by complete structural stability documentation and 5-year project warranty.',
    clientType: 'private',
    confidentialityNote: 'Homeowner identity confidential under residential contracting terms. Engineering specifications and exterior photographs authorized for publication.',
    seoTitle: "Greenwood Horizon Duplex | Mussoorie Foothills",
    metaDescription: "Case study of Greenwood Horizon Duplex in the Mussoorie Foothills, Dehradun. 4,500 sq.ft contemporary home built with anti-seismic RCC frame by Gupta's Evergreen Developers LLP."
  },
  {
    id: 'proj-3',
    slug: 'active-rcc-slab-anti-seismic-casting',
    name: 'Active RCC Slab & Anti-Seismic Casting',
    location: 'Sahastradhara Valley, Dehradun, Uttarakhand',
    projectType: 'structural',
    categoryLabel: 'RCC Civil Engineering',
    year: '2026',
    status: 'ongoing',
    visualType: 'live_site_photo',
    visualLabel: 'Live Active Site Photography (Real Civil Evidence)',
    isRender: false,
    builtUpArea: '8,200 Sq.Ft Slab Plate',
    scopeOfWork: 'Heavy reinforced concrete slab casting, high-yield rebar grid binding, and civil foundation execution under direct engineer supervision.',
    architecturalScope: 'Structural phase execution on ground — full architectural working drawings and MDDA sanctioned structural layout being cast and detailed.',
    structuralScope: 'Dual-layer Fe550 TMT rebar grid with engineered cranked bars, beam-column junction ductile shear stirrups (IS 13920), heavy ring ties, and monolithic concrete casting over water-tight shuttering.',
    interiorScope: 'Embedded heavy-gauge PVC electrical conduit routing, sanitary drainage pipe sleeves, and HVAC drop-ceiling anchors placed before concrete pour.',
    constructionMethods: [
      'Transit-Mix M25 Ready-Mix Concrete with Superplasticizer',
      'High-Frequency Needle Vibrator Compaction',
      'Continuous 14-Day Water Ponding Curing Process',
      'Drone-Assisted Progress and Rebar Grid Alignment Verification'
    ],
    materialsSpecifications: [
      'Tata Tiscon Fe550D Super Ductile TMT Rebar',
      'UltraTech RMC M25 Grade Concrete',
      'Poling Board & Film-Faced Marine Plywood Formwork',
      'Supreme Heavy-Duty Electrical Conduits'
    ],
    description: 'On-site structural reinforcement binding and heavy concrete casting under direct engineering supervision. Features high-yield Fe550 TMT rebar grid, heavy beam-column nodes, and anti-settlement deep foundation.',
    highlights: [
      'High-grade M25 machine-batched concrete pour',
      'Strict cube compression test quality compliance',
      'Integrated electrical conduit & plumbing sleeves',
      'Full digital documentation & drone progress tracking'
    ],
    images: [
      {
        url: '/images/image_08.jpeg',
        caption: 'Live construction site photograph of active 8,200 sq.ft RCC slab rebar binding and concrete casting in Sahastradhara Valley, Dehradun.',
        isRender: false
      }
    ],
    completionInfo: 'Active construction phase in progress (2026); foundation, structural columns, and ground-floor slab completed. Structural compression test logs signed off.',
    clientType: 'private',
    confidentialityNote: 'Active construction project. Client details confidential during execution. Site photography verified by on-site project engineer.',
    seoTitle: "Active RCC Slab Casting | Sahastradhara Dehradun",
    metaDescription: "Live civil engineering evidence: 8,200 sq.ft anti-seismic RCC slab casting in Sahastradhara Valley, Dehradun by Gupta's Evergreen Developers LLP. M25 concrete & Fe550 rebar grid."
  },
  {
    id: 'proj-4',
    slug: 'rajpur-commercial-complex-framework',
    name: 'Rajpur Commercial Complex Framework',
    location: 'Rajpur Road Commercial Corridor, Dehradun, Uttarakhand',
    projectType: 'commercial',
    categoryLabel: 'Commercial Infrastructure',
    year: '2026',
    status: 'ongoing',
    visualType: 'live_site_photo',
    visualLabel: 'Live Active Site Photography (Structural Frame)',
    isRender: false,
    builtUpArea: '14,000 Sq.Ft',
    scopeOfWork: 'Multi-level commercial retail and office complex structure with column-free showroom bays, high-strength clay brick masonry, and basement parking.',
    architecturalScope: 'Commercial plaza facade with 14-foot ground-floor clearance, wide frontage display glazing bays, dedicated pedestrian ramps, and MDDA compliant setback allowances.',
    structuralScope: 'Heavy-load commercial RCC frame with earthquake-resistant moment frames, high-capacity fire exit stairwells, and vehicular basement access ramps.',
    interiorScope: 'Core & shell commercial fitout provision with centralized electrical distribution shafts and commercial drainage stacks.',
    constructionMethods: [
      'Heavy-Duty Reinforced Concrete Column Grids with 8m Clear Spans',
      'First-Class Red Clay Brick Infill Masonry with 1:4 Cement Mortar',
      'Underground Stormwater Drainage and Sump Tank Casting'
    ],
    materialsSpecifications: [
      'Primary Mill Fe550 TMT Steel',
      'ACC Suraksha Anti-Erosion Cement',
      'Machine-Molded Clay Bricks (105 kg/cm² Compressive Strength)',
      'Fosroc Conbextra Non-Shrink Grouting'
    ],
    description: 'Multi-level mixed-use commercial plaza featuring heavy structural brick masonry, reinforced concrete floor plates, dedicated customer parking frontage, and MDDA sanctioned commercial floor height.',
    highlights: [
      'High load-bearing capacity commercial foundation',
      'Wide column-free interior retail showroom spans',
      'Heavy vehicular parking and reinforced ramp access',
      'Strict fire escape and commercial NOC compliance'
    ],
    images: [
      {
        url: '/images/image_10.jpeg',
        caption: 'Live construction site photo of multi-level commercial complex framework on Rajpur Road showing heavy brick masonry and RCC columns.',
        isRender: false
      }
    ],
    completionInfo: 'Civil super-structure 75% complete (expected Q4 2026). Handover to commercial leaseholders upon fire NOC and lift installation sign-off.',
    clientType: 'commercial',
    confidentialityNote: 'Commercial developer entity confidential until retail tenant leasing launch. Framework and engineering photographs authorized.',
    seoTitle: "Rajpur Commercial Framework | Dehradun Project",
    metaDescription: "Construction case study of 14,000 sq.ft commercial plaza framework on Rajpur Road, Dehradun by Gupta's Evergreen Developers LLP. MDDA compliant commercial infrastructure."
  },
  {
    id: 'proj-5',
    slug: 'bespoke-modern-culinary-studio',
    name: 'Bespoke Modern Culinary Studio',
    location: 'Chander Nagar Estate, Dehradun, Uttarakhand',
    projectType: 'interior',
    categoryLabel: 'Modular Kitchen',
    year: '2025',
    status: 'completed',
    visualType: 'completed_photo',
    visualLabel: 'Verified Completed Interior Photograph',
    isRender: false,
    builtUpArea: '420 Sq.Ft Kitchen Suite',
    scopeOfWork: 'Bespoke turnkey modular kitchen engineering, Italian marble backsplash cladding, German hardware integration, and ducted ventilation.',
    architecturalScope: 'Ergonomic kitchen work-triangle design, fluted reeded glass display cabinets with concealed warm 3000K LED strip profiles, and quartz waterfall edge island.',
    structuralScope: 'Marine-grade IS 710 calibrated boiling waterproof (BWP) ply carcass construction with reinforced heavy-drawer load brackets.',
    interiorScope: 'Hafele soft-close tandem drawers, Blum Aventos lift-up overhead shutters, Faber silent ceiling exhaust hood, and anti-scratch acrylic laminate finish.',
    constructionMethods: [
      'Factory CNC High-Precision Cutting and 2mm Edge Banding',
      'Laser-Level On-Site Assembly and Alignment',
      'Under-Counter Concealed Electrical & Water Inlet Routing'
    ],
    materialsSpecifications: [
      'CenturyPly Club Prime 710 BWP Marine Plywood',
      'Honed Italian Botticino Marble Countertop & Backsplash',
      'Hafele Matrix Box Drawer Runner Systems',
      'Kaff 4-Burner Brass Toughened Glass Hob'
    ],
    description: 'Ultra-luxury German-engineered modular kitchen featuring fluted reeded glass upper display cabinets with warm 3000K LED illumination, honed Italian marble backsplash, matte finish soft-close drawers, and integrated gas hob.',
    highlights: [
      'Hafele soft-close tandem drawer mechanisms',
      'Full heat-resistant and stain-proof countertop',
      'Concealed ducted exhaust ventilation system',
      'Under-cabinet ambient architectural lighting'
    ],
    images: [
      {
        url: '/images/image_11.jpeg',
        caption: 'Completed modern culinary studio in Chander Nagar, Dehradun showing fluted glass cabinets, warm LED backlighting, and honed marble backsplash.',
        isRender: false
      }
    ],
    completionInfo: 'Completed and commissioned November 2025 with 10-year kitchen hardware and craftsmanship warranty.',
    clientType: 'private',
    confidentialityNote: 'Private home interior. Client identity protected. Cabinetry layouts and completed photography published with owner consent.',
    seoTitle: "Bespoke Modern Modular Kitchen Dehradun | Chander Nagar Project",
    metaDescription: "Case study: 420 sq.ft ultra-luxury modular kitchen in Chander Nagar, Dehradun executed by Gupta's Evergreen Developers LLP. German Hafele hardware & Italian marble."
  },
  {
    id: 'proj-6',
    slug: 'dark-slate-master-bathroom-suite',
    name: 'Dark Slate Master Bathroom Suite',
    location: 'Hathibarkala Residence, Dehradun, Uttarakhand',
    projectType: 'interior',
    categoryLabel: 'Luxury Bathroom',
    year: '2025',
    status: 'completed',
    visualType: 'completed_photo',
    visualLabel: 'Verified Completed Interior Photograph',
    isRender: false,
    builtUpArea: '180 Sq.Ft',
    scopeOfWork: 'Turnkey master bathroom renovation, full wet-area tanking waterproofing, large-format slate tile cladding, and high-pressure thermostatic plumbing.',
    architecturalScope: 'Spa aesthetic with floor-to-ceiling dark slate porcelain slabs, frameless toughened glass shower enclosure, and circular LED vanity mirror.',
    structuralScope: 'Floor screed re-leveling with recessed floor drain traps and anti-leak wall chase sealing.',
    interiorScope: 'Wall-hung rimless WC with Geberit concealed cistern, Jaquar Artize rainfall multi-jet shower system, and quartz floating vanity.',
    constructionMethods: [
      'Dr. Fixit 2-Coat Polyurethane Tanking Membrane with Corner Tape Seals',
      'Zero-Grout Precision Porcelain Slab Laying with Epoxy Grouting',
      'Pressure-Tested Hydrostatic CPVC Plumbing Inspection (10 Bar Pressure)'
    ],
    materialsSpecifications: [
      'Kajaria Eternity 1200x600mm Slate Porcelain Tiles',
      'Geberit Sigma Concealed In-Wall Cistern Frame',
      'Jaquar Thermostatic Diverter Brassware',
      'Laticrete Spectralock Epoxy Tile Grout'
    ],
    description: 'Spa-inspired luxury bathroom clad in large-format dark slate porcelain marble tiles. Features a wall-hung rimless toilet, custom marble vanity with undermount basin, circular backlit vanity mirror, and multi-jet stainless rainfall shower tower.',
    highlights: [
      'Dr. Fixit 2-coat tanking waterproofing system',
      'Concealed thermostatic diverter & pressure pump lines',
      'Anti-skid textured natural stone floor tiles',
      'Warm backlit LED vanity mirror and towel warmer'
    ],
    images: [
      {
        url: '/images/image_06.jpeg',
        caption: 'Completed dark slate spa bathroom suite in Hathibarkala, Dehradun featuring backlit circular mirror and rainfall shower column.',
        isRender: false
      }
    ],
    completionInfo: 'Handed over September 2025 with 5-year leak-free warranty.',
    clientType: 'private',
    confidentialityNote: 'Private residence bathroom. Specifications and completed imagery published with consent.',
    seoTitle: "Dark Slate Master Bathroom Spa Suite | Hathibarkala Dehradun",
    metaDescription: "Completed 180 sq.ft spa master bathroom renovation in Hathibarkala, Dehradun by Gupta's Evergreen Developers LLP. Dr. Fixit tanking waterproofing & dark slate slabs."
  },
  {
    id: 'proj-7',
    slug: 'himalayan-ridge-master-attic-suite',
    name: 'Himalayan Ridge Master Attic Suite',
    location: 'Mussoorie Hilltop, Uttarakhand',
    projectType: 'residential',
    categoryLabel: 'Hillside Cottage Suite',
    year: '2024',
    status: 'completed',
    visualType: 'completed_photo',
    visualLabel: 'Verified Completed Construction Photograph',
    isRender: false,
    builtUpArea: '650 Sq.Ft Penthouse Suite',
    scopeOfWork: 'Hill climate penthouse suite construction with high-pitched insulated timber ceiling, panoramic floor-to-apex glass gable, and private viewing terrace.',
    architecturalScope: 'Alpine-style angled gable architecture capturing unobstructed Shivalik mountain vistas, exposed seasoned timber rafters, and bespoke wrought iron fixtures.',
    structuralScope: 'Lightweight high-tensile structural steel roof framing anchored into the RCC columns, engineered to support hill winter snow and monsoon wind loads.',
    interiorScope: 'Natural tongue-and-groove seasoned pinewood wall lining, acoustic double-glazed argon-filled gable glazing, and hardwood timber plank flooring.',
    constructionMethods: [
      'Prefabricated Steel Truss Erection on Ridge Topography',
      'Polyurethane Foam (PUF) Thermal Roof Sandwich Insulation',
      'Fire-Retardant Borate Timber Impregnation Treatment'
    ],
    materialsSpecifications: [
      'Seasoned Himalayan Pine Paneling',
      'Tata Structura Hollow Steel Sections',
      'Saint-Gobain Solar Control Double Glazing',
      'Armstrong Mineral Fiber Thermal Roof Baffles'
    ],
    description: 'Warm timber-lined penthouse bedroom suite featuring an angled high-pitched wood ceiling, panoramic floor-to-apex glass gable window framing Himalayan views, polished wood flooring, and bespoke wrought-iron bedstead.',
    highlights: [
      'Thermal insulation roof sandwich panels for hill winters',
      'Acoustic double-glazed panoramic gable glazing',
      'Natural seasoned pinewood paneling with fire retardant coat',
      'Private adjoining viewing deck and reading nook'
    ],
    images: [
      {
        url: '/images/image_05.jpeg',
        caption: 'Completed timber-lined attic bedroom suite on Mussoorie hilltop with floor-to-ceiling glass gable window overlooking the valley.',
        isRender: false
      }
    ],
    completionInfo: 'Delivered October 2024; thermal insulation and weather-tightness certified through winter 2024-2025.',
    clientType: 'private',
    confidentialityNote: 'Private hillside property. Specifications and photography authorized for architectural portfolio.',
    seoTitle: "Himalayan Ridge Master Attic Suite | Mussoorie",
    metaDescription: "Case study: 650 sq.ft timber-paneled penthouse attic suite in Mussoorie by Gupta's Evergreen Developers LLP. Thermal roof insulation and panoramic gable glass."
  },
  {
    id: 'proj-8',
    slug: 'grand-classical-living-salon',
    name: 'Grand Classical Living Salon',
    location: 'Vasant Vihar, Dehradun, Uttarakhand',
    projectType: 'interior',
    categoryLabel: 'Classical Interior',
    year: '2026',
    status: 'ongoing',
    visualType: 'live_site_photo',
    visualLabel: 'Live Interior Finishing Phase Photography',
    isRender: false,
    builtUpArea: '1,200 Sq.Ft Salon',
    scopeOfWork: 'Neoclassical architectural interior fitout, handcrafted wall wainscoting paneling, Italian imported marble installation, and acoustic plaster ceilings.',
    architecturalScope: 'Symmetrical European neoclassical proportions, coffered ceiling with stepped crown moldings, fluted pilasters, and multi-tier ambient cove lighting.',
    structuralScope: 'Lightweight galvanized steel ceiling grid substructure engineered to support heavy crystal chandeliers and concealed VRV air-conditioning units.',
    interiorScope: 'Hand-carved teakwood trim details, imported Italian Michelangelo marble floor inlays, and hidden acoustic wall damping panels.',
    constructionMethods: [
      'Precision CNC Millwork Profiling of Wainscot Panels',
      'Dust-Free Diamond Pad Marble Grinding and Mirror Crystallization',
      'Laser-Aligned Gypsum Coffered Ceiling Framing'
    ],
    materialsSpecifications: [
      'Italian Michelangelo White Marble',
      'High-Density Moisture-Resistant (HDMR) Woodwork',
      'Saint-Gobain Gyproc Acoustic Plasterboard',
      'Daikin VRV Inverter Concealed Duct System'
    ],
    description: 'Sophisticated neoclassical living hall with custom handcrafted wainscoting paneling, Italian damask patterned wall coverings, coffered ceiling moldings, crystal chandeliers, and polished imported marble flooring.',
    highlights: [
      'Custom CNC millwork wall framing with teak accents',
      'Multi-tiered architectural ceiling light coves',
      'Acoustically treated wall substructure',
      'Concealed VRV air conditioning ducts'
    ],
    images: [
      {
        url: '/images/image_01.jpeg',
        caption: 'Interior finishing phase of neoclassical living salon in Vasant Vihar, Dehradun showing coffered ceilings and wainscot wall panels.',
        isRender: false
      }
    ],
    completionInfo: 'In finishing phase (early 2026) — woodwork, lighting integration, and final marble polish nearing handover.',
    clientType: 'private',
    confidentialityNote: 'Private residence in Vasant Vihar. Details published with client authorization.',
    seoTitle: "Grand Classical Living Salon | Vasant Vihar",
    metaDescription: "Case study of 1,200 sq.ft neoclassical living salon in Vasant Vihar, Dehradun by Gupta's Evergreen Developers LLP. Italian marble flooring and handcrafted wainscoting."
  },
  {
    id: 'proj-9',
    slug: 'spiral-sovereign-marble-staircase',
    name: 'The Spiral Sovereign Marble Staircase',
    location: 'Rajpur Road Villa, Dehradun, Uttarakhand',
    projectType: 'structural',
    categoryLabel: 'Architectural Stairway',
    year: '2025',
    status: 'completed',
    visualType: 'completed_photo',
    visualLabel: 'Verified Completed Construction Photograph',
    isRender: false,
    builtUpArea: '3 Levels (Vertical Circulation)',
    scopeOfWork: 'Helical cantilevered structural concrete staircase engineering, single-slab white marble tread installation, hand-forged ornamental iron balustrades, and concealed LED illumination.',
    architecturalScope: 'Curvilinear sweeping central spine connecting ground floor, first floor, and master penthouse level with custom brass top railing and hidden warm LED step lighting.',
    structuralScope: 'Heavy cantilevered reinforced concrete torsion-resistant core anchored into the building shear wall, calculated to eliminate structural vibration and deflection.',
    interiorScope: 'Custom hand-forged wrought iron balusters with ornamental leaf scrolls, polished solid brass handrail, and low-voltage stepped LED risers.',
    constructionMethods: [
      'Precision Radial Timber Shuttering for Curved Underside Soffit',
      'Continuous Concrete Pour with Plasticizer to Prevent Honeycombing',
      'Water-Jet Cut Seamless White Marble Treads with Bullnose Edge'
    ],
    materialsSpecifications: [
      'Vietnam White Pristine Marble Slabs',
      'Fe550 Super Ductile Curved Rebar',
      'Hand-Forged Wrought Iron Balustrades',
      'Cast Brass Continuous Handrail'
    ],
    description: 'Cantilevered sweeping architectural staircase clad in pure white marble treads with custom hand-forged wrought iron balustrades and brass cap rail ascending gracefully across three stories.',
    highlights: [
      'Heavy cantilevered reinforced concrete step cores',
      'Seamless single-slab marble tread installation',
      'Custom cast-iron ornamental scrolls and balusters',
      'Concealed step riser LED profile illumination'
    ],
    images: [
      {
        url: '/images/image_02.jpeg',
        caption: 'Completed cantilevered white marble staircase in Rajpur Road villa with hand-forged iron scrolls and concealed LED step lighting.',
        isRender: false
      }
    ],
    completionInfo: 'Completed August 2025; load deflection tested and certified.',
    clientType: 'private',
    confidentialityNote: 'Feature staircase inside private Rajpur Road villa. Client privacy preserved; craftsmanship photographs published.',
    seoTitle: "Spiral Sovereign Marble Staircase | Rajpur Road Villa Dehradun",
    metaDescription: "Architectural engineering case study: 3-story cantilevered white marble helical staircase with forged iron balustrades in Dehradun by Gupta's Evergreen Developers LLP."
  },
  {
    id: 'proj-10',
    slug: 'scenic-mountain-terrace-deck',
    name: 'Scenic Mountain Terrace & Deck',
    location: 'Mussoorie Overlook, Uttarakhand',
    projectType: 'residential',
    categoryLabel: 'Scenic Hill Terrace',
    year: '2024',
    status: 'completed',
    visualType: 'completed_photo',
    visualLabel: 'Verified Completed Construction Photograph',
    isRender: false,
    builtUpArea: '900 Sq.Ft Deck',
    scopeOfWork: 'High-altitude cantilevered outdoor observation deck engineered for extreme foothill monsoon rainfall, high wind shears, and sub-zero winter freeze-thaw cycles.',
    architecturalScope: 'Unobstructed 180-degree panoramic terrace overlooking the Dehradun valley, heavy-duty safety glass perimeter balustrades, integrated drainage channels, and weather-proof outdoor living zone.',
    structuralScope: 'Cantilevered reinforced concrete beam grid with negative-moment reinforcement at supporting columns, heavy slope retaining walls, and multi-tier waterproofing.',
    interiorScope: 'Exterior weather-resistant porcelain tile deck surface, all-weather synthetic wicker lounge furniture, and recessed solar-assisted perimeter deck lighting.',
    constructionMethods: [
      'Cantilevered RCC Beam Casting with High-Tensile Steel',
      '3-Layer Elastomeric Torch-On Bituminous Waterproofing Membrane',
      'Dual Slope Gradient Drainage to Central Rainwater Downpipes'
    ],
    materialsSpecifications: [
      'Fosroc Nitoproof 30 Heavy Waterproofing Membrane',
      'Anti-Skid R11 Textured Vitrified Outdoor Pavers',
      'Toughened 12mm Heat-Strengthened Laminated Glass Balustrades',
      'Stainless Steel 316 Marine-Grade Balustrade Posts'
    ],
    description: 'High-altitude cantilevered outdoor observation terrace engineered to withstand hill winds and monsoon downpours. Features seamless waterproof coating, safety balustrades, and unobstructed views of the Shivalik range.',
    highlights: [
      'Heavy-duty bituminous waterproofing membrane',
      'Engineered slope drainage and rainwater harvesting lines',
      'Weather-proof outdoor synthetic wicker furnishings',
      'Panoramic 180-degree hill valley viewpoint'
    ],
    images: [
      {
        url: '/images/image_09.jpeg',
        caption: 'Completed high-altitude cantilevered observation deck in Mussoorie overlooking the valley with weather-proof wicker furniture.',
        isRender: false
      }
    ],
    completionInfo: 'Completed June 2024; weathered two full monsoon cycles without seepage or water ponding.',
    clientType: 'private',
    confidentialityNote: 'Private hillside property. Technical engineering and scenic terrace photography published with permission.',
    seoTitle: "Scenic Mountain Cantilevered Terrace Deck | Mussoorie Project",
    metaDescription: "Case study: 900 sq.ft cantilevered mountain viewing deck in Mussoorie by Gupta's Evergreen Developers LLP. Fosroc waterproofing and anti-shear slope engineering."
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return projects.filter((p) => p.status === status);
}

export function getProjectsByType(type: Project['projectType']): Project[] {
  return projects.filter((p) => p.projectType === type);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
