import "./ServiceSection.css";

export function ServiceSection() {
  return (
    <div className="flow-band" id="services">
      <div className="flow-band__intro">
        <p className="section-kicker">About our Service</p>
        <h2>Spray services built around your skin tone and schedule.</h2>
        <p>
          Choose from our range of professional spray tanning options: pick your ideal finish, your development timeline, and your depth.
          Every spray tan appointment in Central Alberta is designed to look clean, natural, and camera-ready for weddings, proms, photoshoots, and everyday confidence.
        </p>
      </div>
      <div className="flow-service-lane">
        <div className="flow-service-item">
          <div className="flow-service-item__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d="M12 3l2.3 4.6L19 10l-3.5 3.4.8 4.9L12 16l-4.3 2.3.8-4.9L5 10l4.7-2.4L12 3z" />
            </svg>
          </div>
          <h3>Color</h3>
          <ul>
            <li>Light, medium, or deep bronze options</li>
            <li>Custom undertone matching for natural results</li>
            <li>Balanced finish that photographs beautifully</li>
          </ul>
        </div>
        <div className="flow-service-item">
          <div className="flow-service-item__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <circle cx="12" cy="12" r="8.5" />
              <path d="M12 7v5l3.4 2" />
            </svg>
          </div>
          <h3>Time</h3>
          <ul>
            <li>Rapid rinse windows for tighter schedules</li>
            <li>Express timing for same-day events</li>
            <li>Custom development plans around your day</li>
          </ul>
        </div>
        <div className="flow-service-item">
          <div className="flow-service-item__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d="M6 16c1.1-3.6 3.2-6.7 6-9 2.8 2.3 4.9 5.4 6 9" />
              <path d="M8.2 16a3.8 3.8 0 007.6 0" />
            </svg>
          </div>
          <h3>Depth</h3>
          <ul>
            <li>Layered intensity from subtle to bold</li>
            <li>Targeted blending for smooth, even tone</li>
            <li>Event-ready definition without harsh contrast</li>
          </ul>
        </div>
      </div>
      <div className="flow-packages-wrapper">
        <h3 className="flow-packages__title">Packages</h3>
        <div className="flow-packages">
          <span>Weddings</span>
          <span>Proms</span>
          <span>Photoshoots</span>
          <span>Birthdays</span>
          <span>Vacation Prep</span>
          <span>Graduations</span>
        </div>
      </div>
    </div>
  );
}
