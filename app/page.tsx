import Image from "next/image";
import Menu from "./components/Menu";
import HeroSection from "./components/HeroSection";
import VRSection from "./components/VRSection";
import CreationsSection from "./components/CreationsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Menu />
      <HeroSection />
      <VRSection />
      <CreationsSection />
      <Footer/>
    </main>
  );
}
