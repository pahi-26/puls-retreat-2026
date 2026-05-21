import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import Themes from "@/components/Themes";
import Timeline from "@/components/Timeline";
import Venue from "@/components/Venue";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Themes />
      <Timeline />
      <Speakers />
      <Venue />
      <Sponsors />
      <Footer />
    </main>
  );
}
