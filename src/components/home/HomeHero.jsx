import "./HomeHero.css";

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
      <div className="flow-hero__actions">
        <a className="btn btn--primary" href="#services">
          View Services
        </a>
        <a className="btn btn--ghost" href="#gallery">
          See Gallery
        </a>
      </div>
    </div>
  );
}
