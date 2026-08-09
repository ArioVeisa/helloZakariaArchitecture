"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { projects } from "@/data";

export default function ProjectDetailClient({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  if (!project) notFound();

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const prevImage = () =>
    setLightboxIdx((i) =>
      i === 0 ? project.images.length - 1 : i - 1
    );
  const nextImage = () =>
    setLightboxIdx((i) =>
      i === project.images.length - 1 ? 0 : i + 1
    );

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // Register key handler
  if (typeof window !== "undefined" && lightboxOpen) {
    window.addEventListener("keydown", handleKey);
  }

  return (
    <>
      <Navbar />
      <main className="pt-28">
        {/* Hero */}
        <section className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#6F6B63]">
              <span>{project.category}</span>
              <span>{project.location}</span>
              <span>{project.year}</span>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            className="relative mt-10 aspect-[16/9] overflow-hidden bg-[#EAE7E1] md:aspect-[21/9]"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>
        </section>

        {/* Project Info */}
        <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-28 lg:px-24">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#6F6B63]">
                Project Info
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ["Location", project.location],
                  ["Type", project.category],
                  ["Year", String(project.year)],
                  ["Area", project.area],
                  ["Service", project.service],
                  ["Status", project.status],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-[#D4D0C8] pb-3">
                    <dt className="text-[#6F6B63]">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#6F6B63]">
                The Story
              </h3>
              <div className="mt-4 space-y-8">
                {[
                  ["The Idea", project.idea],
                  ["Challenge", project.challenge],
                  ["Approach", project.approach],
                  ["Result", project.result],
                ].map(([title, text], i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <h4 className="font-serif text-lg tracking-tight">{title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#6F6B63]">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-36 lg:px-24">
          <h3 className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-[#6F6B63]">
            Gallery
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.images.map((img, i) => (
              <motion.button
                key={img}
                className="relative aspect-[4/3] overflow-hidden bg-[#EAE7E1] text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={img}
                  alt={`${project.title} - Image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.button>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-36 lg:px-24">
          <div className="border-t border-[#D4D0C8] pt-16 text-center">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Like what you see?
            </h2>
            <div className="mt-6">
              <Link
                href="/request-consultation"
                className="inline-flex items-center gap-2 border-b-2 border-[#1A1A18] pb-1 font-serif text-lg tracking-tight transition-colors hover:text-[#A47B52] hover:border-[#A47B52]"
              >
                Start Your Project &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A18]/95">
          <button
            onClick={closeLightbox}
            className="absolute right-6 top-6 text-white/70 hover:text-white"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white/70 hover:text-white md:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <div className="relative mx-16 aspect-[4/3] w-full max-w-5xl">
            <Image
              src={project.images[lightboxIdx]}
              alt={`${project.title} - Image ${lightboxIdx + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white/70 hover:text-white md:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          <p className="absolute bottom-6 text-sm text-white/50">
            {lightboxIdx + 1} / {project.images.length}
          </p>
        </div>
      )}
    </>
  );
}
