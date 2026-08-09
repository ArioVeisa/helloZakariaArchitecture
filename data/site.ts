export const site = {
  name: "ARKA",
  legalName: "ARKA Architects & Construction",
  description:
    "Architecture and construction studio in Surabaya. We design and build residential, commercial and interior spaces made for the way you live.",
  url: "https://arka-studio.co.id",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  email: "hello@arka-studio.co.id",
  address: "Jl. Raya Darmo No. 12, Surabaya, Indonesia",
  instagram: "@arka.studio",
  instagramUrl: "https://instagram.com/arka.studio",
  mapsEmbed:
    "https://www.google.com/maps?q=Jl.%20Raya%20Darmo%20Surabaya&output=embed",
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hello ARKA, I'd like to discuss a project."
)}`;

export const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "50+", label: "Projects" },
  { value: "8+", label: "Years Experience" },
  { value: "20+", label: "Team Members" },
  { value: "12", label: "Cities" },
];

export const processSteps = [
  { number: "01", title: "Discovery", description: "Understanding your needs, budget and vision." },
  { number: "02", title: "Concept", description: "Developing the initial architectural direction." },
  { number: "03", title: "Design", description: "Detailed drawings, materials and visualization." },
  { number: "04", title: "Construction", description: "Turning the design into reality." },
  { number: "05", title: "Handover", description: "Final inspection and project completion." },
];
