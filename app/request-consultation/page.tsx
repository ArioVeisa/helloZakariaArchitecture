"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function RequestConsultationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center px-6 pt-32">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Thank you.
            </h1>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[#6F6B63]">
              We&apos;ve received your project details. Our team will contact you shortly.
            </p>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-36 lg:px-24">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Tell us about your project.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[#6F6B63]">
                Share some details and we&apos;ll get back to you within 24 hours to discuss
                how we can help bring your vision to life.
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              className="space-y-8"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm text-[#6F6B63]">
                    Name <span className="text-[#A47B52]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border-b border-[#D4D0C8] bg-transparent py-3 text-sm outline-none transition-colors focus:border-[#1A1A18]"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm text-[#6F6B63]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-[#D4D0C8] bg-transparent py-3 text-sm outline-none transition-colors focus:border-[#1A1A18]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm text-[#6F6B63]">
                    Phone / WhatsApp <span className="text-[#A47B52]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full border-b border-[#D4D0C8] bg-transparent py-3 text-sm outline-none transition-colors focus:border-[#1A1A18]"
                    placeholder="+62 812-3456-7890"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm text-[#6F6B63]">
                    Project Type <span className="text-[#A47B52]">*</span>
                  </label>
                  <select
                    required
                    className="w-full border-b border-[#D4D0C8] bg-transparent py-3 text-sm outline-none transition-colors focus:border-[#1A1A18]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="interior">Interior</option>
                    <option value="renovation">Renovation</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm text-[#6F6B63]">
                    Location <span className="text-[#A47B52]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border-b border-[#D4D0C8] bg-transparent py-3 text-sm outline-none transition-colors focus:border-[#1A1A18]"
                    placeholder="City / Area"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm text-[#6F6B63]">
                    Estimated Budget <span className="text-[#A47B52]">*</span>
                  </label>
                  <select
                    required
                    className="w-full border-b border-[#D4D0C8] bg-transparent py-3 text-sm outline-none transition-colors focus:border-[#1A1A18]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select range
                    </option>
                    <option value="under-500m">Under Rp 500M</option>
                    <option value="500m-1b">Rp 500M - 1B</option>
                    <option value="1b-3b">Rp 1B - 3B</option>
                    <option value="3b-10b">Rp 3B - 10B</option>
                    <option value="above-10b">Above Rp 10B</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm text-[#6F6B63]">
                    Project Timeline <span className="text-[#A47B52]">*</span>
                  </label>
                  <select
                    required
                    className="w-full border-b border-[#D4D0C8] bg-transparent py-3 text-sm outline-none transition-colors focus:border-[#1A1A18]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select timeline
                    </option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-3-months">1 - 3 months</option>
                    <option value="3-6-months">3 - 6 months</option>
                    <option value="6-12-months">6 - 12 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm text-[#6F6B63]">
                    Tell us about your project{" "}
                    <span className="text-[#A47B52]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full border-b border-[#D4D0C8] bg-transparent py-3 text-sm outline-none transition-colors focus:border-[#1A1A18]"
                    placeholder="Describe your project, your vision, and any specific requirements..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 border-b-2 border-[#1A1A18] pb-1 font-serif text-lg tracking-tight transition-colors hover:text-[#A47B52] hover:border-[#A47B52]"
              >
                Request Consultation &rarr;
              </button>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
