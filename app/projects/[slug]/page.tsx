import { notFound } from "next/navigation";
import { projects } from "@/data";
import ProjectDetailClient from "./client";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ProjectDetailClient params={params} />;
}
