import type { Metadata } from "next";
import { ProcessRail } from "../../components/process-rail";
import { SectionIntro } from "../../components/section-intro";
import { processStages } from "../../lib/content";

export const metadata: Metadata = {
  title: "Process",
  description: "The Cine Glam process from brief to growth.",
};

export default function ProcessPage() {
  return (
    <div className="inner-page">
      <SectionIntro eyebrow="Our process" title="From idea to final cut." body="A connected journey for brands that need strategy, creative and growth to pull in the same direction." align="center" />
      <ProcessRail />
      <section className="process-detail-list">
        {processStages.map((stage) => <article key={stage.number}><span>{stage.number}</span><h2>{stage.title}</h2><p>{stage.description}</p></article>)}
      </section>
    </div>
  );
}
