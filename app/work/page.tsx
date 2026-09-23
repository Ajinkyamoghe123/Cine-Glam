import type { Metadata } from "next";
import { ArrowLink } from "../../components/arrow-link";
import { SectionIntro } from "../../components/section-intro";
import { WorkGrid } from "../../components/work-grid";
import { projects } from "../../lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected Cine Glam work across hospitality, fashion, food, automotive, architecture and creator content.",
};

export default function WorkPage() {
  return (
    <div className="inner-page inner-page--dark">
      <SectionIntro
        eyebrow="Our work"
        title="Stories We've Brought to Life."
        body="A portfolio of considered work across content, campaigns, photography and production."
      />
      <div className="work-page-heading">
        <span>Portfolio / 06 projects</span>
        <ArrowLink href="/contact" variant="light">Start a project</ArrowLink>
      </div>
      <WorkGrid projects={projects} showFilters />
    </div>
  );
}
