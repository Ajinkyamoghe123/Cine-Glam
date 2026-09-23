import type { Metadata } from "next";
import { ProjectForm } from "../../components/project-form";
import { SectionIntro } from "../../components/section-intro";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Tell Cine Glam what you are building and start the conversation.",
};

export default function ContactPage() {
  return (
    <div className="inner-page contact-page">
      <SectionIntro eyebrow="Start a project" title="Have a brand to build?" body="Tell us what you are making, where it needs to go and what you want people to feel." />
      <div className="contact-layout">
        <div className="contact-aside"><p className="eyebrow">Let&apos;s create something together.</p><h2>Good work starts with a good brief.</h2><p>ajinkyamoghe2@gmail.com</p><p>Available for projects across content, production, branding and growth.</p></div>
        <ProjectForm />
      </div>
    </div>
  );
}
