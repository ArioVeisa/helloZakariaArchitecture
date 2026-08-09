"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { team } from "@/data";

export default function AboutPage() {
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
            We design.
            <br />
            We build.
            <br />
            We care.
          </motion.h1>
        </section>

        {/* Who We Are */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-28 lg:px-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#6F6B63]">
                Who We Are
              </span>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-[#6F6B63]">
                Arka Studio is an architecture and construction firm based in Surabaya, Indonesia. 
                Founded in 2018, we bring together architects, interior designers, and construction 
                professionals under one roof — eliminating the gap between design intent and built reality.
              </p>
            </motion.div>
            <motion.div
              className="relative aspect-[4/3] bg-[#EAE7E1]"
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex h-full items-center justify-center text-sm text-[#6F6B63]">
                Studio Photo
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#1A1A18] py-24 md:py-28">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                ["50+", "Projects"],
                ["8+", "Years Experience"],
                ["20+", "Team Members"],
                ["12", "Cities"],
              ].map(([num, label], i) => (
                <motion.div
                  key={label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p className="font-serif text-4xl text-[#F5F3EF] md:text-5xl lg:text-6xl">
                    {num}
                  </p>
                  <p className="mt-2 text-sm text-[#9E9A91]">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-28 lg:px-24">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#6F6B63]">
              Our Philosophy
            </span>
            <p className="mt-4 text-lg leading-relaxed text-[#6F6B63]">
              We believe architecture is not about style — it&apos;s about response. 
              Every site, every climate, every client brings a unique set of conditions. 
              Our job is to listen carefully and design with precision. We don&apos;t impose 
              a signature look; we help each project find its own.
            </p>
          </motion.div>
        </section>

        {/* Team */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-36 lg:px-24">
          <span className="mb-12 block text-xs font-medium uppercase tracking-[0.3em] text-[#6F6B63]">
            Our Team
          </span>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-[#EAE7E1]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-sm font-medium">{member.name}</h3>
                <p className="text-sm text-[#6F6B63]">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
