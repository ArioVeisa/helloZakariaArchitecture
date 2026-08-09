"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import Reveal from "@/components/reveal";

export default function ServiceList() {
  const [active, setActive] = useState(0);

  return (
    <section className="wrap py-20 md:py-32" id="services">
      <Reveal>
        <p className="label-xs text-brass">02 / What We Do</p>
        <h2 className="mt-6 font-display text-4xl md:text-6xl">
          What we do
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          {services.slice(0, 4).map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <Link
                href={`/services/${service.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex items-baseline gap-6 border-t border-ink/15 py-8 transition-colors"
              >
                <span className="label-xs text-stone">{service.number}</span>
                <div className="flex-1">
                  <h3 className="font-display text-3xl transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-stone">{service.tagline}</p>
                </div>
                <span className="flex size-11 shrink-0 items-center justify-center border border-ink/20 text-stone transition-all duration-300 group-hover:translate-x-1 group-hover:border-brass group-hover:text-brass">
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
          <div className="border-t border-ink/15" />
        </div>

        <div className="relative hidden md:col-span-5 md:block">
          <div className="sticky top-28 aspect-[4/5] overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={services[active].slug}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={services[active].image}
                  alt={services[active].title}
                  fill
                  sizes="(max-width: 768px) 0vw, 40vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
