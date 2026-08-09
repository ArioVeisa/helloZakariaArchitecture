"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36 lg:px-24">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Have a project
          <br />
          in mind?
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#6F6B63] md:text-lg">
          Tell us about your project and let&apos;s explore what we can build together.
        </p>
        <div className="mt-10">
          <Link
            href="/request-consultation"
            className="inline-flex items-center gap-2 border-b-2 border-[#1A1A18] pb-1.5 font-serif text-xl tracking-tight transition-colors hover:text-[#A47B52] hover:border-[#A47B52]"
          >
            Start a Project &rarr;
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
