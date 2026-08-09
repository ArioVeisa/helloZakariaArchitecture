"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="wrap flex min-h-svh flex-col items-start justify-center pb-24 pt-32">
      <p className="label-xs text-brass">Error</p>
      <h1 className="mt-6 font-display text-5xl md:text-7xl">Something went wrong.</h1>
      <p className="mt-6 max-w-md text-stone">
        An unexpected error occurred. Try again — if it keeps happening, contact us on WhatsApp.
      </p>
      <button
        type="button"
        onClick={reset}
        className="label-xs mt-10 bg-ink px-8 py-4 text-paper transition-colors hover:bg-brass"
      >
        Try Again
      </button>
    </section>
  );
}
