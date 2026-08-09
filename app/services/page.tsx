import type { Metadata } from "next";
import ArrowLink from "@/components/arrow-link";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture, interior design, construction, renovation and consultation — every stage of your project under one roof.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title={
          <>
            From idea
            <br />
            to reality.
          </>
        }
        description="Five disciplines, one team. Pick where you are — we take you the rest of the way."
      />

      <section className="wrap pb-24 md:pb-32">
        {services.map((service) => (
          <Reveal key={service.slug} delay={0.05}>
            <div className="grid gap-6 border-t border-ink/15 py-12 md:grid-cols-12 md:py-16">
              <div className="md:col-span-1">
                <span className="label-xs text-stone">{service.number}</span>
              </div>
              <div className="md:col-span-5">
                <h2 className="font-display text-4xl md:text-5xl">{service.title}</h2>
                <p className="mt-4 max-w-md text-stone">{service.tagline}</p>
                <ArrowLink href={`/services/${service.slug}`} variant="underline" className="mt-6">
                  View Service
                </ArrowLink>
              </div>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-stone md:col-span-6 md:grid-cols-1">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span aria-hidden className="h-px w-4 bg-brass" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-ink/15" />
      </section>
    </>
  );
}
