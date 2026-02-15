import "./GalleryDivider.css";

export function GalleryDivider() {
  return (
    <div className="flow-divider flow-divider--gallery" aria-hidden="true">
      <svg className="flow-divider__svg" viewBox="0 0 460 60" role="img">
        <path className="flow-divider__line" d="M10 30h180" />
        <path className="flow-divider__line" d="M270 30h180" />

        <g className="flow-divider__camera">
          <rect x="205" y="20" width="50" height="24" rx="6" />
          <rect x="214" y="16" width="14" height="5" rx="2" />
          <circle cx="230" cy="32" r="6.5" />
          <circle cx="246" cy="26" r="1.8" />
        </g>

        <path className="flow-divider__flash" d="M234 10l3 5h-3l3 5-8-6h3z" />
      </svg>
    </div>
  );
}
