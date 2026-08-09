import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-night min-h-svh text-paper">
      <div className="wrap flex min-h-svh flex-col items-start justify-center pb-24 pt-32">
        <p className="label-xs text-brass">404</p>
        <h1 className="mt-6 font-display text-6xl leading-none md:text-8xl">
          This space
          <br />
          doesn&apos;t exist.
        </h1>
        <p className="mt-6 max-w-md text-paper/70">
          The page you&apos;re looking for was moved or never built. Let&apos;s take you back to
          solid ground.
        </p>
        <div className="mt-10 flex gap-4">
          <Link href="/" className="label-xs border border-paper/50 px-7 py-4 transition-colors hover:bg-paper hover:text-ink">
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="label-xs inline-flex items-center gap-2 px-7 py-4 text-paper/70 transition-colors hover:text-brass"
          >
            View Projects <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
