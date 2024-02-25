import AboutUs from "@/components/about/about";
import Delivery from "@/components/delivery/Delivery";
import Hero from "@/components/herosection/hero";
import SpecialMenu from "@/components/menusection/SpecialMenu";

export default function Home() {
  return (
    <div>
      <Hero />
      <Delivery />
      <AboutUs />
      <SpecialMenu />
    </div>
  );
}
