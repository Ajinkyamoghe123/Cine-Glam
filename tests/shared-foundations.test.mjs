import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("shared content preserves the six proposal service verticals", async () => {
  const content = await readFile(new URL("../lib/content.ts", import.meta.url), "utf8");

  for (const service of [
    "Digital Marketing & Social Media",
    "Content Creation",
    "Professional Production",
    "Cine Glam Studio",
    "Podcast Production",
    "Creator & Influencer Content",
  ]) {
    assert.match(content, new RegExp(service.replace(/[&]/g, "\\&"), "i"));
  }
});

test("shared header exposes an accessible full-screen menu contract", async () => {
  const header = await readFile(new URL("../components/site-header.tsx", import.meta.url), "utf8");

  assert.match(header, /aria-expanded/);
  assert.match(header, /aria-controls/);
  assert.match(header, /Escape/);
});
