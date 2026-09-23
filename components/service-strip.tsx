import { services } from "../lib/content";
import { sitePath } from "../lib/site";

export function ServiceStrip({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`service-strip${compact ? " service-strip--compact" : ""}`}>
      {services.map((service) => (
        <a className="service-card" href={sitePath("/services")} key={service.number}>
          <div className="service-card__image" style={{ backgroundImage: `url(${service.image})` }} />
          <div className="service-card__body">
            <span className="service-card__number">{service.number}</span>
            <h3>{service.shortTitle}</h3>
            <span className="service-card__arrow" aria-hidden="true">↗</span>
          </div>
        </a>
      ))}
    </div>
  );
}
