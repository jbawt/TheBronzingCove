import { ServiceDetails } from "../components/services/ServiceDetails";
import "./ServicesPage.css";

export function ServicesPage() {
  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p className="services-hero__subtitle">
          Custom spray tans tailored to your skin tone, schedule, and style.
          Every appointment is designed to look clean, natural, and camera ready.
        </p>
      </div>

      <ServiceDetails />
    </div>
  );
}
