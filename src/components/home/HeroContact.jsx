import { Link } from "react-router-dom";
import "./HeroContact.css";

export function HeroContact() {
  return (
    <div className="hero-contact">
      <div className="hero-contact__info">
        <div className="hero-contact__item">
          <svg className="hero-contact__icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href="mailto:info@thebronzingcove.com" className="hero-contact__link">
            info@thebronzingcove.com
          </a>
        </div>
        <div className="hero-contact__item">
          <svg className="hero-contact__icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a href="tel:+14035550123" className="hero-contact__link">
            (403) 555-0123
          </a>
        </div>
      </div>
      <Link to="/contact" className="btn btn--primary">
        Contact Us
      </Link>
    </div>
  );
}
