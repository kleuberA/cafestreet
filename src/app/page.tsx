import Avaliations from "@/components/avaliations/Avaliations";
import SpecialMenu from "@/components/menusection/SpecialMenu";
import Delivery from "@/components/delivery/Delivery";
import Hero from "@/components/herosection/hero";
import Footer from "@/components/footer/Footer";
import AboutUs from "@/components/about/about";

export default function Home() {
  return (
    <div>
      <Hero />
      <Delivery />
      <AboutUs />
      <SpecialMenu />
      <Avaliations />
      <Footer />
    </div>
  );
}
