"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

const fieldClass =
  "w-full border-b border-ink/25 bg-transparent py-3 text-base outline-none transition-colors placeholder:text-stone/60 focus:border-brass";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="py-20 text-center">
        <p className="label-xs text-brass">Request Received</p>
        <h1 className="mt-6 font-display text-6xl md:text-7xl">Thank you.</h1>
        <p className="mx-auto mt-6 max-w-md text-stone">
          We&apos;ve received your project details. Our team will contact you shortly.
        </p>
        <Link href="/" className="label-xs mt-10 inline-block border border-ink/30 px-7 py-4 transition-colors hover:bg-ink hover:text-paper">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    // ponytail: mock submit — wire POST /consultations when backend exists
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid gap-x-8 gap-y-10 md:grid-cols-2"
    >
      <label className="block">
        <span className="label-xs text-stone">Name *</span>
        <input name="name" required autoComplete="name" placeholder="Your full name" className={fieldClass} />
      </label>
      <label className="block">
        <span className="label-xs text-stone">Email</span>
        <input name="email" type="email" autoComplete="email" placeholder="you@email.com" className={fieldClass} />
      </label>
      <label className="block">
        <span className="label-xs text-stone">Phone / WhatsApp *</span>
        <input name="phone" required type="tel" autoComplete="tel" placeholder="+62" className={fieldClass} />
      </label>
      <label className="block">
        <span className="label-xs text-stone">Project Type *</span>
        <select name="projectType" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select project type
          </option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Interior</option>
          <option>Renovation</option>
        </select>
      </label>
      <label className="block">
        <span className="label-xs text-stone">Location *</span>
        <input name="location" required placeholder="City of the project" className={fieldClass} />
      </label>
      <label className="block">
        <span className="label-xs text-stone">Estimated Budget *</span>
        <select name="budget" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select range
          </option>
          <option>Under IDR 500 million</option>
          <option>IDR 500 million – 1 billion</option>
          <option>IDR 1 – 3 billion</option>
          <option>Over IDR 3 billion</option>
        </select>
      </label>
      <label className="block md:col-span-2">
        <span className="label-xs text-stone">Project Timeline *</span>
        <select name="timeline" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            When do you want to start?
          </option>
          <option>Immediately</option>
          <option>Within 3 months</option>
          <option>Within 6 months</option>
          <option>Still exploring</option>
        </select>
      </label>
      <label className="block md:col-span-2">
        <span className="label-xs text-stone">Tell us about your project *</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Site size, rooms you need, style you like…"
          className={`${fieldClass} resize-none`}
        />
      </label>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="label-xs inline-flex items-center gap-3 bg-ink px-10 py-5 text-paper transition-colors hover:bg-brass"
        >
          Request Consultation <ArrowRight className="size-4" aria-hidden />
        </button>
        <p className="mt-4 text-xs text-stone">
          Prefer chat?{" "}
          <a href={`https://wa.me/${site.whatsapp}`} className="underline underline-offset-2 hover:text-brass">
            Message us on WhatsApp
          </a>
        </p>
      </div>
    </form>
  );
}
