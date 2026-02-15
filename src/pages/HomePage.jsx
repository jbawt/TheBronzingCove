import { HomeHero } from "../components/home/HomeHero";
import { SprayDivider } from "../components/home/SprayDivider";
import { ServiceSection } from "../components/home/ServiceSection";
import { GalleryDivider } from "../components/home/GalleryDivider";
import { GallerySection } from "../components/home/GallerySection";
import { SocialDivider } from "../components/home/SocialDivider";
import { AboutSection } from "../components/home/AboutSection";
import "../components/home/HomePage.css";

export function HomePage() {
  return (
    <div className="home-page" id="home">
      <div className="flow-orb flow-orb--one" />
      <div className="flow-orb flow-orb--two" />
      <div className="flow-orb flow-orb--three" />
      <HomeHero />
      <SprayDivider />
      <ServiceSection />
      <GalleryDivider />
      <GallerySection />
      <SocialDivider />
      <AboutSection />
    </div>
  );
}
