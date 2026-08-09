"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/data/site";

// Pages with a dark full-bleed hero: navbar starts transparent and turns solid on scroll
const OVERLAY_PATTERN = /^(\/|\/projects\/.+|\/contact)$/;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const overlay = OVERLAY_PATTERN.test(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  const light = overlay && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        light ? "text-paper" : "border-b border-ink/10 bg-bg/95 text-ink backdrop-blur-sm"
      )}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/ph-buildings-duotone.svg"
            alt=""
            width={26}
            height={26}
            className={cn("transition duration-500", light && "invert")}
          />
          <span className="font-display text-2xl tracking-wide">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "label-xs transition-colors hover:text-brass",
                pathname === link.href && "text-brass"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/request-consultation"
            className={cn(
              "label-xs border px-5 py-3 transition-colors",
              light
                ? "border-paper/60 hover:bg-paper hover:text-ink"
                : "border-ink/30 hover:bg-ink hover:text-paper"
            )}
          >
            Consultation
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              "h-px w-6 bg-current transition-transform duration-300",
              open && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-current transition-transform duration-300",
              open && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 -z-10 flex flex-col justify-between bg-night px-5 pb-10 pt-28 text-paper md:px-10 lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {[...navLinks, { href: "/testimonials", label: "Testimonials" }, { href: "/faq", label: "FAQ" }].map(
                (link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={close}
                      className="flex items-center justify-between border-b border-paper/10 py-4 font-display text-3xl"
                    >
                      {link.label}
                      <ArrowRight className="size-5" aria-hidden />
                    </Link>
                  </motion.div>
                )
              )}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/request-consultation"
                onClick={close}
                className="label-xs block border border-paper/40 px-5 py-4 text-center hover:bg-paper hover:text-ink"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
