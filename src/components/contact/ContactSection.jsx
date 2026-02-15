import "./ContactSection.css";

export function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-section__header">
        <h2>Contact Us</h2>
        <p className="contact-section__intro">
          Have questions about our services? Want to book an appointment? We'd love to hear from you.
        </p>
      </div>

      <div className="contact-section__content">
        <div className="contact-section__info">
          <div className="contact-info-card contact-info-card--combined">
            <div className="contact-info-card__row">
              <div className="contact-info-card__item">
                <div className="contact-info-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3>Email</h3>
                <p>info@thebronzingcove.com</p>
                <a href="mailto:info@thebronzingcove.com" className="contact-info-card__link">
                  Send us an email
                </a>
              </div>

              <div className="contact-info-card__item">
                <div className="contact-info-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3>Phone</h3>
                <p>(403) 555-0123</p>
                <a href="tel:+14035550123" className="contact-info-card__link">
                  Call us today
                </a>
              </div>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3>Location</h3>
            <p>Central Alberta</p>
            <p className="contact-info-card__subtext">Serving the region with mobile and studio appointments</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3>Hours</h3>
            <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
            <p>Saturday: 10:00 AM - 5:00 PM</p>
            <p>Sunday: By appointment</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h3>Send us a Message</h3>
          <div className="contact-form__group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="contact-form__group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="contact-form__group">
            <label htmlFor="phone">Phone (Optional)</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="contact-form__group">
            <label htmlFor="subject">Subject</label>
            <select id="subject" name="subject" required>
              <option value="">Select a subject</option>
              <option value="booking">Booking Inquiry</option>
              <option value="services">Services Question</option>
              <option value="pricing">Pricing Information</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="contact-form__group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <button type="submit" className="btn btn--primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
