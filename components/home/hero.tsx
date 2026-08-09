import Image from "next/image";
import { ArrowDown } from "lucide-react";
import ArrowLink from "@/components/arrow-link";
import Reveal from "@/components/reveal";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-night">
      <div className="animate-kenburns absolute inset-0">
        <Image
          src="/images/projects/hero-main.jpg"
          alt="Modern house designed and built by ARKA"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-night/40" />

      <div className="wrap relative pb-20 pt-40 text-paper md:pb-28">
        <Reveal>
          <p className="label-xs text-brass">Architecture &amp; Construction</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl lg:text-[104px]">
            We build spaces that matter.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-md text-base text-paper/80 md:text-lg">
            We design and build spaces made for the way you live.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <ArrowLink href="/projects" variant="light">
              Explore Projects
            </ArrowLink>
            <ArrowLink href="/request-consultation" variant="paper">
              Start a Project
            </ArrowLink>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <p className="label-xs flex items-center gap-2 text-paper/60">
          Scroll to explore <ArrowDown className="size-3.5 animate-bounce" aria-hidden />
        </p>
      </div>
    </section>
  );
}
