import ScrollProgressBar from "@/components/ScrollProgressBar";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import TechMarquee from "@/components/home/TechMarquee";
import HackathonShowcase from "@/components/home/HackathonShowcase";
import ServicesSection from "@/components/home/ServicesSection";
import PricingSection from "@/components/home/PricingSection";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TeamPreview from "@/components/home/TeamPreview";
import ProcessSection from "@/components/home/ProcessSection";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata = {
  title: 'NEXUS | Premium AI & Full Stack Development',
  description: 'We build production-grade websites, mobile apps, and AI automation systems.',
};

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <ScrollProgressBar />

      {/* Decorative Grid Background */}
      <div 
        className="hero-grid-bg" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
          backgroundSize: "40px 40px",
          backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="heroLightSweep" />

      <HeroSection />
      <TrustSection />
      <TechMarquee />
      <HackathonShowcase />
      <ServicesSection />
      <PricingSection />
      <ProjectShowcase />
      <WhyChooseUs />
      <TeamPreview />
      <ProcessSection />
      <Testimonials />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
