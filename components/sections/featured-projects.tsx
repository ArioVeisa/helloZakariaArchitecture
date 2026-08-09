"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { projects } from "@/data";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 4);

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36 lg:px-24">
      <motion.span
        className="mb-16 block text-xs font-medium uppercase tracking-[0.3em] text-[#6F6B63]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Selected Projects
      </motion.span>

      <div className="grid gap-1 gap-y-12 sm:grid-cols-2 lg:gap-8">
        {featured.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
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
      </div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 border-b border-[#1A1A18] pb-1.5 text-sm font-medium tracking-wide transition-colors hover:text-[#A47B52] hover:border-[#A47B52]"
        >
          View All Projects &rarr;
        </Link>
      </motion.div>
    </section>
  );
}
