import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about building costs, design timelines, construction, renovation and working with ARKA.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        label="FAQ"
        title="Questions, answered"
        description="The things clients ask us most — before they start a project."
      />

      <section className="wrap max-w-4xl pb-24 md:pb-32">
        {faqs.map((faq, i) => (
          <Reveal key={faq.question} delay={0.03 * i}>
            <details className="group border-t border-ink/15 py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl md:text-2xl [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span aria-hidden className="flex items-center justify-center text-stone transition-transform duration-300 group-open:rotate-45">
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-stone">{faq.answer}</p>
            </details>
          </Reveal>
        ))}
        <div className="border-t border-ink/15" />

        <Reveal delay={0.15}>
          <p className="mt-12 text-stone">
            Something else on your mind?{" "}
            <Link href="/contact" className="underline underline-offset-2 transition-colors hover:text-brass">
              Talk to us
            </Link>{" "}
            or{" "}
            <Link href="/request-consultation" className="underline underline-offset-2 transition-colors hover:text-brass">
              request a consultation
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </>
  );
}
