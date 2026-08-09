"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="bg-[#EAE7E1]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36 lg:px-24">
        <motion.span
          className="mb-16 block text-xs font-medium uppercase tracking-[0.3em] text-[#6F6B63]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.span>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-3xl"
            >
              <p className="font-serif text-2xl leading-relaxed tracking-tight md:text-3xl lg:text-4xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-8">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-sm text-[#6F6B63]">
                  {t.project} &mdash; {t.location}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-12 flex gap-3">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1A1A18] transition-colors hover:bg-[#1A1A18] hover:text-[#F5F3EF]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1A1A18] transition-colors hover:bg-[#1A1A18] hover:text-[#F5F3EF]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
