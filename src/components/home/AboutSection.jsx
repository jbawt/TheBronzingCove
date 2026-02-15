import "./AboutSection.css";

export function AboutSection() {
  return (
    <div className="flow-story" id="about">
      <div className="flow-story__testimonials">
        <p className="section-kicker">Testimonials</p>
        <h2>Trusted for life moments that matter.</h2>
        <blockquote>
          "My bridal tan was flawless in person and in every single photo."
        </blockquote>
        <blockquote>
          "Express option was perfect before prom and looked so natural."
        </blockquote>
        <blockquote>
          "Depth customization gave me the exact finish I asked for."
        </blockquote>
      </div>
      <div className="flow-story__about">
        <p className="section-kicker">About The Bronzing Cove</p>
        <h2>High-touch service with a modern beauty standard.</h2>
        <p>
          We focus on prep, precision spraying, and expert aftercare so your
          color applies evenly, develops beautifully, and fades smoothly. The
          experience is personal, polished, and built around your goals.
        </p>
        <a className="btn btn--primary" href="#home">
          Book Your Custom Glow
        </a>
      </div>
    </div>
  );
}
