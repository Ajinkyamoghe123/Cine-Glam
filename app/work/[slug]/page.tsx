import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLink } from "../../../components/arrow-link";
import { LazyFilmPlayer } from "../../../components/lazy-film-player";
import { projects } from "../../../lib/content";
import { sitePath } from "../../../lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  return {
    title: project?.title ?? "Project",
    description: project?.summary ?? "Selected CineGlam Media work.",
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  const galleryImages = project?.gallery ?? (project ? [project.image] : []);
  const videos = project?.videos ?? (project?.embedUrl ? [{ label: project.sourceLabel ?? "Selected film", embedUrl: project.embedUrl }] : []);

  if (!project) notFound();

  return (
    <div className="project-page">
      <div className="project-page__topline">
        <a className="back-link back-link--static" href={sitePath("/work")}>← Back to Work</a>
        <span>Project / {project.client}</span>
      </div>

      <section className="project-page__hero" aria-labelledby="project-title">
        <div
          className="project-page__hero-image"
          style={{
            backgroundImage: `url(${sitePath(project.image)})`,
            backgroundPosition: project.heroFit === "contain" ? "right center" : "center",
            backgroundSize: project.heroFit === "contain" ? "auto 100%" : "cover",
          }}
        />
        <div className="project-page__hero-veil" />
        <div className="project-page__hero-content">
          <p className="eyebrow eyebrow--light">{project.meta}</p>
          <h1 id="project-title">{project.title}</h1>
          <p>{project.summary}</p>
        </div>
      </section>

      <section className="project-page__intro">
        <div>
          <p className="eyebrow">The work</p>
          <h2>Made for the frame, built for the feed.</h2>
        </div>
        <p>{project.summary} We shaped the visual language around the real character of the project, so the work can move naturally between campaign, social and the moments in between.</p>
      </section>

      {videos.length > 0 ? (
        <section className="project-page__film" aria-labelledby="project-film-title">
          <div className="project-page__film-heading">
            <p className="eyebrow">Selected film</p>
            <div>
              <h2 id="project-film-title">{videos.length > 1 ? "A selection of the films." : "See it in motion."}</h2>
              <span>{videos.length} {videos.length === 1 ? "film" : "films"}</span>
            </div>
          </div>
          <div className={`project-page__film-grid${videos.length === 1 ? " project-page__film-grid--single" : ""}`}>
            {videos.map((video, index) => (
              <article className="project-page__film-card" key={video.embedUrl}>
                <div className="project-page__player">
                  <LazyFilmPlayer
                    embedUrl={video.embedUrl}
                    poster={sitePath(project.gallery?.[index] ?? project.image)}
                    title={`${project.title} ${video.label}`}
                  />
                </div>
                <p>{video.label}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="project-page__gallery" aria-labelledby="project-gallery-title">
        <div className="project-page__gallery-heading">
          <div>
            <p className="eyebrow">{galleryImages.length > 1 ? "Selected frames" : "Featured frame"}</p>
            <h2 id="project-gallery-title">{galleryImages.length > 1 ? "More from the shoot." : "The visual language."}</h2>
          </div>
          <span>{galleryImages.length} images</span>
        </div>
        <div className={`project-gallery-grid${galleryImages.length === 1 ? " project-gallery-grid--single" : ""}${project.galleryLayout === "portrait" ? " project-gallery-grid--portrait" : ""}`}>
          {galleryImages.map((image, index) => (
            <figure className="project-gallery-item" key={image}>
              <img
                src={sitePath(image)}
                alt={`${project.title} project frame ${index + 1}`}
                width={1200}
                height={1600}
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="project-page__details" aria-label="Project details">
        <div><span>Client</span><strong>{project.client}</strong></div>
        <div><span>Focus</span><strong>{project.categories.join(" / ")}</strong></div>
        <div><span>Next</span><ArrowLink href="/contact">Start a project</ArrowLink></div>
      </section>
    </div>
  );
}
