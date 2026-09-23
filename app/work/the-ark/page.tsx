import type { Metadata } from "next";
import { ArrowLink } from "../../../components/arrow-link";
import { CaseStudyHeader } from "../../../components/case-study-header";
import { CaseStudySections } from "../../../components/case-study-sections";
import { arkCaseStudy } from "../../../lib/content";

export const metadata: Metadata = {
  title: "The Ark",
  description: "How Cine Glam built a warmer, more memorable digital story for The Ark hospitality brand.",
};

export default function TheArkCaseStudyPage() {
  return (
    <div className="case-study-page">
      <CaseStudyHeader
        title={arkCaseStudy.title}
        metadata={arkCaseStudy.metadata}
        image={arkCaseStudy.heroImage}
        summary={arkCaseStudy.summary}
      />
      <section className="case-study-results" aria-label="The Ark results">
        {arkCaseStudy.results.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>
      <CaseStudySections sections={arkCaseStudy.sections} />
      <section className="case-study-gallery" aria-label="The Ark project gallery">
        {[arkCaseStudy.heroImage, "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85"].map((image, index) => <div className={`gallery-image gallery-image--${index + 1}`} style={{ backgroundImage: `url(${image})` }} key={image} />)}
      </section>
      <section className="contact-band case-study-cta">
        <div>
          <p className="eyebrow eyebrow--light">More work / Start a project</p>
          <h2>Have a brand to build?</h2>
          <p>Let&apos;s create something together.</p>
        </div>
        <ArrowLink href="/contact" variant="light">Start a project</ArrowLink>
      </section>
    </div>
  );
}
