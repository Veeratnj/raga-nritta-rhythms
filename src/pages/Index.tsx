import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Educators } from "@/components/Educators";
import { Courses } from "@/components/Courses";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

const Index = () => {
  return (
    <main className="min-h-screen font-inter">
      <NavBar />
      <Hero />
      <About />
      <Educators />
      <Courses />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
