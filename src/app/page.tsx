import { Preloader } from "@/components/Preloader";
import { SequenceScroll } from "@/components/SequenceScroll";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsBento } from "@/components/ProjectsBento";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-neutral-950">
      <Preloader />
      <Navbar />
      
      <SequenceScroll />

      <div className="-mt-[100vh] relative z-10 bg-neutral-950 pt-[100vh]">
        <AboutSection />
        <ExperienceSection />
        <ProjectsBento />
        <StatsSection />
        <TestimonialsSlider />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}
