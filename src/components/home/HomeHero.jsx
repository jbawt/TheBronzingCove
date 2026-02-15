import "./HomeHero.css";
import { HeroContact } from "./HeroContact";

export function HomeHero() {
  return (
    <div className="flow-hero">
      <p className="section-kicker">Luxury Sunless Tanning Studio</p>
      <h1>Custom spray tans made modern.</h1>
      <p className="flow-hero__lead">
        The Bronzing Cove combines precision artistry with premium formulas to
        create skin-finished glow for everyday confidence and event-level
        moments.
      </p>
      <HeroContact />
    </div>
  );
}
