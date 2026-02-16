import { ServiceDetails } from "../components/services/ServiceDetails";
import "./ServicesPage.css";

export function ServicesPage() {
  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p className="services-hero__subtitle">
          Custom spray tanning services in Central Alberta, tailored to your skin tone, schedule, and style.
          Every professional spray tan appointment is designed to look clean, natural, and camera-ready. Serving Red Deer, Lacombe, Blackfalds, and all of Central Alberta.
        </p>
      </div>

      <ServiceDetails />
    </div>
  );
}
