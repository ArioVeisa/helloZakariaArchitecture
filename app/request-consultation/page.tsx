import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import ConsultationForm from "@/components/consultation-form";

export const metadata: Metadata = {
  title: "Request Consultation",
  description:
    "Tell us about your project — type, location, budget and timeline — and our team will contact you for a free consultation.",
  alternates: { canonical: "/request-consultation" },
};

export default function RequestConsultationPage() {
  return (
    <>
      <PageHeader
        label="Start a Project"
        title={
          <>
            Request a
            <br />
            consultation
          </>
        }
        description="Share your project details. We respond within one working day with an honest read on budget, timeline and next steps."
      />
      <section className="wrap border-t border-ink/10 py-16 md:py-24">
        <Reveal>
          <ConsultationForm />
        </Reveal>
      </section>
    </>
  );
}
