import Image from "next/image";
import ArrowLink from "@/components/arrow-link";
import Hero from "@/components/home/hero";
import ServiceList from "@/components/home/service-list";
import ProjectCard from "@/components/project-card";
import TestimonialSlider from "@/components/testimonial-slider";
import Reveal from "@/components/reveal";
import { featuredProjects } from "@/data/projects";
import { processSteps } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 01 / Introduction */}
      <section className="wrap py-24 md:py-36">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="label-xs text-brass">01 / Introduction</p>
          </Reveal>
          <div className="md:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
                We turn ideas into spaces.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-lg text-stone">
                From architectural design to construction, we bring every stage of your
                project together under one roof.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <ServiceList />

      {/* Selected Projects */}
      <section className="wrap py-20 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-5xl leading-none md:text-7xl">
              Selected
              <br />
              projects
            </h2>
            <ArrowLink href="/projects" variant="underline" className="pb-2 text-stone">
              All Projects
            </ArrowLink>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={0.1 * (i % 2)} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* About / Philosophy */}
      <section className="bg-night py-24 text-paper md:py-36">
        <div className="wrap">
          <Reveal>
            <p className="label-xs text-brass">03 / Philosophy</p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
              Design with purpose. Built with precision.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              ["Quality", "Every detail is drawn, checked and built to a standard we would accept in our own homes."],
              ["Collaboration", "Architects, builders and clients at one table — decisions are fast and nothing is lost in translation."],
              ["Attention to detail", "From structure to the last door handle, the small things are what make a space feel right."],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={0.1 * i}>
                <h3 className="label-xs text-brass">{String(i + 1).padStart(2, "0")}</h3>
                <p className="mt-3 font-display text-2xl">{title}</p>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <ArrowLink href="/about" variant="underline-light" className="mt-14">
              About Our Studio
            </ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* Process preview */}
      <section className="wrap py-24 md:py-32">
        <Reveal>
          <p className="label-xs text-brass">04 / Process</p>
        </Reveal>
        <div className="mt-10 grid gap-x-8 gap-y-6 md:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={0.08 * i}>
              <p className="label-xs text-stone">{step.number}</p>
              <p className="mt-3 font-display text-2xl">{step.title}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <ArrowLink href="/process" variant="underline" className="mt-12">
            Explore Our Process
          </ArrowLink>
        </Reveal>
      </section>

      {/* Project Showcase */}
      <section className="relative h-[70vh] overflow-hidden md:h-[85vh]">
        <Image
          src="/images/projects/villa-dusk.jpg"
          alt="Villa Horizon at dusk — ARKA residential project in Bali"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/80 to-transparent" />
        <div className="wrap absolute inset-x-0 bottom-0 pb-14 text-paper">
          <Reveal>
            <p className="label-xs text-brass">Featured Work</p>
            <p className="mt-4 font-display text-3xl md:text-5xl">Villa Horizon — Bali</p>
            <ArrowLink href="/projects/villa-horizon" variant="light" className="mt-6 px-6 py-3">
              View Project
            </ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="wrap py-24 md:py-32">
        <Reveal>
          <p className="label-xs text-brass">05 / Testimonials</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl">
            What our clients say
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-14">
          <TestimonialSlider />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t border-ink/10">
        <div className="wrap py-24 text-center md:py-36">
          <Reveal>
            <h2 className="font-display text-5xl leading-none md:text-8xl">
              Have a project
              <br />
              in mind?
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-md text-stone">
              Tell us about your project and let&apos;s explore what we can build together.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <ArrowLink href="/request-consultation" variant="solid" className="mt-12">
              Start a Project
            </ArrowLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
