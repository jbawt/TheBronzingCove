import "./SprayDivider.css";

export function SprayDivider() {
  return (
    <div className="flow-divider" aria-hidden="true">
      <svg className="flow-divider__svg" viewBox="0 0 460 60" role="img">
        <path className="flow-divider__line" d="M10 30h180" />
        <path className="flow-divider__line" d="M270 30h180" />

        <g className="flow-divider__icon">
          <rect x="206" y="20" width="22" height="24" rx="4" />
          <path d="M213 20v-4h8v4" />
          <path d="M221 18h11v4h-11" />
          <path className="flow-divider__spray" d="M232 20l8 3" />
        </g>

        <circle className="flow-divider__mist flow-divider__mist--one" cx="246" cy="21" r="2" />
        <circle className="flow-divider__mist flow-divider__mist--two" cx="254" cy="18" r="2.2" />
        <circle className="flow-divider__mist flow-divider__mist--three" cx="263" cy="21" r="1.9" />
      </svg>
    </div>
  );
}
