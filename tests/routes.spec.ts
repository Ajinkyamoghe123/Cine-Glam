import { expect, test } from "@playwright/test";

const routes = [
  { path: "/services", heading: /from idea to impact/i, title: /services/i },
  { path: "/work", heading: /stories we've brought to life/i, title: /work/i },
  { path: "/work/the-ark", heading: /the ark/i, title: /the ark/i },
] as const;

for (const route of routes) {
  test(`${route.path} renders directly with route metadata and project CTA`, async ({ page }) => {
    await page.goto(route.path);
    await expect(page).toHaveTitle(route.title);
    await expect(page.getByRole("heading", { name: route.heading }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /start a project/i }).first()).toBeVisible();
  });
}

