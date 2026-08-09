"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "Understanding your needs, budget, and vision. We visit your site, discuss your requirements, and establish the project brief together.",
    details: [
      "Initial consultation",
      "Site visit and analysis",
      "Budget and timeline discussion",
      "Project brief development",
    ],
  },
  {
    number: "02",
    title: "Concept",
    desc: "Developing the initial architectural direction. We explore multiple design approaches and present concepts for your feedback.",
    details: [
      "Design research and inspiration",
      "Concept sketches and massing studies",
      "Preliminary floor plans",
      "Client review and selection",
    ],
  },
  {
    number: "03",
    title: "Design",
    desc: "Detailed drawings, material selection, and 3D visualization. Every element is specified before construction begins.",
    details: [
      "Architectural drawings",
      "Structural and MEP coordination",
      "Material and finish selection",
      "3D visualization and walkthrough",
    ],
  },
  {
    number: "04",
    title: "Construction",
    desc: "Turning the design into reality. Our team manages the entire construction process with rigorous quality control.",
    details: [
      "Procurement and scheduling",
      "Site preparation and foundation",
      "Structure and enclosure",
      "Interior finishes and millwork",
    ],
  },
  {
    number: "05",
    title: "Handover",
    desc: "Final inspection, snagging, and project completion. We walk you through every detail of your new space.",
    details: [
      "Quality inspection",
      "Snag list resolution",
      "Systems demonstration",
      "Project documentation handover",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        {/* Hero */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 lg:px-24">
          <motion.h1
            className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            How We
            <br />
            Work
          </motion.h1>
          <motion.p
            className="mt-6 max-w-lg text-base text-[#6F6B63] md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Every project follows a proven process — from initial conversation to final handover. 
            Here&apos;s how we bring your vision to life.
          </motion.p>
        </section>

        {/* Timeline */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-36 lg:px-24">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="grid gap-8 md:grid-cols-2 md:gap-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <div>
                  <span className="font-serif text-5xl text-[#A47B52] md:text-7xl lg:text-8xl">
                    {step.number}
                  </span>
                  <h2 className="mt-4 font-serif text-2xl tracking-tight md:text-3xl">
                    {step.title}
                  </h2>
                </div>
                <div>
                  <p className="mb-6 text-base leading-relaxed text-[#6F6B63]">
                    {step.desc}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-3 text-sm text-[#6F6B63]"
                      >
                        <span className="h-px w-3 bg-[#A47B52]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-36 lg:px-24">
          <div className="border-t border-[#D4D0C8] pt-16 text-center">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Ready to begin?
            </h2>
            <div className="mt-6">
              <Link
                href="/request-consultation"
                className="inline-flex items-center gap-2 border-b-2 border-[#1A1A18] pb-1 font-serif text-lg tracking-tight transition-colors hover:text-[#A47B52] hover:border-[#A47B52]"
              >
                Start a Project &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
