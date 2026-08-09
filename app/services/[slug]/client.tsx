"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { services } from "@/data";
import { faqs } from "@/data";

export default function ServiceDetailClient({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-32">
        {/* Hero */}
        <section className="mx-auto max-w-[1440px] px-6 pb-16 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#A47B52]">
              {service.number} / Service
            </span>
            <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {service.title}
            </h1>
          </motion.div>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-28 lg:px-24">
          <motion.p
            className="max-w-2xl text-lg leading-relaxed text-[#6F6B63]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {service.description}
          </motion.p>
        </section>

        {/* Deliverables + Approach */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-28 lg:px-24">
          <div className="grid gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#6F6B63]">
                What We Deliver
              </h3>
              <ul className="mt-6 space-y-3">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="h-px w-4 bg-[#A47B52]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#6F6B63]">
                Our Approach
              </h3>
              <ul className="mt-6 space-y-4">
                {service.approach.map((item, i) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 font-serif text-[#A47B52]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-28 lg:px-24">
          <div className="border-t border-[#D4D0C8] pt-16">
            <h3 className="mb-8 font-serif text-2xl tracking-tight">
              Frequently Asked
            </h3>
            <div className="max-w-2xl space-y-1">
              {faqs.slice(0, 4).map((faq, i) => (
                <details key={i} className="group border-b border-[#D4D0C8]">
                  <summary className="flex cursor-pointer items-center justify-between py-4 text-sm font-medium">
                    {faq.question}
                    <span className="text-[#A47B52] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-4 text-sm leading-relaxed text-[#6F6B63]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-36 lg:px-24">
          <div className="border-t border-[#D4D0C8] pt-16 text-center">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Ready to get started?
            </h2>
            <div className="mt-6">
              <Link
                href="/request-consultation"
                className="inline-flex items-center gap-2 border-b-2 border-[#1A1A18] pb-1 font-serif text-lg tracking-tight transition-colors hover:text-[#A47B52] hover:border-[#A47B52]"
              >
                Request Consultation &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
