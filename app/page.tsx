import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import IntroductionSection from "@/components/sections/introduction";
import ServicesSection from "@/components/sections/services";
import FeaturedProjects from "@/components/sections/featured-projects";
import PhilosophySection from "@/components/sections/philosophy";
import ProcessPreview from "@/components/sections/process-preview";
import ProjectShowcase from "@/components/sections/project-showcase";
import TestimonialsSection from "@/components/sections/testimonials";
import CTASection from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntroductionSection />
        <ServicesSection />
        <FeaturedProjects />
        <PhilosophySection />
        <ProcessPreview />
        <ProjectShowcase />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
