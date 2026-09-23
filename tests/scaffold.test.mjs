import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("root app shell exposes the Cine Glam hero", async () => {
  const page = await readFile(new URL("../components/hero-showreel.tsx", import.meta.url), "utf8");

  assert.match(page, /We create\./i);
  assert.match(page, /We capture\./i);
  assert.match(page, /We grow\./i);
  assert.match(page, /Start a Project/i);
});
