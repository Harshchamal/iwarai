import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Products from "@/components/Products";
import AppPreview from "@/components/AppPreview";
import Technology from "@/components/Technology";
import Benefits from "@/components/Benefits";
import Roadmap from "@/components/Roadmap";
import Waitlist from "@/components/Waitlist";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Problem />
        <Solution />
        <Features />
        <Products />
        <AppPreview />
        <Technology />
        <Benefits />
        <Roadmap />
        <Waitlist />
        <Contact />
      </main>
      <Footer />
    </>
  );
}