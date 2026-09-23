"use client";

import { useState } from "react";
import { sitePath } from "../lib/site";

export function HeroShowreel({ showreelImage }: { showreelImage: string }) {
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div
        className="hero__media"
        style={{ backgroundImage: `url(${showreelImage})` }}
        role="img"
        aria-label="A filmmaker working behind a cinema camera"
      />
      <div className="hero__veil" />
      <div className="hero__content">
        <p className="eyebrow eyebrow--light">Creative / Content / Production / Growth</p>
        <h1 id="hero-title">
          We create.
          <br />
          We capture.
          <br />
          We grow.
        </h1>
        <p className="hero__lede">
          A creative, content, production and digital growth studio for brands with something worth
          saying.
        </p>
        <div className="hero__actions">
          <a className="button button--light" href={sitePath("/#work")}>
            Explore Our Work <span aria-hidden="true">↗</span>
          </a>
          <a className="button button--outline-light" href={sitePath("/contact")}>
            Start a Project <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="hero__corner-note">
        <span>01</span>
        <span>Stories made to move.</span>
      </div>
      <button
        className="showreel-trigger"
        type="button"
        aria-expanded={showreelOpen}
        aria-controls="showreel-note"
        onClick={() => setShowreelOpen((open) => !open)}
      >
        <span className="play-mark" aria-hidden="true">{showreelOpen ? "Ⅱ" : "▶"}</span>
        <span>{showreelOpen ? "Close Showreel" : "Watch Showreel"}</span>
      </button>
      {showreelOpen ? (
        <div className="showreel-note" id="showreel-note" role="status">
          <span className="eyebrow eyebrow--light">Showreel / 01:18</span>
          <p>A quiet cut of the worlds we help brands make.</p>
        </div>
      ) : null}
    </section>
  );
}
