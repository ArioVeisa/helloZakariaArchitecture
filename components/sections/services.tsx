"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { services } from "@/data";

export default function ServicesSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36 lg:px-24">
      <motion.span
        className="mb-16 block text-xs font-medium uppercase tracking-[0.3em] text-[#6F6B63]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        What We Do
      </motion.span>

      <div className="space-y-0 divide-y divide-[#D4D0C8]">
        {services.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group flex items-center justify-between py-8 transition-colors hover:bg-[#EAE7E1]/50 md:py-10"
            >
              <div className="flex items-baseline gap-6 md:gap-16">
                <span className="font-serif text-lg text-[#A47B52] md:text-xl">
                  {service.number}
                </span>
                <div>
                  <h3 className="font-serif text-2xl tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#6F6B63] md:text-base">
                    {service.shortDescription}
                  </p>
                </div>
              </div>
              <span className="hidden text-sm text-[#6F6B63] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#1A1A18] md:inline-block">
                &rarr;
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
