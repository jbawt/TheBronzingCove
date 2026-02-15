import logoMark from "../../assets/Logo-notext-transparent.png";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img
            className="site-footer__logo"
            src={logoMark}
            alt="The Bronzing Cove logo"
          />
          <div className="site-footer__brand-text">
            <p className="site-footer__title">The Bronzing Cove</p>
            <p className="site-footer__tagline">Sun-kissed confidence, one glow at a time.</p>
          </div>
        </div>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">What to Expect</a>
          <a href="#about">Contact</a>
        </nav>
        <div className="site-footer__copyright">
          <small>&copy; {currentYear} The Bronzing Cove. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
