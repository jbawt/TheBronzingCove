import { PreCareGuide } from "../components/what-to-expect/PreCareGuide";
import { PostCareGuide } from "../components/what-to-expect/PostCareGuide";
import { FullGallery } from "../components/what-to-expect/FullGallery";
import "./WhatToExpectPage.css";

export function WhatToExpectPage() {
  return (
    <div className="what-to-expect-page">
      <div className="what-to-expect-hero">
        <h1>What to Expect</h1>
        <p className="what-to-expect-hero__subtitle">
          Your guide to preparing for and maintaining your perfect spray tan.
          Follow these steps for the best results.
        </p>
      </div>

      <div className="care-guides-container">
        <PreCareGuide />
        <PostCareGuide />
      </div>
      <FullGallery />
    </div>
  );
}
