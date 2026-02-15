import "./FullGallery.css";

const galleryImages = [
  "Bridal Glow Placeholder",
  "Prom Glow Placeholder",
  "Vacation Tan Placeholder",
  "Photoshoot Glow Placeholder",
  "Event Glow Placeholder",
  "Custom Bronze Placeholder",
  "Wedding Party Placeholder",
  "Graduation Glow Placeholder",
  "Formal Event Placeholder",
  "Natural Glow Placeholder",
  "Evening Glow Placeholder",
  "Special Occasion Placeholder"
];

export function FullGallery() {
  return (
    <section className="full-gallery">
      <div className="full-gallery__header">
        <p className="section-kicker">Gallery</p>
        <h2>Results that glow in every light.</h2>
        <p className="full-gallery__intro">
          Browse our gallery to see the beautiful, natural-looking results we create
          for clients across Central Alberta.
        </p>
      </div>
      <div className="full-gallery__grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="full-gallery__photo">
            {image}
          </div>
        ))}
      </div>
    </section>
  );
}
