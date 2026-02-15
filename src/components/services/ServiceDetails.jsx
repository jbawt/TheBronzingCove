import "./ServiceDetails.css";

export function ServiceDetails() {
  return (
    <div className="service-details">
      <section className="service-details__section">
        <div className="service-details__header">
          <div className="service-details__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d="M12 3l2.3 4.6L19 10l-3.5 3.4.8 4.9L12 16l-4.3 2.3.8-4.9L5 10l4.7-2.4L12 3z" />
            </svg>
          </div>
          <h2>Color Options</h2>
          <p className="service-details__intro">
            Choose the perfect bronze shade that complements your natural skin tone
            and creates a flawless, sun-kissed glow.
          </p>
        </div>

        <div className="service-details__content">
          <div className="service-details__option">
            <h3>Light Bronze</h3>
            <p>
              Perfect for fair skin tones or those looking for a subtle, natural glow.
              This option provides a gentle enhancement that looks like you've spent
              a day in the sun without any harsh lines or orange tones.
            </p>
            <ul>
              <li>Ideal for first-time spray tan clients</li>
              <li>Subtle, natural-looking finish</li>
              <li>Perfect for everyday wear</li>
              <li>Complements fair to light skin tones</li>
            </ul>
          </div>

          <div className="service-details__option">
            <h3>Medium Bronze</h3>
            <p>
              Our most popular option, providing a balanced, sun-kissed look that
              works beautifully for most skin tones. This shade offers noticeable
              color while maintaining a natural appearance.
            </p>
            <ul>
              <li>Versatile for most skin tones</li>
              <li>Balanced depth and warmth</li>
              <li>Great for special events and photos</li>
              <li>Photographs beautifully</li>
            </ul>
          </div>

          <div className="service-details__option">
            <h3>Deep Bronze</h3>
            <p>
              For those seeking a bold, rich tan that makes a statement. This option
              provides maximum color depth while still looking natural and even.
            </p>
            <ul>
              <li>Maximum color intensity</li>
              <li>Perfect for events and photoshoots</li>
              <li>Long-lasting results</li>
              <li>Ideal for medium to olive skin tones</li>
            </ul>
          </div>
        </div>

        <div className="service-details__note">
          <p>
            <strong>Custom Undertone Matching:</strong> We work with you to ensure
            the undertone of your tan matches your natural skin tone, preventing
            any orange or yellow cast. Our solutions are carefully selected to
            provide a balanced finish that looks natural in all lighting conditions.
          </p>
        </div>
      </section>

      <section className="service-details__section">
        <div className="service-details__header">
          <div className="service-details__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <circle cx="12" cy="12" r="8.5" />
              <path d="M12 7v5l3.4 2" />
            </svg>
          </div>
          <h2>Development Time</h2>
          <p className="service-details__intro">
            Choose a development timeline that fits your schedule. From rapid rinse
            options for busy days to custom development plans for special events.
          </p>
        </div>

        <div className="service-details__content">
          <div className="service-details__option">
            <h3>Rapid Rinse</h3>
            <p>
              Perfect for those with tight schedules. This option allows you to rinse
              off the solution after just 2-4 hours, making it ideal for same-day
              appointments or busy lifestyles.
            </p>
            <ul>
              <li>2-4 hour development time</li>
              <li>Perfect for same-day events</li>
              <li>Convenient for busy schedules</li>
              <li>Still provides beautiful, long-lasting results</li>
            </ul>
          </div>

          <div className="service-details__option">
            <h3>Express Timing</h3>
            <p>
              A middle-ground option that balances convenience with optimal color
              development. Ideal for those who want great results without waiting
              overnight.
            </p>
            <ul>
              <li>4-6 hour development time</li>
              <li>Great for afternoon appointments</li>
              <li>Optimal color development</li>
              <li>Flexible scheduling</li>
            </ul>
          </div>

          <div className="service-details__option">
            <h3>Custom Development</h3>
            <p>
              Work with us to create a personalized development plan that fits your
              schedule and event timeline. We'll help you plan the perfect timing
              for your spray tan.
            </p>
            <ul>
              <li>Personalized timeline planning</li>
              <li>Perfect for special events</li>
              <li>Flexible scheduling options</li>
              <li>Expert guidance on timing</li>
            </ul>
          </div>
        </div>

        <div className="service-details__note">
          <p>
            <strong>Timing Tips:</strong> For best results, we recommend scheduling
            your spray tan 1-2 days before your event. This allows time for the color
            to fully develop and settle, ensuring a natural, even finish. Avoid
            scheduling too close to your event to allow for any necessary touch-ups.
          </p>
        </div>
      </section>

      <section className="service-details__section">
        <div className="service-details__header">
          <div className="service-details__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d="M6 16c1.1-3.6 3.2-6.7 6-9 2.8 2.3 4.9 5.4 6 9" />
              <path d="M8.2 16a3.8 3.8 0 007.6 0" />
            </svg>
          </div>
          <h2>Depth & Intensity</h2>
          <p className="service-details__intro">
            Control the intensity of your tan with layered application techniques.
            From subtle enhancement to bold definition, we create smooth, even tone
            without harsh contrast.
          </p>
        </div>

        <div className="service-details__content">
          <div className="service-details__option">
            <h3>Subtle Enhancement</h3>
            <p>
              A light, natural application that provides a gentle glow. Perfect for
              those who want a barely-there tan that enhances their natural skin tone.
            </p>
            <ul>
              <li>Single layer application</li>
              <li>Natural, subtle finish</li>
              <li>Perfect for everyday wear</li>
              <li>Easy to maintain</li>
            </ul>
          </div>

          <div className="service-details__option">
            <h3>Balanced Depth</h3>
            <p>
              Our standard application technique that provides noticeable color while
              maintaining a natural appearance. This option works beautifully for most
              occasions and skin types.
            </p>
            <ul>
              <li>Layered application technique</li>
              <li>Even, smooth coverage</li>
              <li>Natural-looking results</li>
              <li>Versatile for any occasion</li>
            </ul>
          </div>

          <div className="service-details__option">
            <h3>Bold Definition</h3>
            <p>
              Maximum intensity with targeted blending for a rich, defined look. Ideal
              for special events, photoshoots, or those who prefer a deeper tan.
            </p>
            <ul>
              <li>Multiple layer application</li>
              <li>Targeted blending techniques</li>
              <li>Event-ready definition</li>
              <li>Long-lasting, rich color</li>
            </ul>
          </div>
        </div>

        <div className="service-details__note">
          <p>
            <strong>Blending Techniques:</strong> Our expert technicians use targeted
            blending methods to ensure smooth transitions and even coverage. We pay
            special attention to areas like hands, feet, and joints to prevent any
            harsh lines or uneven patches, creating a flawless, natural-looking tan.
          </p>
        </div>
      </section>

      <section className="service-details__packages">
        <h2>Special Event Packages</h2>
        <p className="service-details__packages-intro">
          We offer specialized packages for your most important occasions. Each package
          includes a consultation to ensure your tan is perfectly tailored to your event.
        </p>

        <div className="service-details__packages-grid">
          <div className="service-details__package">
            <h3>Wedding Package</h3>
            <p>
              Perfect for brides, grooms, and wedding parties. Includes a trial session
              and consultation to ensure your tan looks flawless in photos and matches
              your wedding aesthetic.
            </p>
            <ul>
              <li>Pre-wedding trial session</li>
              <li>Color consultation</li>
              <li>Timing coordination with your event</li>
              <li>Group booking discounts available</li>
            </ul>
          </div>

          <div className="service-details__package">
            <h3>Prom & Formal Events</h3>
            <p>
              Look your absolute best for prom, homecoming, or any formal occasion.
              We'll help you achieve a camera-ready glow that complements your outfit.
            </p>
            <ul>
              <li>Color matching consultation</li>
              <li>Timing for event day</li>
              <li>Group booking options</li>
              <li>Touch-up guidance</li>
            </ul>
          </div>

          <div className="service-details__package">
            <h3>Photoshoot Package</h3>
            <p>
              Professional-grade tanning for photoshoots, modeling, or content creation.
              We ensure your tan photographs beautifully in all lighting conditions.
            </p>
            <ul>
              <li>Photography-focused consultation</li>
              <li>Lighting condition testing</li>
              <li>Even, camera-ready finish</li>
              <li>Long-lasting results</li>
            </ul>
          </div>

          <div className="service-details__package">
            <h3>Vacation Prep</h3>
            <p>
              Start your vacation with a beautiful base tan. Perfect for pre-travel
              preparation or maintaining your glow after returning home.
            </p>
            <ul>
              <li>Pre-travel consultation</li>
              <li>Maintenance guidance</li>
              <li>Post-vacation touch-ups</li>
              <li>Travel-friendly timing</li>
            </ul>
          </div>

          <div className="service-details__package">
            <h3>Birthday & Celebrations</h3>
            <p>
              Make your special day even more memorable with a beautiful, natural-looking
              tan. Perfect for birthdays, anniversaries, or any celebration.
            </p>
            <ul>
              <li>Event-specific timing</li>
              <li>Color consultation</li>
              <li>Group booking discounts</li>
              <li>Celebration-ready glow</li>
            </ul>
          </div>

          <div className="service-details__package">
            <h3>Graduation Package</h3>
            <p>
              Celebrate your academic achievement with confidence. Look your best for
              graduation ceremonies, photos, and celebrations with a natural, camera-ready glow.
            </p>
            <ul>
              <li>Ceremony timing coordination</li>
              <li>Photo-ready finish</li>
              <li>Group booking discounts</li>
              <li>Long-lasting results for celebrations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
