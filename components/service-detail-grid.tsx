import { services } from "../lib/content";
import { sitePath } from "../lib/site";

export function ServiceDetailGrid() {
  return (
    <div className="service-detail-grid">
      {services.map((service) => (
        <article className="service-detail" key={service.number}>
          <div className="service-detail__media" style={{ backgroundImage: `url(${service.image})` }} />
          <div className="service-detail__body">
            <p className="eyebrow">{service.number} / {service.eyebrow}</p>
            <h2>{service.title}</h2>
            <p className="service-detail__description">{service.description}</p>
            <ul>
              {service.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
            </ul>
            <a className="arrow-link" href={sitePath("/contact")}>Learn more <span aria-hidden="true">→</span></a>
          </div>
        </article>
      ))}
    </div>
  );
}
