import { useEffect, useState } from "react";
import "./GallerySection.css";

const gallerySlides = [
  "Bridal Glow Placeholder",
  "Prom Glow Placeholder",
  "Vacation Tan Placeholder",
  "Photoshoot Glow Placeholder",
  "Event Glow Placeholder",
  "Custom Bronze Placeholder"
];

export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gallerySlides.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const previousSlide = (currentSlide - 1 + gallerySlides.length) % gallerySlides.length;
  const nextSlide = (currentSlide + 1) % gallerySlides.length;

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % gallerySlides.length);

  return (
    <div className="flow-gallery" id="gallery">
      <div className="flow-gallery__copy">
        <p className="section-kicker">Gallery</p>
        <h2>Results that glow in every light.</h2>
      </div>
      <div className="flow-gallery__carousel">
        <div className="flow-gallery__ornament flow-gallery__ornament--left" aria-hidden="true">
          <svg viewBox="0 0 360 120" role="img">
            <path d="M8 60h242" />
            <path d="M32 40h178" />
            <path d="M48 80h160" />
            <circle cx="276" cy="60" r="16" />
            <path d="M276 36v-8m0 64v-8m24-24h8m-64 0h8" />
            <path d="M292 44l6-6m-44 44l6-6m0-32l-6-6m44 44l-6-6" />
          </svg>
        </div>
        <button className="flow-gallery__control" type="button" onClick={goToPrevious} aria-label="Previous gallery slide">
          ‹
        </button>
        <div className="flow-gallery__viewport">
          <div className="flow-gallery__stage">
            <div className="flow-photo flow-photo--peek" aria-hidden="true">
              {gallerySlides[previousSlide]}
            </div>
            <div className="flow-photo flow-photo--focus">{gallerySlides[currentSlide]}</div>
            <div className="flow-photo flow-photo--peek" aria-hidden="true">
              {gallerySlides[nextSlide]}
            </div>
          </div>
        </div>
        <button className="flow-gallery__control" type="button" onClick={goToNext} aria-label="Next gallery slide">
          ›
        </button>
        <div className="flow-gallery__ornament flow-gallery__ornament--right" aria-hidden="true">
          <svg viewBox="0 0 360 120" role="img">
            <path d="M8 60h242" />
            <path d="M32 40h178" />
            <path d="M48 80h160" />
            <circle cx="276" cy="60" r="16" />
            <path d="M276 36v-8m0 64v-8m24-24h8m-64 0h8" />
            <path d="M292 44l6-6m-44 44l6-6m0-32l-6-6m44 44l-6-6" />
          </svg>
        </div>
      </div>
      <div className="flow-gallery__dots" aria-label="Gallery slide selectors">
        {gallerySlides.map((slide, index) => (
          <button
            key={slide}
            type="button"
            className={`flow-gallery__dot ${currentSlide === index ? "is-active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
