import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setMobileMenuOpen,
  toggleMobileMenu
} from "../../features/ui/uiSlice";
import { ThemeToggle } from "./ThemeToggle";
import logoMark from "../../assets/Logo-notext-transparent.png";

export function SiteHeader() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.ui.mobileMenuOpen);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="brand-block">
          <img
            className="brand-block__logo"
            src={logoMark}
            alt="The Bronzing Cove logo"
          />
          <div className="brand-block__text">
            <p className="brand-block__title">The Bronzing Cove</p>
          </div>
        </div>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => dispatch(toggleMobileMenu())}
          aria-expanded={isMenuOpen}
          aria-controls="site-nav"
        >
          Menu
        </button>

        <nav id="site-nav" className={`site-nav ${isMenuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => dispatch(setMobileMenuOpen(false))}
          >
            Home
          </NavLink>
          <a href="#services" onClick={() => dispatch(setMobileMenuOpen(false))}>
            Services
          </a>
          <a href="#about" onClick={() => dispatch(setMobileMenuOpen(false))}>
            What to Expect
          </a>
          <a href="#about" onClick={() => dispatch(setMobileMenuOpen(false))}>
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
