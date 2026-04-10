import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import MenuShowcase from "@/components/MenuShowcase";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <MenuShowcase />
      <Testimonials />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}
