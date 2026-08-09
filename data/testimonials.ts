export type Testimonial = {
  quote: string;
  name: string;
  project: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The team understood exactly what we wanted and delivered a space that exceeded our expectations.",
    name: "Andi Hartono",
    project: "Rumah Teduh",
    location: "Surabaya",
  },
  {
    quote:
      "From the first sketch to the last coat of paint, one team handled everything. That made all the difference.",
    name: "Putri Wulandari",
    project: "Villa Horizon",
    location: "Bali",
  },
  {
    quote:
      "They renovated our café without closing it for more than two weeks. Professional, fast and honest about cost.",
    name: "Budi Santoso",
    project: "Kopitiam Timur",
    location: "Surabaya",
  },
  {
    quote:
      "Our office feels twice as big and our people love coming in. The design paid for itself within a year.",
    name: "Catherine Wijaya",
    project: "Atrium Office",
    location: "Surabaya",
  },
];
