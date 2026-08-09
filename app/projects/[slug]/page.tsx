import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ArrowLink from "@/components/arrow-link";
import Gallery from "@/components/gallery";
import Reveal from "@/components/reveal";
import ProjectCard from "@/components/project-card";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: `${project.category} project in ${project.location} — designed and built by ARKA. ${project.story.idea}`,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { images: [{ url: project.cover, width: 1600, height: 1200 }] },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 2);
  const story = [
    ["The Idea", project.story.idea],
    ["Challenge", project.story.challenge],
    ["Approach", project.story.approach],
    ["Result", project.story.result],
  ] as const;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.story.idea,
    dateCreated: String(project.year),
    locationCreated: project.location,
    image: project.cover,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative flex min-h-[80svh] items-end overflow-hidden bg-night">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-night/45" />
        <div className="wrap relative pb-16 pt-40 text-paper">
          <Reveal>
            <p className="label-xs text-brass">{project.category}</p>
            <h1 className="mt-5 font-display text-5xl leading-none md:text-7xl lg:text-8xl">
              {project.title}
            </h1>
            <p className="mt-5 text-paper/70">
              {project.location} · {project.year}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Project information */}
      <section className="wrap border-b border-ink/10 py-14">
        <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-6">
          {(
            [
              ["Location", project.location],
              ["Type", project.category],
              ["Year", String(project.year)],
              ["Area", project.area],
              ["Service", project.service],
              ["Status", project.status],
            ] as const
          ).map(([label, value]) => (
            <div key={label}>
              <dt className="label-xs text-stone">{label}</dt>
              <dd className="mt-2 text-sm">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <Gallery images={project.images} title={project.title} />
      </section>

      {/* Story */}
      <section className="wrap grid gap-10 py-16 md:grid-cols-2 md:py-24">
        {story.map(([label, text], i) => (
          <Reveal key={label} delay={0.05 * i}>
            <p className="label-xs text-brass">{String(i + 1).padStart(2, "0")} / {label}</p>
            <p className="mt-4 max-w-lg text-lg leading-relaxed">{text}</p>
          </Reveal>
        ))}
      </section>

      {/* Related + CTA */}
      {related.length > 0 && (
        <section className="wrap border-t border-ink/10 py-16 md:py-24">
          <h2 className="font-display text-3xl md:text-5xl">Related projects</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}

      <section className="bg-night py-20 text-center text-paper">
        <div className="wrap">
          <p className="font-display text-3xl md:text-5xl">Planning something similar?</p>
          <ArrowLink href="/request-consultation" variant="light" className="mt-8 px-8 py-4">
            Start a Project
          </ArrowLink>
        </div>
      </section>
    </>
  );
}
