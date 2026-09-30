import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import CourseSection from "@/components/home/CourseSection";
import LearningPaths from "@/components/home/LearningPaths";
import ProfessionalGrowth from "@/components/home/ProfessionalGrowth";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <CourseSection />
      <LearningPaths />
      <ProfessionalGrowth />
    </>
  );
}