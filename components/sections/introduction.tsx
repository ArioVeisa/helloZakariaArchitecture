"use client";

import { motion } from "motion/react";

export default function IntroductionSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36 lg:px-24">
      <motion.span
        className="mb-8 block text-xs font-medium uppercase tracking-[0.3em] text-[#6F6B63]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        01 / Introduction
      </motion.span>

      <div className="grid gap-12 md:grid-cols-2 md:gap-24">
        <motion.h2
          className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          We turn
          <br />
          ideas into
          <br />
          spaces.
        </motion.h2>

        <motion.div
          className="flex flex-col justify-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="max-w-md text-base leading-relaxed text-[#6F6B63] md:text-lg">
            From architectural design to construction, we bring every stage of
            your project together under one roof. No fragmentation. No finger-pointing.
            Just one team, one vision, one result.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
