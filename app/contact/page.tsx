import type { Metadata } from "next";
import ArrowLink from "@/components/arrow-link";
import Reveal from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ARKA Architects & Construction in Surabaya.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const contacts = [
    ["Phone", site.phone, `tel:${site.phone.replace(/[^+\d]/g, "")}`],
    ["WhatsApp", site.phone, `https://wa.me/${site.whatsapp}`],
    ["Email", site.email, `mailto:${site.email}`],
    ["Instagram", site.instagram, site.instagramUrl],
  ] as const;

  return (
    <>
      <section className="bg-night pb-20 pt-36 text-paper md:pt-48">
        <div className="wrap">
          <Reveal>
            <p className="label-xs text-brass">Contact</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
              Let&apos;s build
              <br />
              something
              <br />
              great.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="wrap grid gap-14 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Reveal>
            <p className="label-xs text-brass">Talk to Us</p>
          </Reveal>
          <div className="mt-8">
            {contacts.map(([label, value, href], i) => (
              <Reveal key={label} delay={0.05 * i}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-baseline justify-between border-t border-ink/15 py-5"
                >
                  <span className="label-xs text-stone">{label}</span>
                  <span className="text-lg transition-colors group-hover:text-brass md:text-xl">
                    {value}
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="flex items-baseline justify-between border-t border-b border-ink/15 py-5">
                <span className="label-xs text-stone">Address</span>
                <span className="max-w-[220px] text-right text-sm">{site.address}</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <ArrowLink href="/request-consultation" variant="solid" className="mt-10">
              Request Consultation
            </ArrowLink>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="h-full min-h-[420px] border border-ink/10">
            <iframe
              src={site.mapsEmbed}
              title="ARKA studio location on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full grayscale-[35%]"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
