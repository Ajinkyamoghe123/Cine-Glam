import type { Metadata } from "next";
import { ArrowLink } from "../../components/arrow-link";
import { SectionIntro } from "../../components/section-intro";
import { ServiceDetailGrid } from "../../components/service-detail-grid";
import { industries } from "../../lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "From strategy to final cut: the Cine Glam creative, content, production and growth services.",
};

export default function ServicesPage() {
  return (
    <div className="inner-page">
      <div className="inner-page__topline"><span>02 / What we do</span><span>Creative ecosystem</span></div>
      <SectionIntro
        eyebrow="Our services"
        title="From idea to impact."
        body="Strategy, content, production and digital growth, all working under one roof and toward the same outcome."
        align="center"
      />
      <ServiceDetailGrid />
      <section className="custom-requirement">
        <div>
          <p className="eyebrow eyebrow--light">Have something specific in mind?</p>
          <h2>Have a custom requirement?</h2>
          <p>Let&apos;s discuss your project and find the shape it needs.</p>
        </div>
        <ArrowLink href="/contact" variant="light">Start a conversation</ArrowLink>
      </section>
      <section className="inner-industries">
        <SectionIntro eyebrow="Industries we work with" title="Built for different worlds." body="The audience changes. The care does not." />
        <div className="industry-grid">
          {industries.map((industry) => <div className="industry-item" key={industry.name}><span>{industry.mark}</span><p>{industry.name}</p></div>)}
        </div>
      </section>
    </div>
  );
}
