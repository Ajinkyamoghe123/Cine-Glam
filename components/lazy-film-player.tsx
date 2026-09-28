"use client";

import { useState } from "react";

type LazyFilmPlayerProps = {
  embedUrl: string;
  poster: string;
  title: string;
};

function getDriveThumbnail(embedUrl: string) {
  const fileId = embedUrl.match(/\/file\/d\/([^/]+)/)?.[1];
  return fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600` : null;
}

export function LazyFilmPlayer({ embedUrl, poster, title }: LazyFilmPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [posterSrc, setPosterSrc] = useState(() => getDriveThumbnail(embedUrl) ?? poster);

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
      <img
        src={posterSrc}
        alt=""
        loading="lazy"
        decoding="async"
        onError={() => {
          if (posterSrc !== poster) setPosterSrc(poster);
        }}
      />
      <span className="project-page__film-poster-shade" aria-hidden="true" />
      <span className="project-page__film-play" aria-hidden="true">
        <span>▶</span>
      </span>
      <span className="project-page__film-poster-label">Play film</span>
    </button>
  );
}
