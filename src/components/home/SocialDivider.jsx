import "./SocialDivider.css";

export function SocialDivider() {
  return (
    <div className="flow-divider flow-divider--social" aria-hidden="true">
      <svg className="flow-divider__svg" viewBox="0 0 460 60" role="img">
        <path className="flow-divider__line" d="M10 30h180" />
        <path className="flow-divider__line" d="M270 30h180" />

        <g className="flow-divider__megaphone">
          <path d="M204 33l24-9v20l-24-9z" />
          <path d="M228 24l14-6v32l-14-6" />
          <path d="M207 33v12c0 4 3 7 7 7h2" />
          <path d="M247 25l7-4" />
          <path d="M247 31h8" />
          <path d="M247 37l7 4" />
        </g>
      </svg>
    </div>
  );
}
