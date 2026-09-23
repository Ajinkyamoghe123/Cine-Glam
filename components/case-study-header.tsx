import { sitePath } from "../lib/site";

type CaseStudyHeaderProps = {
  title: string;
  metadata: readonly string[];
  image: string;
  summary: string;
};

export function CaseStudyHeader({ title, metadata, image, summary }: CaseStudyHeaderProps) {
  return (
    <section className="case-study-hero" aria-labelledby="case-study-title">
      <div className="case-study-hero__image" style={{ backgroundImage: `url(${image})` }} />
      <div className="case-study-hero__veil" />
      <div className="case-study-hero__content">
        <a className="back-link" href={sitePath("/work")}>← Back to Work</a>
        <p className="eyebrow eyebrow--light">Case Study / 01</p>
        <h1 id="case-study-title">{title}</h1>
        <p className="case-study-hero__meta">{metadata.join("  /  ")}</p>
        <p className="case-study-hero__summary">{summary}</p>
      </div>
    </section>
  );
}
