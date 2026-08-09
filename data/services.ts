export interface Service {
  slug: string;
  title: string;
  number: string;
  shortDescription: string;
  description: string;
  deliverables: string[];
  approach: string[];
}

export const services: Service[] = [
  {
    slug: "architecture",
    title: "Architecture",
    number: "01",
    shortDescription: "Designing spaces around your lifestyle.",
    description:
      "From initial sketches to final construction documents, we design buildings that respond to their site, climate, and the people who will inhabit them. Our architectural process is collaborative — we work closely with you to translate your vision into a design that is both beautiful and functional.",
    deliverables: [
      "Concept Design",
      "Schematic Design",
      "3D Visualization",
      "Technical Drawings",
      "Permit Documentation",
    ],
    approach: [
      "We start by understanding how you live or work",
      "Site analysis and climate-responsive strategies",
      "Iterative design with regular client reviews",
      "Detailed construction documentation",
    ],
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    number: "02",
    shortDescription: "Thoughtful interiors built around details.",
    description:
      "Interiors are where architecture meets daily life. We design spaces that feel effortless — the right light, the right materials, the right proportions. Every surface, texture, and fixture is chosen with intention.",
    deliverables: [
      "Space Planning",
      "Material & Finish Selection",
      "Custom Furniture Design",
      "Lighting Design",
      "Interior Visualization",
    ],
    approach: [
      "Understanding your aesthetic and functional needs",
      "Material palette development",
      "Lighting as a primary design element",
      "Procurement and installation oversight",
    ],
  },
  {
    slug: "construction",
    title: "Construction",
    number: "03",
    shortDescription: "From drawings to finished spaces.",
    description:
      "Great design deserves great execution. Our construction team brings architectural intent to life with precision craftsmanship, rigorous quality control, and transparent project management. We build as if it were our own.",
    deliverables: [
      "Pre-construction Planning",
      "Material Procurement",
      "Site Management",
      "Construction",
      "Quality Control",
    ],
    approach: [
      "Detailed cost estimation before construction begins",
      "Regular site progress reports",
      "Quality inspection at every milestone",
      "Clean, organized, and safe job sites",
    ],
  },
  {
    slug: "renovation",
    title: "Renovation",
    number: "04",
    shortDescription: "Transforming existing spaces.",
    description:
      "Renovation is more complex than building new — it requires understanding what to keep, what to change, and how to make old and new feel like they were always meant to be together. We approach every renovation with respect for the existing structure.",
    deliverables: [
      "Site Assessment",
      "Design & Planning",
      "Structural Work",
      "Interior Finishes",
      "Final Handover",
    ],
    approach: [
      "Thorough existing conditions survey",
      "Design that respects the original character",
      "Phased construction to minimize disruption",
      "Final walkthrough and documentation",
    ],
  },
  {
    slug: "consultation",
    title: "Consultation",
    number: "05",
    shortDescription: "Expert guidance for your project.",
    description:
      "Not sure where to start? Our consultation service helps you clarify your vision, understand the possibilities, and make informed decisions before committing to a full design or construction contract.",
    deliverables: [
      "Project Feasibility Assessment",
      "Budget Estimation",
      "Timeline Planning",
      "Site Evaluation",
      "Recommendations Report",
    ],
    approach: [
      "Initial discovery session",
      "Site visit and analysis",
      "Preliminary feasibility study",
      "Written report with clear recommendations",
    ],
  },
];
