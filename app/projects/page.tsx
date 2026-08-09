"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { projects, projectCategories } from "@/data";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />
      <main className="pt-32">
        {/* Hero */}
        <section className="mx-auto max-w-[1440px] px-6 pb-16 md:px-12 lg:px-24">
          <motion.h1
            className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Work
          </motion.h1>
          <motion.p
            className="mt-4 max-w-lg text-base text-[#6F6B63] md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            A collection of spaces we&apos;ve designed and built.
          </motion.p>

          {/* Filters */}
          <motion.div
            className="mt-12 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-sm tracking-wide transition-colors ${
                  activeFilter === cat
                    ? "border-b border-[#1A1A18] pb-0.5 text-[#1A1A18]"
                    : "text-[#6F6B63] hover:text-[#1A1A18]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </section>

        {/* Grid */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-36 lg:px-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block"
                  >
                    <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-[#EAE7E1]">
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="font-serif text-xl tracking-tight md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#6F6B63]">
                      {project.category} &mdash; {project.location} &mdash; {project.year}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
      <Footer />
    </>
  );
}
