import "./HomeHero.css";
import { HeroContact } from "./HeroContact";

export function HomeHero() {
  return (
    <div className="flow-hero">
      <p className="section-kicker">Luxury Sunless Tanning Studio</p>
      <h1>Custom spray tans made modern.</h1>
      <p className="flow-hero__lead">
        The Bronzing Cove is Central Alberta's premier spray tanning studio, combining precision artistry with premium formulas to
        create natural, sun-kissed glow for everyday confidence and special events. Serving Red Deer, Lacombe, Blackfalds, and surrounding Central Alberta communities.
      </p>
      <HeroContact />
    </div>
  );
}
