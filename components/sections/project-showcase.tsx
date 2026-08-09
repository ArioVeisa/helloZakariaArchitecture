"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { projects } from "@/data";

export default function ProjectShowcase() {
  const showcase = projects[0];

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36 lg:px-24">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#EAE7E1] md:aspect-[21/9]">
        <Image
          src={showcase.cover}
          alt={showcase.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <motion.div
        className="mt-8 grid gap-6 md:grid-cols-3 md:gap-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            {showcase.title}
          </h2>
        </div>
        <div>
          <p className="text-sm text-[#6F6B63]">{showcase.location}</p>
          <p className="text-sm text-[#6F6B63]">{showcase.area}</p>
          <p className="text-sm text-[#6F6B63]">{showcase.year}</p>
        </div>
        <div>
          <p className="text-sm leading-relaxed text-[#6F6B63]">
            {showcase.idea}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
