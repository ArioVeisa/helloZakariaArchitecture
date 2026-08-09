import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Plus } from "lucide-react";
import ArrowLink from "@/components/arrow-link";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import ProjectCard from "@/components/project-card";
import { getService, services } from "@/data/services";
import { projects } from "@/data/projects";
import { faqs } from "@/data/faq";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} Services`,
    description: service.intro,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = projects.filter((p) => p.category === service.relatedCategory).slice(0, 3);
  const serviceFaqs = faqs.slice(0, 3);

  return (
    <>
      <PageHeader
        label={`Service ${service.number}`}
        title={service.title}
        description={service.tagline}
      />

      {/* Introduction + image */}
      <section className="wrap grid gap-10 pb-20 md:grid-cols-2 md:pb-28">
        <Reveal>
          <p className="max-w-lg text-lg leading-relaxed">{service.intro}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Deliverables */}
      <section className="bg-night py-20 text-paper md:py-28">
        <div className="wrap">
          <Reveal>
            <p className="label-xs text-brass">What We Deliver</p>
          </Reveal>
          <div className="mt-10 grid gap-x-8 gap-y-6 md:grid-cols-5">
            {service.deliverables.map((item, i) => (
              <Reveal key={item} delay={0.08 * i}>
                <p className="label-xs text-paper/40">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-display text-2xl">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="wrap py-20 md:py-28">
        <Reveal>
          <p className="label-xs text-brass">Our Approach</p>
        </Reveal>
        <div className="mt-10 space-y-10">
          {service.approach.map((text, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <div className="grid gap-4 border-t border-ink/15 pt-8 md:grid-cols-12">
                <span className="label-xs text-stone md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <p className="max-w-2xl text-lg leading-relaxed md:col-span-8">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="wrap border-t border-ink/10 py-20 md:py-28">
          <h2 className="font-display text-3xl md:text-5xl">Related projects</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="wrap border-t border-ink/10 py-20 md:py-28">
        <h2 className="font-display text-3xl md:text-5xl">Common questions</h2>
        <div className="mt-10 max-w-3xl">
          {serviceFaqs.map((faq) => (
            <details key={faq.question} className="group border-t border-ink/15 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span aria-hidden className="flex items-center justify-center text-stone transition-transform duration-300 group-open:rotate-45">
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-night py-20 text-center text-paper">
        <div className="wrap">
          <p className="font-display text-3xl md:text-5xl">Ready to start with {service.title.toLowerCase()}?</p>
          <ArrowLink href="/request-consultation" variant="light" className="mt-8 px-8 py-4">
            Request Consultation
          </ArrowLink>
        </div>
      </section>
    </>
  );
}
