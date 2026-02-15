import "./StickySocialSidebar.css";

const links = [
  {
    label: "Contact",
    href: "#about",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="M4 8l8 6 8-6" />
      </svg>
    )
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 21v-7h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V5a21 21 0 00-2.5-.1c-2.5 0-4.2 1.5-4.2 4.2V11H7.5v3H10V21z" />
      </svg>
    )
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="1" />
      </svg>
    )
  }
];

export function StickySocialSidebar() {
  return (
    <aside className="sticky-social-sidebar" aria-label="Quick links">
      {links.map((link) => (
        <div key={link.label} className="sticky-social-sidebar__item">
          <a
            className="sticky-social-sidebar__link"
            href={link.href}
            aria-label={link.label}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
          >
            {link.icon}
            <span className="sticky-social-sidebar__label">{link.label}</span>
          </a>
        </div>
      ))}
    </aside>
  );
}
