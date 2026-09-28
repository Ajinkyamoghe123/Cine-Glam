"use client";

import { useState } from "react";

type LazyFilmPlayerProps = {
  embedUrl: string;
  poster: string;
  title: string;
};

export function LazyFilmPlayer({ embedUrl, poster, title }: LazyFilmPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        src={embedUrl}
        title={`${title} video`}
        loading="lazy"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    );
  }

  return (
    <button
      className="project-page__film-poster"
      type="button"
      aria-label={`Play ${title}`}
      onClick={() => setIsPlaying(true)}
    >
      <img src={poster} alt="" loading="lazy" decoding="async" />
      <span className="project-page__film-poster-shade" aria-hidden="true" />
      <span className="project-page__film-play" aria-hidden="true">
        <span>▶</span>
      </span>
      <span className="project-page__film-poster-label">Play film</span>
    </button>
  );
}
