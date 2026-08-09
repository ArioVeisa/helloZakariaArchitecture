export interface Project {
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Interior" | "Renovation";
  location: string;
  year: number;
  cover: string;
  images: string[];
  area: string;
  service: string;
  status: "Completed" | "In Progress";
  idea: string;
  challenge: string;
  approach: string;
  result: string;
}

export const projects: Project[] = [
  {
    slug: "modern-villa-ubud",
    title: "Modern Villa Ubud",
    category: "Residential",
    location: "Ubud, Bali",
    year: 2026,
    cover: "/projects/villa-ubud/cover.jpg",
    images: [
      "/projects/villa-ubud/01.jpg",
      "/projects/villa-ubud/02.jpg",
      "/projects/villa-ubud/03.jpg",
      "/projects/villa-ubud/04.jpg",
      "/projects/villa-ubud/05.jpg",
    ],
    area: "450 m²",
    service: "Architecture & Construction",
    status: "Completed",
    idea: "The client wanted a home that blends modern tropical architecture with traditional Balinese elements — a sanctuary that feels open to nature yet provides complete privacy.",
    challenge: "The sloping terrain required careful site planning. We needed to maximize the valley views while ensuring structural stability on the 30-degree incline.",
    approach: "We designed the villa as a series of pavilions connected by open walkways, each oriented toward the best views. Natural stone and local timber ground the modern forms in the landscape.",
    result: "A four-bedroom villa that feels both expansive and intimate, with seamless indoor-outdoor living spaces and panoramic views of the Tjampuhan valley.",
  },
  {
    slug: "serambi-office-tower",
    title: "Serambi Office Tower",
    category: "Commercial",
    location: "Jakarta Selatan",
    year: 2025,
    cover: "/projects/serambi/cover.jpg",
    images: [
      "/projects/serambi/01.jpg",
      "/projects/serambi/02.jpg",
      "/projects/serambi/03.jpg",
    ],
    area: "12,000 m²",
    service: "Architecture & Construction",
    status: "Completed",
    idea: "A headquarters for a tech company that wanted to move away from the sealed-glass-box typology — they wanted a building that breathes.",
    challenge: "Jakarta's hot-humid climate and the client's ambitious sustainability targets meant we had to rethink passive cooling strategies for a mid-rise tower.",
    approach: "We developed a double-skin facade with automated louvres, sky gardens every three floors, and a vertical green spine that runs the full height of the building.",
    result: "A LEED Platinum office tower that uses 40% less energy than comparable buildings, with employee satisfaction scores among the highest in the company's portfolio.",
  },
  {
    slug: "the-bamboo-house",
    title: "The Bamboo House",
    category: "Residential",
    location: "Bandung, Jawa Barat",
    year: 2026,
    cover: "/projects/bamboo/cover.jpg",
    images: [
      "/projects/bamboo/01.jpg",
      "/projects/bamboo/02.jpg",
      "/projects/bamboo/03.jpg",
      "/projects/bamboo/04.jpg",
    ],
    area: "280 m²",
    service: "Architecture & Interior",
    status: "Completed",
    idea: "A young family wanted a sustainable home that could grow with them — literally. The design had to accommodate future expansion while staying within a modest budget.",
    challenge: "Building with engineered bamboo at this scale in Indonesia required navigating limited supplier options and convincing local contractors to adopt unfamiliar techniques.",
    approach: "We created a modular bamboo grid system that allows rooms to be added incrementally. The structure is exposed and celebrated throughout the interiors.",
    result: "An award-winning residence that demonstrates how traditional materials can meet contemporary living standards. The family has since added a home office and guest suite.",
  },
  {
    slug: "pantai-indah-renovation",
    title: "Pantai Indah Residence",
    category: "Renovation",
    location: "Jakarta Utara",
    year: 2025,
    cover: "/projects/pantai-indah/cover.jpg",
    images: [
      "/projects/pantai-indah/01.jpg",
      "/projects/pantai-indah/02.jpg",
    ],
    area: "320 m²",
    service: "Renovation & Interior",
    status: "Completed",
    idea: "A 1990s house with good bones but outdated everything. The owners wanted to modernize while preserving the original character they fell in love with.",
    challenge: "The existing layout was compartmentalized with small, dark rooms — the opposite of the open, light-filled home the clients wanted.",
    approach: "We removed non-structural walls to create a flowing ground floor, added a double-height void above the dining area, and replaced all windows with full-height glazing.",
    result: "The house is unrecognizable from its former self, yet familiar details — the original terrazzo stairs, a restored teak ceiling — keep it connected to its history.",
  },
  {
    slug: "kembang-cafe-interior",
    title: "Kembang Café Interior",
    category: "Interior",
    location: "Surabaya, Jawa Timur",
    year: 2026,
    cover: "/projects/kembang/cover.jpg",
    images: [
      "/projects/kembang/01.jpg",
      "/projects/kembang/02.jpg",
      "/projects/kembang/03.jpg",
    ],
    area: "180 m²",
    service: "Interior Design",
    status: "Completed",
    idea: "A specialty coffee roaster wanted their flagship café to feel like stepping into a warm, sensory experience — a space where the aroma of coffee is matched by the atmosphere.",
    challenge: "The narrow, deep lot had minimal street frontage and limited natural light beyond the first five meters.",
    approach: "We organized the space as a journey: the bright, social front zone gives way to a darker, more intimate back area. Custom terracotta pendant lights and a curved timber ceiling guide the transition.",
    result: "The café has become a destination, praised in design publications for its spatial storytelling. Revenue exceeded projections by 30% in the first quarter.",
  },
  {
    slug: "ciputra-commercial-complex",
    title: "Ciputra Commercial Hub",
    category: "Commercial",
    location: "Semarang, Jawa Tengah",
    year: 2025,
    cover: "/projects/ciputra/cover.jpg",
    images: [
      "/projects/ciputra/01.jpg",
      "/projects/ciputra/02.jpg",
      "/projects/ciputra/03.jpg",
    ],
    area: "8,500 m²",
    service: "Architecture & Construction",
    status: "Completed",
    idea: "A mixed-use development that needed to anchor a new neighborhood — not just another strip of shophouses but a genuine community hub.",
    challenge: "Balancing the developer's desire for maximum leasable area with the community's need for open, inviting public space.",
    approach: "We created a U-shaped plan that opens toward the main road, framing a central plaza with shade trees, seating, and a small amphitheater for events.",
    result: "The complex is fully leased, and the plaza has become a popular gathering spot. Adjacent property values have risen significantly since completion.",
  },
];

export const projectCategories = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Renovation",
] as const;
