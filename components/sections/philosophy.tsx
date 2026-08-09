"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function PhilosophySection() {
  return (
    <section className="bg-[#1A1A18] text-[#F5F3EF]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36 lg:px-24">
        <motion.span
          className="mb-12 block text-xs font-medium uppercase tracking-[0.3em] text-[#A47B52]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Our Philosophy
        </motion.span>

        <motion.h2
          className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          Design with purpose.
          <br />
          Built with precision.
        </motion.h2>

        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {[
            {
              title: "Quality",
              text: "We believe every project, regardless of scale, deserves the same level of care. From material selection to finishing details, nothing leaves our office without thorough review.",
            },
            {
              title: "Collaboration",
              text: "The best results come from true partnership. We involve you at every stage — your input shapes the design, not just a sign-off formality at the end.",
            },
            {
              title: "Precision",
              text: "Architecture is in the millimeters. Our documentation and construction oversight ensure that what we design is exactly what gets built.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <h3 className="font-serif text-xl tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#9E9A91]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border-b border-[#F5F3EF] pb-1.5 text-sm font-medium tracking-wide transition-colors hover:text-[#A47B52] hover:border-[#A47B52]"
          >
            About Our Studio &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
