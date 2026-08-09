"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { services } from "@/data";

export default function ServicesPage() {
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
            From idea
            <br />
            to reality.
          </motion.h1>
        </section>

        {/* Service List */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-36 lg:px-24">
          <div className="divide-y divide-[#D4D0C8]">
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
                  className="group block py-10 transition-colors hover:bg-[#EAE7E1]/50 md:py-14"
                >
                  <div className="flex items-start gap-6 md:gap-16">
                    <span className="font-serif text-xl text-[#A47B52]">
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h2 className="font-serif text-2xl tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-2 max-w-lg text-sm text-[#6F6B63] md:text-base">
                        {service.shortDescription}
                      </p>
                    </div>
                    <span className="hidden pt-1 text-sm text-[#6F6B63] transition-all duration-500 group-hover:translate-x-1 md:block">
                      Explore &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
