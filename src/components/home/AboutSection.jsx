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
  const [commentIndex, setCommentIndex] = useState(0);
  const [isTrackAnimated, setIsTrackAnimated] = useState(true);
  const loopedTestimonials = [...testimonials, ...testimonials];
  const trackStep = 144;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCommentIndex((prev) => prev + 1);
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleTrackTransitionEnd = () => {
    if (commentIndex < testimonials.length) {
      return;
    }

    setIsTrackAnimated(false);
    setCommentIndex(0);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsTrackAnimated(true);
      });
    });
  };

  return (
    <div className="flow-story" id="about">
      <div className="flow-story__panel">
        <div className="social-post">
          <div className="social-post__header">
            <div className="social-post__avatar" aria-hidden="true">
              <img src={logoMark} alt="" />
            </div>
            <div className="social-post__meta">
              <p><strong>The Bronzing Cove</strong> <span>@thebronzingcove</span></p>
              <p>Central Alberta · Local Business</p>
            </div>
          </div>
          <p className="social-post__title">High-touch service with a modern beauty standard.</p>
          <div className="social-post__content">
            <p>
              We focus on prep, precision spraying, and expert aftercare so your
              color applies evenly, develops beautifully, and fades smoothly. The
              experience is personal, polished, and built around your goals.
            </p>
            <p>
              As a proudly local studio serving Central Alberta, The Bronzing
              Cove is built around community, connection, and consistent quality.
              We love helping clients from across the region feel confident for
              everyday glow, weddings, proms, photoshoots, and milestone events.
            </p>
            <p>
              Every appointment is designed with a small-business level of care:
              personalized recommendations, one-on-one attention, and results
              that reflect your skin tone, schedule, and style.
            </p>
          </div>
          <div className="social-post__actions">
            <span>148 Likes</span>
            <span>36 Comments</span>
            <a className="btn btn--primary" href="#home">
              Book Your Custom Glow
            </a>
          </div>
        </div>
        {/* <p className="section-kicker">Comment Section</p> */}
        {/* <h2>Trusted for life moments that matter.</h2> */}
        <div className="comments-carousel">
          <div
            className="comments-track"
            style={{
              transform: `translateY(-${commentIndex * trackStep}px)`,
              transition: isTrackAnimated ? undefined : "none"
            }}
            onTransitionEnd={handleTrackTransitionEnd}
          >
            {loopedTestimonials.map((testimonial, index) => (
              <div className="comment-card" key={`${testimonial.name}-${index}`}>
                <div className="comment-card__avatar" aria-hidden="true">{testimonial.name.charAt(0)}</div>
                <div className="comment-card__body">
                  <p className="comment-card__meta">
                    <strong>{testimonial.name}</strong> <span>{testimonial.username}</span> <span>{testimonial.date}</span>
                  </p>
                  <p className="comment-card__text">{testimonial.text}</p>
                  <p className="comment-card__actions">Like · Reply</p>
                </div>
              </div>
            ))}
          </div>
          <div className="comments-carousel__fade comments-carousel__fade--top" aria-hidden="true" />
          <div className="comments-carousel__fade comments-carousel__fade--bottom" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
