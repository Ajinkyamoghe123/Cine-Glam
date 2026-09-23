import { ArrowLink } from "../components/arrow-link";
import { HeroShowreel } from "../components/hero-showreel";
import { ProcessRail } from "../components/process-rail";
import { SectionIntro } from "../components/section-intro";
import { ServiceStrip } from "../components/service-strip";
import { StudioFeature } from "../components/studio-feature";
import { WorkGrid } from "../components/work-grid";
import { industries, projects, testimonials } from "../lib/content";

const showreelImage =
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2200&q=88";
const studioImage =
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1800&q=88";

export default function HomePage() {
  return (
    <div className="site-shell">
      <HeroShowreel showreelImage={showreelImage} />

      <section className="home-intro" id="about">
        <SectionIntro
          eyebrow="01 / One connected ecosystem"
          title="Strategy that gives the story somewhere to go."
          body="From the first thought to the final cut, we bring the people, craft and momentum to make brands impossible to ignore."
        />
      </section>

      <section className="home-section" id="services" aria-labelledby="services-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">02 / What we do</p>
            <h2 id="services-title">Built for the whole picture.</h2>
          </div>
          <ArrowLink href="/services">View all services</ArrowLink>
        </div>
        <ServiceStrip compact />
      </section>

      <section className="home-section home-section--work" id="work" aria-labelledby="work-title">
        <SectionIntro
          eyebrow="03 / Selected work"
          title="Stories we brought to life."
          body="A few projects across hospitality, fashion, food, automotive, architecture and the people building something worth following."
        />
        <div className="work-heading-row">
          <h2 id="work-title">Selected Work</h2>
          <ArrowLink href="/work" variant="light">View all work</ArrowLink>
        </div>
        <WorkGrid projects={projects} showFilters limit={6} />
      </section>

      <section className="ecosystem-band" id="process" aria-labelledby="ecosystem-title">
        <div className="ecosystem-band__intro">
          <p className="eyebrow">04 / The Cine Glam model</p>
          <h2 id="ecosystem-title">One brand. One team. One creative ecosystem.</h2>
          <p>Strategy → Branding → Content → Production → Editing → Marketing → Growth.</p>
        </div>
        <ProcessRail />
      </section>

      <section className="industries-section" aria-labelledby="industries-title">
        <SectionIntro
          eyebrow="05 / Built for different worlds"
          title="The right eye for the right room."
          body="Different industries ask for different kinds of attention. We bring the same care to every one."
        />
        <div className="industry-grid" id="industries-title">
          {industries.map((industry) => (
            <div className="industry-item" key={industry.name}>
              <span>{industry.mark}</span>
              <p>{industry.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="studio-section">
        <StudioFeature image={studioImage} />
      </section>

      <section className="testimonials-section" aria-labelledby="testimonials-title">
        <p className="eyebrow">06 / Words from the work</p>
        <h2 id="testimonials-title">The kind of work that stays in the room.</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <figure className="testimonial" key={testimonial.name}>
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>{testimonial.name} / {testimonial.company}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact-band" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow eyebrow--light">07 / Start a project</p>
          <h2 id="contact-title">Have a brand to build?</h2>
          <p>Let&apos;s create something people remember.</p>
        </div>
        <ArrowLink href="/contact" variant="light">Start a conversation</ArrowLink>
      </section>
    </div>
  );
}
