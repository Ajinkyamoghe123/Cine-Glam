import { expect, test } from "@playwright/test";

test("Home keeps its authored hierarchy on desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /we create/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /selected work/i })).toBeVisible();
  await page.screenshot({ path: "test-results/cine-glams-home-desktop.png", fullPage: true });
});

test("Home stays contained and usable on mobile with reduced motion", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /we create/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /open menu/i })).toBeVisible();
  await expect(page.locator("body")).toHaveJSProperty("scrollWidth", 390);
  const transitionDuration = await page.locator(".work-card").first().evaluate((element) => getComputedStyle(element).transitionDuration);
  expect(parseFloat(transitionDuration)).toBeLessThan(0.1);
  await page.screenshot({ path: "test-results/cine-glams-home-mobile.png", fullPage: true });
});

