import { ArrowLink } from "./arrow-link";

export function StudioFeature({ image }: { image: string }) {
  return (
    <section className="studio-feature" id="studio" aria-labelledby="studio-feature-title">
      <div className="studio-feature__image" style={{ backgroundImage: `url(${image})` }} />
      <div className="studio-feature__veil" />
      <div className="studio-feature__content">
        <p className="eyebrow eyebrow--light">Cine Glam Studio</p>
        <h2 id="studio-feature-title">A space built to create.</h2>
        <p>Fully equipped studio spaces for shoots, podcasts, product, fashion and more.</p>
        <ArrowLink href="/studio" variant="light">Book the Studio</ArrowLink>
      </div>
    </section>
  );
}
