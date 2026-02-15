import { ContactSection } from "../components/contact/ContactSection";
import { ExpandedAbout } from "../components/contact/ExpandedAbout";
import "./ContactPage.css";

export function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-page-hero">
        <h1>Get in Touch</h1>
        <p className="contact-page-hero__subtitle">
          Ready to achieve your perfect glow? We're here to help you every step of the way.
        </p>
      </div>

      <ExpandedAbout />
      <ContactSection />
    </div>
  );
}
