import { services } from "../lib/content";
import { sitePath } from "../lib/site";

export function ServiceStrip({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`service-strip${compact ? " service-strip--compact" : ""}`}>
      {services.map((service, index) => (
        <a className="service-card" href={sitePath("/services")} key={service.number}>
          <img className="service-card__image" src={sitePath(service.image)} alt="" width={1200} height={800} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
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
