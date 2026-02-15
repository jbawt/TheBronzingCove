import "./LogoIllustration.css";
import logoMark from "../../assets/Logo-notext-transparent.png";

export function LogoIllustration() {
  return (
    <section className="logo-illustration">
      <div className="logo-illustration__container">
        <svg
          className="logo-illustration__svg"
          viewBox="0 0 400 300"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="The Bronzing Cove logo illustration"
        >
          {/* Decorative background elements */}
          <defs>
            <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(198, 155, 99, 0.2)" />
              <stop offset="100%" stopColor="rgba(45, 118, 109, 0.2)" />
            </linearGradient>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(45, 118, 109, 0.3)" />
              <stop offset="50%" stopColor="rgba(198, 155, 99, 0.3)" />
              <stop offset="100%" stopColor="rgba(45, 118, 109, 0.3)" />
            </linearGradient>
          </defs>

          {/* Sun rays / decorative elements */}
          <circle
            cx="200"
            cy="150"
            r="120"
            fill="url(#sunGradient)"
            className="logo-illustration__sun"
          />
          
          {/* Wave pattern at bottom */}
          <path
            d="M0 250 Q100 230, 200 250 T400 250 L400 300 L0 300 Z"
            fill="url(#waveGradient)"
            className="logo-illustration__wave"
          />

          {/* Logo image embedded in SVG */}
          <foreignObject x="100" y="50" width="200" height="200">
            <img
              src={logoMark}
              alt="The Bronzing Cove logo"
              className="logo-illustration__logo"
            />
          </foreignObject>

          {/* Decorative accent lines */}
          <path
            d="M50 150 Q100 130, 150 150"
            stroke="var(--accent)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            className="logo-illustration__accent"
          />
          <path
            d="M250 150 Q300 170, 350 150"
            stroke="var(--accent)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            className="logo-illustration__accent"
          />
        </svg>
      </div>
    </section>
  );
}
