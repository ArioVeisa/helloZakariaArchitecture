"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { faqs } from "@/data";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 lg:px-24">
          <motion.h1
            className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Frequently
            <br />
            Asked
          </motion.h1>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-36 lg:px-24">
          <div className="max-w-2xl divide-y divide-[#D4D0C8]">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                className="group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <summary className="flex cursor-pointer items-center justify-between py-5 text-sm font-medium">
                  {faq.question}
                  <span className="ml-4 text-lg text-[#A47B52] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-[#6F6B63]">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>

          <div className="mt-16 border-t border-[#D4D0C8] pt-16 text-center">
            <h2 className="font-serif text-2xl tracking-tight md:text-3xl">
              Still have questions?
            </h2>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-b-2 border-[#1A1A18] pb-1 font-serif text-lg tracking-tight transition-colors hover:text-[#A47B52] hover:border-[#A47B52]"
              >
                Get in Touch &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
