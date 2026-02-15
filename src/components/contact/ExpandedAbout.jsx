import "./ExpandedAbout.css";
import logoMark from "../../assets/Logo-notext-transparent.png";

export function ExpandedAbout() {
  return (
    <section className="expanded-about">
      <div className="expanded-about__content">
        <h2 className="expanded-about__title">About The Bronzing Cove</h2>
        <div className="expanded-about__body">
          <div className="expanded-about__logo">
            <img src={logoMark} alt="The Bronzing Cove logo" />
          </div>
          <div className="expanded-about__text">
            <p>
              The Bronzing Cove was born from a passion for helping people feel confident
              and beautiful in their own skin. Founded in Central Alberta, we've grown
              into a trusted name serving clients throughout the region with high-quality,
              personalized spray tanning services.
            </p>
            <p>
              We believe spray tanning is an art form. Every appointment begins with a
              consultation to understand your skin tone, goals, and timeline. We customize
              every aspect—from color depth to development time—to ensure natural-looking
              results that feel uniquely you.
            </p>
            <p>
              As a local business, we're deeply connected to the Central Alberta community.
              We've been part of countless special moments—from weddings and proms to
              photoshoots and everyday confidence boosts. Your satisfaction is our top
              priority, and we're committed to providing personalized service, premium
              products, and expert care for every client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
