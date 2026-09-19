import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import HoursLocation from "@/components/HoursLocation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <HoursLocation />
      </main>
      <Footer />
    </>
  );
}
