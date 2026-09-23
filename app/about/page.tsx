import type { Metadata } from "next";
import { SectionIntro } from "../../components/section-intro";

export const metadata: Metadata = {
  title: "About",
  description: "The people and point of view behind Cine Glam.",
};

const roles = [
  { title: "Creative & Production", body: "The people, pictures and production craft that turn a good idea into something you can feel.", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85" },
  { title: "Digital Marketing & Branding", body: "The strategy, language and distribution that help the work find the right people at the right time.", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85" },
];

export default function AboutPage() {
  return (
    <div className="inner-page">
      <SectionIntro eyebrow="About Cine Glam" title="We&apos;re not just a production house." body="We bring strategy, branding, content, production and digital growth under one roof, because the strongest work usually needs more than one kind of thinking." />
      <section className="about-statement"><p>One studio. Two roles. One connected way of working.</p></section>
      <section className="role-grid" aria-label="Cine Glam roles">
        {roles.map((role, index) => <article className="role-card" key={role.title}><div className="role-card__image" style={{ backgroundImage: `url(${role.image})` }} /><div className="role-card__body"><span className="eyebrow">0{index + 1} / Cine Glam</span><h2>{role.title}</h2><p>{role.body}</p></div></article>)}
      </section>
      <section className="about-copy"><p className="eyebrow">The people behind the work</p><h2>Good work is a team sport.</h2><p>We keep the room small enough for ideas to stay clear and broad enough for a project to move from a first thought to a finished system without losing its pulse.</p></section>
    </div>
  );
}
