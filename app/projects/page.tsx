import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import ProjectGrid from "@/components/project-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of residential, commercial, interior and renovation projects designed and built by ARKA.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Our Work"
        title={
          <>
            Our work
          </>
        }
        description="A collection of spaces we've designed and built."
      />
      <ProjectGrid />
    </>
  );
}
