import type { Metadata } from "next";
import Image from "next/image";
import ArrowLink from "@/components/arrow-link";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import { team } from "@/data/team";
import { stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "ARKA is an architecture and construction studio in Surabaya. We design, we build, we care.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title={
          <>
            We design.
            <br />
            We build.
            <br />
            We care.
          </>
        }
      />

      {/* Who We Are */}
      <section className="wrap grid gap-10 pb-20 md:grid-cols-2 md:pb-28">
        <Reveal>
          <p className="label-xs text-brass">Who We Are</p>
          <p className="mt-6 max-w-lg text-lg leading-relaxed">
            ARKA is an architecture and construction studio based in Surabaya. Since 2018 we
            have designed and built homes, offices, villas and public spaces across 12 cities
            — always with one team accountable from first sketch to final handover.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/misc/blueprints.jpg"
              alt="ARKA architects reviewing drawings"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Philosophy */}
      <section className="bg-night py-20 text-paper md:py-28">
        <div className="wrap">
          <Reveal>
            <p className="label-xs text-brass">Our Philosophy</p>
            <p className="mt-6 max-w-3xl font-display text-3xl leading-snug md:text-5xl">
              Architecture should serve the people inside it — quietly, precisely and for a
              very long time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="wrap grid grid-cols-2 gap-10 py-20 md:grid-cols-4 md:py-28">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={0.08 * i}>
            <p className="font-display text-6xl md:text-7xl">{stat.value}</p>
            <p className="label-xs mt-3 text-stone">{stat.label}</p>
          </Reveal>
        ))}
      </section>

      {/* Team */}
      <section className="wrap border-t border-ink/10 py-20 md:py-28">
        <Reveal>
          <p className="label-xs text-brass">Our Team</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl">The people behind the work</h2>
        </Reveal>
        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={0.08 * i}>
              <div className="group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <p className="absolute inset-x-0 bottom-0 translate-y-full bg-night/80 p-4 text-xs leading-relaxed text-paper backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                    {member.bio}
                  </p>
                </div>
                <h3 className="mt-4 font-display text-2xl">{member.name}</h3>
                <p className="label-xs mt-1 text-stone">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Expertise + CTA */}
      <section className="wrap border-t border-ink/10 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <p className="label-xs text-brass">Our Expertise</p>
            <ul className="mt-6 space-y-4">
              {["Residential architecture", "Commercial buildings", "Interior design", "Renovation", "Construction management"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-4 font-display text-2xl md:text-3xl">
                    <span aria-hidden className="h-px w-6 bg-brass" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex h-full flex-col justify-end">
              <p className="max-w-md text-stone">
                Every project gets a senior architect, a project manager and a site manager —
                from day one to handover.
              </p>
              <ArrowLink href="/request-consultation" variant="solid" className="mt-8 w-fit">
                Start a Project
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
