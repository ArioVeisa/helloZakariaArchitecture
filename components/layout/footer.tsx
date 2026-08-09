import Link from "next/link";

const serviceLinks = [
  { name: "Architecture", href: "/services/architecture" },
  { name: "Interior", href: "/services/interior-design" },
  { name: "Construction", href: "/services/construction" },
  { name: "Renovation", href: "/services/renovation" },
];

const pageLinks = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Process", href: "/process" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "WhatsApp", href: "#" },
  { name: "Email", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#D4D0C8] bg-[#F5F3EF]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center">
              <img
                src="/logo/arka-logo.svg"
                alt="Arka Studio"
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6F6B63]">
              Architecture &amp; construction studio based in Surabaya, Indonesia.
              We design and build spaces made for the way you live.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#6F6B63]">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#1A1A18] transition-colors hover:text-[#A47B52]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#6F6B63]">
              Pages
            </h4>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#1A1A18] transition-colors hover:text-[#A47B52]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#6F6B63]">
              Connect
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#1A1A18] transition-colors hover:text-[#A47B52]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-[#D4D0C8] pt-6">
          <p className="text-xs text-[#6F6B63]">
            &copy; {new Date().getFullYear()} Arka Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
