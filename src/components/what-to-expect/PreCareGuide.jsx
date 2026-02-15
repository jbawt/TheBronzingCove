import "./PreCareGuide.css";

export function PreCareGuide() {
  return (
    <section className="care-guide care-guide--pre">
      <div className="care-guide__header">
        <div className="care-guide__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <h2>Pre-Care Guide</h2>
        <p className="care-guide__intro">
          Proper preparation ensures your spray tan applies evenly, develops beautifully,
          and lasts as long as possible. Follow these steps before your appointment.
        </p>
      </div>

      <div className="care-guide__content">
        <div className="care-guide__step">
          <div className="care-guide__step-number">1</div>
          <div className="care-guide__step-content">
            <h3>Exfoliate 24-48 Hours Before</h3>
            <p>
              Gently exfoliate your entire body, paying special attention to dry areas
              like elbows, knees, ankles, and wrists. Use a gentle scrub or exfoliating
              mitt to remove dead skin cells and create a smooth, even surface.
            </p>
            <ul>
              <li>Focus on rough patches and dry areas</li>
              <li>Avoid harsh scrubs that can irritate skin</li>
              <li>Don't exfoliate the day of your appointment</li>
            </ul>
          </div>
        </div>

        <div className="care-guide__step">
          <div className="care-guide__step-number">2</div>
          <div className="care-guide__step-content">
            <h3>Shave or Wax 24 Hours Prior</h3>
            <p>
              If you plan to shave or wax, do so at least 24 hours before your spray tan
              appointment. This allows your pores to close and prevents the solution from
              settling into open follicles.
            </p>
            <ul>
              <li>Shave the day before, not the day of</li>
              <li>Wax at least 24-48 hours before</li>
              <li>Avoid using new razors that might cause irritation</li>
            </ul>
          </div>
        </div>

        <div className="care-guide__step">
          <div className="care-guide__step-number">3</div>
          <div className="care-guide__step-content">
            <h3>Skip Moisturizers and Oils</h3>
            <p>
              On the day of your appointment, avoid applying lotions, oils, perfumes,
              or deodorant. These products can create a barrier that prevents the spray
              tan solution from adhering properly to your skin.
            </p>
            <ul>
              <li>Shower with a gentle, oil-free cleanser</li>
              <li>Don't apply any products after showering</li>
              <li>Wear loose, dark clothing to your appointment</li>
            </ul>
          </div>
        </div>

        <div className="care-guide__step">
          <div className="care-guide__step-number">4</div>
          <div className="care-guide__step-content">
            <h3>Remove Makeup and Jewelry</h3>
            <p>
              Come to your appointment with clean, bare skin. Remove all makeup, jewelry,
              and nail polish if you want your hands and face tanned. This ensures an
              even application across your entire body.
            </p>
            <ul>
              <li>Remove all makeup before arriving</li>
              <li>Take off jewelry and watches</li>
              <li>Consider removing nail polish for even hand coverage</li>
            </ul>
          </div>
        </div>

        <div className="care-guide__step">
          <div className="care-guide__step-number">5</div>
          <div className="care-guide__step-content">
            <h3>Plan Your Outfit</h3>
            <p>
              Wear loose, dark clothing to your appointment. Tight clothing can rub off
              the solution before it sets, and dark colors will hide any potential
              transfer during the development period.
            </p>
            <ul>
              <li>Choose loose-fitting, dark clothing</li>
              <li>Wear flip-flops or open-toed shoes</li>
              <li>Bring a dark towel for your car seat</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="care-guide__note">
        <p>
          <strong>Important:</strong> If you have any skin conditions, allergies, or
          concerns, please let us know before your appointment. We want to ensure your
          spray tan experience is safe and comfortable.
        </p>
      </div>
    </section>
  );
}
