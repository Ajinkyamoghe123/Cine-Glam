import type { CaseStudySection } from "../lib/content";

export function CaseStudySections({ sections }: { sections: readonly CaseStudySection[] }) {
  return (
    <div className="case-study-sections">
      {sections.map((section) => (
        <article className="case-study-section" key={section.number}>
          <span className="case-study-section__number">{section.number}</span>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </article>
      ))}
    </div>
  );
}
