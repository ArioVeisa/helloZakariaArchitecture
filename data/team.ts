export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Arka Wijaya",
    role: "Principal Architect",
    photo: "/images/team/team-1.jpg",
    bio: "IAI-certified architect with 12 years across residential and commercial work in Indonesia and Singapore.",
  },
  {
    name: "Maya Kusuma",
    role: "Interior Designer",
    photo: "/images/team/team-2.jpg",
    bio: "Leads the interior studio. Believes a room is finished when nothing can be removed.",
  },
  {
    name: "Dimas Pradana",
    role: "Project Manager",
    photo: "/images/team/team-3.jpg",
    bio: "Keeps cost, schedule and quality on one page. Has delivered 30+ projects without a blown budget.",
  },
  {
    name: "Rina Hartati",
    role: "Site Manager",
    photo: "/images/team/team-4.jpg",
    bio: "Runs the field team and the quality checklist. The reason our handover lists are short.",
  },
];
