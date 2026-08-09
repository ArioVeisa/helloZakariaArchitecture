import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import TestimonialSlider from "@/components/testimonial-slider";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What our clients say about designing and building with ARKA.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        label="Testimonials"
        title={
          <>
            What our
            <br />
            clients say
          </>
        }
      />

      <section className="wrap border-t border-ink/10 py-16 md:py-24">
        <Reveal>
          <TestimonialSlider />
        </Reveal>
      </section>

      <section className="wrap grid gap-10 border-t border-ink/10 py-16 md:grid-cols-2 md:py-24">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={0.05 * i}>
            <blockquote className="border-l-2 border-brass pl-6">
              <p className="font-display text-2xl leading-snug">“{t.quote}”</p>
              <footer className="mt-4 text-sm">
                <span className="font-medium">{t.name}</span>
                <span className="text-stone"> — {t.project}, {t.location}</span>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </section>
    </>
  );
}
