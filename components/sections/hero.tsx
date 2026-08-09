"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#1A1A18] text-[#F5F3EF]">
      {/* Background placeholder — ganti dengan foto proyek */}
      <div className="absolute inset-0 bg-[#2A2824]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start gap-8 px-6 pt-24 md:px-12 lg:px-24">
        <motion.p
          className="text-xs font-medium uppercase tracking-[0.3em] text-[#A47B52]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Architecture &amp; Construction
        </motion.p>

        <motion.h1
          className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We design and build spaces made for the way you live.
        </motion.h1>

        <motion.div
          className="mt-6 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border-b border-[#F5F3EF] pb-1.5 text-sm font-medium tracking-wide transition-colors hover:text-[#A47B52] hover:border-[#A47B52]"
          >
            Explore Projects
          </Link>
          <Link
            href="/request-consultation"
            className="inline-flex items-center gap-2 border-b border-[#A47B52] pb-1.5 text-sm font-medium tracking-wide text-[#A47B52] transition-colors hover:text-[#C49A6C] hover:border-[#C49A6C]"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#F5F3EF]/60"
        >
          Scroll to explore
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
