"use client";

import Link from "next/link";
import { motion } from "motion/react";

const steps = [
  { number: "01", title: "Discovery", desc: "Understanding your needs, budget and vision." },
  { number: "02", title: "Concept", desc: "Developing the initial architectural direction." },
  { number: "03", title: "Design", desc: "Detailed drawings, materials and visualization." },
  { number: "04", title: "Construction", desc: "Turning the design into reality." },
  { number: "05", title: "Handover", desc: "Final inspection and project completion." },
];

export default function ProcessPreview() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36 lg:px-24">
      <motion.span
        className="mb-16 block text-xs font-medium uppercase tracking-[0.3em] text-[#6F6B63]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        How We Work
      </motion.span>

      <div className="space-y-8 md:space-y-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className="flex items-start gap-6 border-t border-[#D4D0C8] pt-6 md:gap-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span className="font-serif text-2xl text-[#A47B52] md:text-3xl">
              {step.number}
            </span>
            <div>
              <h3 className="font-serif text-xl tracking-tight md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-1 text-sm text-[#6F6B63]">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Link
          href="/process"
          className="inline-flex items-center gap-2 border-b border-[#1A1A18] pb-1.5 text-sm font-medium tracking-wide transition-colors hover:text-[#A47B52] hover:border-[#A47B52]"
        >
          Explore Our Process &rarr;
        </Link>
      </motion.div>
    </section>
  );
}
