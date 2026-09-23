import type { Metadata } from "next";
import { ArrowLink } from "../../components/arrow-link";
import { StudioFeature } from "../../components/studio-feature";
import { SectionIntro } from "../../components/section-intro";
import { services } from "../../lib/content";

export const metadata: Metadata = {
  title: "Studio",
  description: "A flexible Cine Glam studio for product, fashion, creator, reels and podcast work.",
};

export default function StudioPage() {
  const studioService = services[3];
  return (
    <div className="inner-page">
      <SectionIntro eyebrow="Cine Glam Studio" title="A space built to create." body="A calm, considered production space for the work that needs a little more room, light and control." />
      <StudioFeature image={studioService.image} />
      <section className="studio-details">
        <div><p className="eyebrow">The setup</p><h2>Ready for the shoot you have in mind.</h2></div>
        <div className="studio-detail-list">{["Product setup", "Fashion setup", "Creator setup", "Reels setup", "Podcast setup", "Green screen"].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div>
      </section>
      <section className="custom-requirement"><div><p className="eyebrow eyebrow--light">Need the studio?</p><h2>Book a conversation.</h2><p>Tell us what you are making and we&apos;ll help you find the right setup.</p></div><ArrowLink href="/contact" variant="light">Book the Studio</ArrowLink></section>
    </div>
  );
}
