export type ProjectCategory = "Residential" | "Commercial" | "Interior" | "Renovation";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  area: string;
  service: string;
  status: string;
  cover: string;
  images: string[];
  featured?: boolean;
  story: { idea: string; challenge: string; approach: string; result: string };
};

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Renovation",
];

export const projects: Project[] = [
  {
    slug: "rumah-teduh",
    title: "Rumah Teduh",
    category: "Residential",
    location: "Surabaya, Indonesia",
    year: 2026,
    area: "420 m²",
    service: "Architecture & Construction",
    status: "Completed",
    cover: "/images/projects/white-house.jpg",
    featured: true,
    images: [
      "/images/projects/white-house.jpg",
      "/images/projects/interior-living.jpg",
      "/images/projects/interior-lounge.jpg",
      "/images/projects/pool-house.jpg",
      "/images/projects/interior-warm.jpg",
    ],
    story: {
      idea: "A family home that feels shaded and calm despite Surabaya's heat — courtyards, deep overhangs and cross ventilation shaped around daily rituals.",
      challenge: "A narrow east-west plot with harsh afternoon sun, and a brief that asked for privacy without closing the house off from its garden.",
      approach: "We split the program around two courtyards, rotated the living spaces toward the north light and used a screen of vertical timber fins on the west facade.",
      result: "A house that stays cool without air conditioning for most of the year, and a family that lives between rooms and garden rather than inside boxes.",
    },
  },
  {
    slug: "villa-horizon",
    title: "Villa Horizon",
    category: "Residential",
    location: "Bali, Indonesia",
    year: 2025,
    area: "650 m²",
    service: "Architecture & Interior",
    status: "Completed",
    cover: "/images/projects/villa-night.jpg",
    featured: true,
    images: [
      "/images/projects/villa-night.jpg",
      "/images/projects/villa-dusk.jpg",
      "/images/projects/interior-luxury.jpg",
      "/images/projects/house-pool.jpg",
    ],
    story: {
      idea: "A holiday villa where every room frames the horizon — architecture reduced to floor, roof and view.",
      challenge: "Building on a sloping site with strict height limits while keeping an uninterrupted line of sight to the sea.",
      approach: "Three terraced pavilions step down the contour. Living spaces open fully to an infinity edge that dissolves into the horizon.",
      result: "A villa that photographs like a resort but lives like a home, now one of the most requested stays in its district.",
    },
  },
  {
    slug: "loft-cendana",
    title: "Loft Cendana",
    category: "Interior",
    location: "Jakarta, Indonesia",
    year: 2025,
    area: "180 m²",
    service: "Interior Design",
    status: "Completed",
    cover: "/images/projects/apartment.jpg",
    featured: true,
    images: [
      "/images/projects/apartment.jpg",
      "/images/projects/interior-minimal.jpg",
      "/images/projects/interior-lounge.jpg",
      "/images/projects/interior-warm.jpg",
    ],
    story: {
      idea: "An apartment interior for a young collector — warm minimalism with room for art, books and light.",
      challenge: "A standard developer layout with low ceilings and awkward columns that had to feel generous.",
      approach: "We removed every non-structural wall, wrapped the columns in oak joinery and raised perceived height with continuous ceiling planes and concealed lighting.",
      result: "A calm, gallery-like home where every surface earns its place — delivered fully furnished in five months.",
    },
  },
  {
    slug: "atrium-office",
    title: "Atrium Office",
    category: "Commercial",
    location: "Surabaya, Indonesia",
    year: 2024,
    area: "1,200 m²",
    service: "Architecture & Construction",
    status: "Completed",
    cover: "/images/projects/office.jpg",
    featured: true,
    images: [
      "/images/projects/office.jpg",
      "/images/projects/office-2.jpg",
      "/images/projects/facade.jpg",
      "/images/projects/building-white.jpg",
    ],
    story: {
      idea: "A headquarters that works like a small village — focus rooms around shared courtyards of light.",
      challenge: "Converting a dark three-storey shophouse block into a bright modern workplace without losing its street character.",
      approach: "A central skylight atrium was cut through all floors. Work zones sit at the perimeter; meetings and pause spaces face the light.",
      result: "Employee satisfaction scores rose 40% after move-in, and the facade kept its place in the streetscape.",
    },
  },
  {
    slug: "kopitiam-timur",
    title: "Kopitiam Timur",
    category: "Renovation",
    location: "Surabaya, Indonesia",
    year: 2024,
    area: "240 m²",
    service: "Renovation & Interior",
    status: "Completed",
    cover: "/images/projects/cafe.jpg",
    images: [
      "/images/projects/cafe.jpg",
      "/images/projects/interior-warm.jpg",
      "/images/projects/interior-minimal.jpg",
    ],
    story: {
      idea: "Renovating a tired legacy coffee house into a modern kopitiam that keeps its old soul.",
      challenge: "A live renovation — the owner needed the café to keep earning through most of the works, on a tight budget.",
      approach: "We phased construction into three zones, kept the original terrazzo and timber, and layered new brass, rattan and warm light over them.",
      result: "Revenue doubled within three months of reopening, and the regulars stayed.",
    },
  },
  {
    slug: "casa-serene",
    title: "Casa Serene",
    category: "Residential",
    location: "Malang, Indonesia",
    year: 2024,
    area: "350 m²",
    service: "Architecture",
    status: "Completed",
    cover: "/images/projects/house-dusk.jpg",
    images: [
      "/images/projects/house-dusk.jpg",
      "/images/projects/house-lawn.jpg",
      "/images/projects/interior-living.jpg",
    ],
    story: {
      idea: "A weekend house in the Malang highlands — quiet, gabled, and warmed by the evening sun.",
      challenge: "A steep, rainy climate and a client who wanted large glass without large energy bills.",
      approach: "Deep roof planes, double-height glazing on the valley side only, and local volcanic stone as thermal mass.",
      result: "A house that needs no heating in the cool season and frames the valley like a painting at dusk.",
    },
  },
  {
    slug: "menara-citra",
    title: "Menara Citra Facade",
    category: "Commercial",
    location: "Surabaya, Indonesia",
    year: 2023,
    area: "3,800 m²",
    service: "Facade Design & Construction",
    status: "Completed",
    cover: "/images/projects/facade.jpg",
    images: [
      "/images/projects/facade.jpg",
      "/images/projects/building-white.jpg",
      "/images/projects/construction.jpg",
    ],
    story: {
      idea: "Re-skinning a 1990s office tower to give it a second life and a contemporary identity.",
      challenge: "Recladding an occupied building floor by floor, without interrupting the tenants inside.",
      approach: "A modular aluminium fin system installed from mast climbers at night, designed to be fixed to the existing structure without welding on site.",
      result: "Energy use dropped 28%, rents rose, and the tower became a reference for facade retrofits in the city.",
    },
  },
  {
    slug: "pavilion-residence",
    title: "Pavilion Residence",
    category: "Residential",
    location: "Surabaya, Indonesia",
    year: 2023,
    area: "510 m²",
    service: "Architecture & Construction",
    status: "Completed",
    cover: "/images/projects/pool-house.jpg",
    images: [
      "/images/projects/pool-house.jpg",
      "/images/projects/house-pool.jpg",
      "/images/projects/interior-luxury.jpg",
      "/images/projects/construction-2.jpg",
    ],
    story: {
      idea: "A single-storey pavilion house organized around a swimming pool — every room opens to water.",
      challenge: "Keeping eight rooms, a studio and a guest wing all pool-facing on a corner plot with two busy street frontages.",
      approach: "An L-shaped plan turns its back to the streets and opens entirely to the interior pool deck, with service zones forming the outer wall.",
      result: "A resort-like daily life five minutes from the city center, built in fourteen months start to handover.",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);
