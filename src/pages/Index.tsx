import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Educators } from "@/components/Educators";
import { Courses } from "@/components/Courses";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen font-inter">
      <Hero />
      <About />
      <Educators />
      <Courses />
      <Footer />
    </main>
  );
};

export default Index;
