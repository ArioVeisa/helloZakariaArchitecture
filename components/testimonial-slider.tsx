"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <div>
      <div aria-live="polite" className="min-h-64 md:min-h-52">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
          >
            <blockquote className="max-w-4xl font-display text-2xl leading-snug md:text-4xl">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-8 text-sm">
              <span className="font-medium">{t.name}</span>
              <span className="text-stone"> — {t.project}, {t.location}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center gap-6">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
            className="flex size-11 items-center justify-center border border-ink/20 transition-colors hover:bg-ink hover:text-paper"
          >
            <ArrowLeft className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => setIndex((index + 1) % testimonials.length)}
            aria-label="Next testimonial"
            className="flex size-11 items-center justify-center border border-ink/20 transition-colors hover:bg-ink hover:text-paper"
          >
            <ArrowRight className="size-4" aria-hidden />
          </button>
        </div>
        <p className="label-xs text-stone">
          {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
