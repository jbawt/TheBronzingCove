import "./PostCareGuide.css";

export function PostCareGuide() {
  return (
    <section className="care-guide care-guide--post">
      <div className="care-guide__header">
        <div className="care-guide__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
        </div>
        <h2>Post-Care Guide</h2>
        <p className="care-guide__intro">
          Proper aftercare is essential for maintaining your spray tan's color, longevity,
          and even fade. Follow these guidelines to keep your glow looking perfect.
        </p>
      </div>

      <div className="care-guide__content">
        <div className="care-guide__step">
          <div className="care-guide__step-number">1</div>
          <div className="care-guide__step-content">
            <h3>Wait Before Your First Shower</h3>
            <p>
              Follow the development time recommended for your specific solution. Avoid
              getting wet, sweating, or touching your skin during this period. The
              solution needs time to develop and set properly.
            </p>
            <ul>
              <li>Rapid rinse: 2-4 hours</li>
              <li>Express timing: 4-6 hours</li>
              <li>Standard development: 8-12 hours</li>
            </ul>
          </div>
        </div>

        <div className="care-guide__step">
          <div className="care-guide__step-number">2</div>
          <div className="care-guide__step-content">
            <h3>Rinse Off the Guide Color</h3>
            <p>
              When it's time to shower, rinse with lukewarm water only (no soap or
              shampoo). Use your hands to gently rinse away the guide color. The water
              will run brown—this is normal! Your tan will continue to develop over the
              next 24 hours.
            </p>
            <ul>
              <li>Use lukewarm water, not hot</li>
              <li>No soap, shampoo, or body wash on first rinse</li>
              <li>Pat dry gently with a towel—don't rub</li>
            </ul>
          </div>
        </div>

        <div className="care-guide__step">
          <div className="care-guide__step-number">3</div>
          <div className="care-guide__step-content">
            <h3>Moisturize Daily</h3>
            <p>
              After your first shower, begin moisturizing daily with a gentle, oil-free
              lotion. Well-moisturized skin helps your tan fade evenly and last longer.
              Avoid products with alcohol, AHA, or retinol as they can fade your tan faster.
            </p>
            <ul>
              <li>Use oil-free, gentle moisturizers</li>
              <li>Moisturize morning and night</li>
              <li>Avoid products with exfoliating ingredients</li>
            </ul>
          </div>
        </div>

        <div className="care-guide__step">
          <div className="care-guide__step-number">4</div>
          <div className="care-guide__step-content">
            <h3>Avoid Prolonged Water Exposure</h3>
            <p>
              While your tan is developing and during the first few days, limit time in
              pools, hot tubs, and long baths. Chlorine and hot water can cause your tan
              to fade more quickly or develop unevenly.
            </p>
            <ul>
              <li>Limit pool and hot tub time</li>
              <li>Keep showers brief and lukewarm</li>
              <li>Pat dry instead of rubbing</li>
            </ul>
          </div>
        </div>

        <div className="care-guide__step">
          <div className="care-guide__step-number">5</div>
          <div className="care-guide__step-content">
            <h3>Skip Exfoliating Products</h3>
            <p>
              Avoid using exfoliating scrubs, loofahs, or products with AHA, BHA, or
              retinol while your tan is active. These ingredients can cause your tan to
              fade unevenly or more quickly than desired.
            </p>
            <ul>
              <li>Use gentle, non-exfoliating cleansers</li>
              <li>Avoid loofahs and rough washcloths</li>
              <li>Skip anti-aging products with active ingredients</li>
            </ul>
          </div>
        </div>

        <div className="care-guide__step">
          <div className="care-guide__step-number">6</div>
          <div className="care-guide__step-content">
            <h3>Maintain Your Glow</h3>
            <p>
              Your spray tan will typically last 7-10 days with proper care. As it fades,
              it should do so evenly. If you notice any uneven fading, you can schedule
              a touch-up appointment to maintain your perfect glow.
            </p>
            <ul>
              <li>Expected duration: 7-10 days</li>
              <li>Fades naturally and evenly</li>
              <li>Touch-up appointments available</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="care-guide__note">
        <p>
          <strong>Tip:</strong> If you have any questions about caring for your spray
          tan or notice any issues, don't hesitate to reach out. We're here to help you
          maintain your perfect glow!
        </p>
      </div>
    </section>
  );
}
