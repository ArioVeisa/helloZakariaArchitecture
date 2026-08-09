"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+62 812-3456-7890", href: "tel:+6281234567890" },
  { icon: Phone, label: "WhatsApp", value: "+62 812-3456-7890", href: "https://wa.me/6281234567890" },
  { icon: Mail, label: "Email", value: "hello@arkastudio.com", href: "mailto:hello@arkastudio.com" },
  { icon: MapPin, label: "Address", value: "Jl. Darmo Permai No. 42, Surabaya", href: "#" },
];

export default function ContactPage() {
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
            Let&apos;s build
            <br />
            something
            <br />
            great.
          </motion.h1>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-36 lg:px-24">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#6F6B63]">
                Get in Touch
              </span>
              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 transition-colors hover:text-[#A47B52]"
                  >
                    <item.icon className="mt-0.5 h-5 w-5 text-[#A47B52]" />
                    <div>
                      <p className="text-xs text-[#6F6B63]">{item.label}</p>
                      <p className="text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              className="flex aspect-[4/3] items-center justify-center bg-[#EAE7E1] text-sm text-[#6F6B63]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Map — Google Maps Placeholder
            </motion.div>
          </div>

          {/* CTA */}
          <div className="mt-24 border-t border-[#D4D0C8] pt-16 text-center">
            <h2 className="font-serif text-2xl tracking-tight md:text-3xl">
              Prefer to share your project details?
            </h2>
            <div className="mt-6">
              <Link
                href="/request-consultation"
                className="inline-flex items-center gap-2 border-b-2 border-[#1A1A18] pb-1 font-serif text-lg tracking-tight transition-colors hover:text-[#A47B52] hover:border-[#A47B52]"
              >
                Request Consultation &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
