"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Gallery({ images, title }: { images: string[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (dir: number) => {
      setOpen((current) => (current === null ? null : (current + dir + images.length) % images.length));
    },
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  return (
    <>
      <div className="wrap grid gap-4 md:grid-cols-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden ${i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
            aria-label={`Open image ${i + 1} of ${title} in lightbox`}
          >
            <Image
              src={src}
              alt={`${title} — photo ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-night/95"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} gallery`}
          >
            <div className="wrap flex items-center justify-between py-5 text-paper">
              <p className="label-xs">
                {String(open + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")} — ESC Close
              </p>
              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Close lightbox"
                className="label-xs border border-paper/40 px-4 py-2 transition-colors hover:bg-paper hover:text-ink"
              >
                Close
              </button>
            </div>

            <div className="relative flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={open}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[open]}
                    alt={`${title} — photo ${open + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center border border-paper/40 text-paper transition-colors hover:bg-paper hover:text-ink md:left-8"
              >
                <ArrowLeft className="size-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className="absolute right-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center border border-paper/40 text-paper transition-colors hover:bg-paper hover:text-ink md:right-8"
              >
                <ArrowRight className="size-5" aria-hidden />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
