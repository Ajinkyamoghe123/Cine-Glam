"use client";

import { useMemo, useState } from "react";
import { projects as allProjects, workFilters, type Project } from "../lib/content";
import { sitePath } from "../lib/site";

type WorkGridProps = {
  projects: readonly Project[];
  showFilters?: boolean;
  limit?: number;
};

export function WorkGrid({ projects, showFilters = false, limit }: WorkGridProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof workFilters)[number]>("All Work");
  const sourceProjects = projects.length ? projects : allProjects;
  const visibleProjects = useMemo(() => {
    const filtered = activeFilter === "All Work"
      ? sourceProjects
      : sourceProjects.filter((project) => project.categories.includes(activeFilter));
    return (filtered.length ? filtered : sourceProjects).slice(0, limit);
  }, [activeFilter, limit, sourceProjects]);

  return (
    <div className="work-grid-wrap">
      {showFilters ? (
        <div className="work-filters" aria-label="Work filters">
          {workFilters.map((filter) => (
            <button
              className={`filter-button${activeFilter === filter ? " filter-button--active" : ""}`}
              type="button"
              aria-pressed={activeFilter === filter}
              key={filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      ) : null}
      <div className="work-grid">
        {visibleProjects.map((project, index) => (
          <a className="work-card" href={sitePath(`/work/${project.slug}`)} key={project.slug}>
            <img
              className="work-card__image"
              src={sitePath(project.image)}
              alt={`${project.title} project thumbnail`}
              width={1200}
              height={900}
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="work-card__veil" />
            <div className="work-card__caption">
              <span className="work-card__title">{project.title}</span>
              <small>{project.meta}</small>
              <span className="work-card__link">View project <span aria-hidden="true">↗</span></span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
