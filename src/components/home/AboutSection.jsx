import { useEffect, useState } from "react";
import "./AboutSection.css";
import logoMark from "../../assets/Logo-notext-transparent.png";

export function AboutSection() {
  const testimonials = [
    {
      name: "Amber L.",
      username: "@amberleigh",
      date: "2d",
      text: "My bridal tan was flawless in person and in every single photo.",
    },
    {
      name: "Sophia K.",
      username: "@sophk",
      date: "5d",
      text: "Express option was perfect before prom and looked so natural.",
    },
    {
      name: "Maya R.",
      username: "@maya.r",
      date: "1w",
      text: "Depth customization gave me the exact finish I asked for.",
    },
    {
      name: "Liam M.",
      username: "@liam.m",
      date: "2w",
      text: "Custom bronze option gave me the perfect glow for my photoshoot.",
    },
    {
      name: "Emma P.",
      username: "@emmap",
      date: "3w",
      text: "Rapid rinse option was perfect for my tight schedule.",
    },
    {
      name: "Oliver J.",
      username: "@oliver.j",
      date: "4w",
      text: "Custom undertone matching gave me the perfect glow for my skin tone.",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const loopedTestimonials = [...testimonials, ...testimonials];
  const displayIndex = currentIndex % testimonials.length;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= testimonials.length) {
      setIsAnimating(false);
      setCurrentIndex(0);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? testimonials.length - 1 : newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      return newIndex >= testimonials.length ? 0 : newIndex;
    });
  };

  return (
    <div className="flow-story" id="about">
      <div className="flow-story__container">
        <div className="flow-story__about">
          <div className="flow-story__about-header">
            <div className="flow-story__logo">
              <img src={logoMark} alt="The Bronzing Cove logo" />
            </div>
            <h2>About The Bronzing Cove</h2>
          </div>
          <div className="flow-story__about-content">
            <p>
              The Bronzing Cove specializes in professional spray tanning services throughout Central Alberta. We focus on prep, precision spraying, and expert aftercare so your
              custom spray tan applies evenly, develops beautifully, and fades smoothly. The
              experience is personal, polished, and built around your goals.
            </p>
            <p>
              As Central Alberta's trusted spray tanning studio, The Bronzing
              Cove serves clients in Red Deer, Lacombe, Blackfalds, Ponoka, Innisfail, and surrounding communities. We're built around community, connection, and consistent quality.
              We love helping clients from across Central Alberta feel confident for
              everyday glow, wedding spray tans, prom spray tans, photoshoots, and milestone events.
            </p>
            <p>
              Every spray tan appointment is designed with personalized care:
              custom color matching, one-on-one attention, and results
              that reflect your skin tone, schedule, and style. Whether you need a spray tan for your wedding, prom, or just want a natural glow, we're here to help.
            </p>
          </div>
        </div>

        <div className="flow-story__testimonials">
          <h3 className="flow-story__testimonials-title">What Our Clients Say</h3>
          <div className="testimonials-carousel">
            <button 
              className="testimonials-carousel__control testimonials-carousel__control--prev"
              type="button"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <div className="testimonials-carousel__viewport">
              <div 
                className="testimonials-carousel__track"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: isAnimating ? "transform 500ms ease" : "none"
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {loopedTestimonials.map((testimonial, index) => (
                  <div 
                    key={`${testimonial.name}-${index}`}
                    className="testimonial-card"
                  >
                    <div className="testimonial-card__header">
                      <div className="testimonial-card__info">
                        <p className="testimonial-card__name">{testimonial.name}</p>
                      </div>
                    </div>
                    <div className="testimonial-card__quote">
                      <p className="testimonial-card__text">{testimonial.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              className="testimonials-carousel__control testimonials-carousel__control--next"
              type="button"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
          <div className="testimonials-carousel__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`testimonials-carousel__dot ${displayIndex === index ? "is-active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
