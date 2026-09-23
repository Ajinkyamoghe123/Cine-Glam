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
        {visibleProjects.map((project) => (
          <a className="work-card" href={sitePath(project.slug === "the-ark" ? "/work/the-ark" : "/work")} key={project.slug}>
            <div className="work-card__image" style={{ backgroundImage: `url(${project.image})` }} />
            <div className="work-card__veil" />
            <div className="work-card__caption">
              <span className="work-card__title">{project.title}</span>
              <small>{project.meta}</small>
              <span className="work-card__link">{project.slug === "the-ark" ? "View Case Study" : "View Project"} <span aria-hidden="true">↗</span></span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
