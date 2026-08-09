export type Service = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  intro: string;
  deliverables: string[];
  approach: string[];
  image: string;
  relatedCategory: "Residential" | "Commercial" | "Interior" | "Renovation";
};

export const services: Service[] = [
  {
    slug: "architecture",
    number: "01",
    title: "Architecture",
    tagline: "Designing spaces around your lifestyle.",
    intro:
      "From the first sketch to the final drawing set, we design buildings that fit the way you live and work — not the other way around. Every project starts with your site, your brief and your budget, and ends with architecture that belongs to all three.",
    deliverables: [
      "Concept Design",
      "Schematic Design",
      "3D Visualization",
      "Technical Drawing",
      "Permit Documentation",
    ],
    approach: [
      "We begin on site, not in software — reading light, wind, context and constraints before drawing a single line.",
      "Concepts are tested against budget early, so the design you fall in love with is the design you can build.",
      "Every drawing set is coordinated with structure and services before it leaves the studio.",
    ],
    image: "/images/projects/white-house.jpg",
    relatedCategory: "Residential",
  },
  {
    slug: "interior-design",
    number: "02",
    title: "Interior Design",
    tagline: "Thoughtful interiors built around details.",
    intro:
      "Interiors are where architecture becomes personal. We plan spaces, materials, furniture and light as one composition — so the moment you walk in, everything simply feels right.",
    deliverables: [
      "Space Planning",
      "Material Selection",
      "Furniture",
      "Lighting",
      "Interior Visualization",
    ],
    approach: [
      "We design from the inside out: how you move through a room decides where walls, joins and lights go.",
      "Every material is sampled in real light on site before it is specified.",
      "Custom furniture is drawn to the millimetre and produced with our long-time workshop partners.",
    ],
    image: "/images/projects/interior-living.jpg",
    relatedCategory: "Interior",
  },
  {
    slug: "construction",
    number: "03",
    title: "Construction",
    tagline: "From drawings to finished spaces.",
    intro:
      "Design means nothing without execution. Our construction division builds what we draw — with one team accountable for quality, cost and schedule from groundbreaking to handover.",
    deliverables: [
      "Pre-construction",
      "Procurement",
      "Site Management",
      "Construction",
      "Quality Control",
    ],
    approach: [
      "A builder sits in on design meetings from day one, so details are buildable before they are drawn.",
      "Weekly cost and schedule reports keep decisions fast and surprises out.",
      "Our quality control checklist follows every trade from structure to final paint.",
    ],
    image: "/images/projects/construction.jpg",
    relatedCategory: "Commercial",
  },
  {
    slug: "renovation",
    number: "04",
    title: "Renovation",
    tagline: "Transforming existing spaces.",
    intro:
      "Good renovation is not cosmetic. We assess what a building truly needs — structurally, spatially and financially — and transform it with the same care as a new build.",
    deliverables: [
      "Site Assessment",
      "Design",
      "Structural Work",
      "Interior",
      "Final Handover",
    ],
    approach: [
      "Every renovation starts with a full structural and services assessment — no guessing behind the walls.",
      "We phase works intelligently so homes stay liveable and businesses stay open where possible.",
      "Original character is kept where it earns its place, replaced only where it fails.",
    ],
    image: "/images/projects/cafe.jpg",
    relatedCategory: "Renovation",
  },
  {
    slug: "consultation",
    number: "05",
    title: "Consultation",
    tagline: "Clarity before commitment.",
    intro:
      "Not sure where to start? A consultation session gives you an honest read on your site, your budget and your options — before you commit to anything bigger.",
    deliverables: [
      "Site Visit & Assessment",
      "Feasibility Study",
      "Budget Planning",
      "Design Direction",
      "Project Roadmap",
    ],
    approach: [
      "One or two sessions on site with a senior architect — not a sales call.",
      "You leave with a written summary: what is possible, what it costs, and what to do next.",
      "If we are not the right fit, we say so and point you in the right direction.",
    ],
    image: "/images/misc/blueprints.jpg",
    relatedCategory: "Residential",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
