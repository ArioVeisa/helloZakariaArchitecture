import Link from "next/link";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-night text-paper/70">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5 text-paper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/ph-buildings-duotone.svg" alt="" width={28} height={28} className="invert" />
            <span className="font-display text-3xl tracking-wide">{site.name}</span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Architecture &amp; construction studio in Surabaya. We design and build spaces made
            for the way you live.
          </p>
        </div>

        <nav className="md:col-span-2" aria-label="Services">
          <p className="label-xs text-paper/40">Services</p>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition-colors hover:text-brass">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="md:col-span-2" aria-label="Site">
          <p className="label-xs text-paper/40">Studio</p>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["/projects", "Projects"],
              ["/about", "About"],
              ["/process", "Process"],
              ["/faq", "FAQ"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-brass">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="label-xs text-paper/40">Contact</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={`https://wa.me/${site.whatsapp}`} className="transition-colors hover:text-brass">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-brass">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brass"
              >
                Instagram
              </a>
            </li>
            <li className="pt-2 text-paper/50">{site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {site.legalName}. All rights reserved.</p>
          <p>Architecture · Interior · Construction · Renovation</p>
        </div>
      </div>
    </footer>
  );
}
