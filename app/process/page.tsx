import type { Metadata } from "next";
import ArrowLink from "@/components/arrow-link";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import { processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How ARKA works — from discovery and concept through design, construction and handover.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        label="Process"
        title="How we work"
        description="Five stages, one accountable team. You always know where your project stands."
      />

      <section className="wrap pb-24 md:pb-32">
        {processSteps.map((step) => (
          <Reveal key={step.number} delay={0.05}>
            <div className="grid gap-4 border-t border-ink/15 py-12 md:grid-cols-12 md:items-baseline md:py-16">
              <span className="font-display text-5xl text-brass md:col-span-2 md:text-7xl">
                {step.number}
              </span>
              <h2 className="font-display text-3xl md:col-span-4 md:text-5xl">{step.title}</h2>
              <p className="max-w-md text-stone md:col-span-6 md:text-lg">{step.description}</p>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-ink/15" />

        <Reveal delay={0.2}>
          <div className="mt-16 text-center">
            <p className="font-display text-3xl md:text-4xl">Where is your project right now?</p>
            <ArrowLink href="/request-consultation" variant="solid" className="mt-8">
              Start a Project
            </ArrowLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
