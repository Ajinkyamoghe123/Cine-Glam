import { expect, test } from "@playwright/test";

const routes = [
  { path: "/services", heading: /from idea to impact/i, title: /services/i },
  { path: "/work", heading: /stories we've brought to life/i, title: /work/i },
  { path: "/work/the-ark", heading: /the ark/i, title: /the ark/i },
  { path: "/work/shri-mangal-bhog", heading: /shri mangal bhog/i, title: /shri mangal bhog/i },
] as const;

for (const route of routes) {
  test(`${route.path} renders directly with route metadata and project CTA`, async ({ page }) => {
    await page.goto(route.path);
    await expect(page).toHaveTitle(route.title);
    await expect(page.getByRole("heading", { name: route.heading }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /start a project/i }).first()).toBeVisible();
  });
}

test("portfolio cards stay on CineGlam Media and show an embedded film", async ({ page }) => {
  await page.goto("/work");
  const project = page.getByRole("link", { name: /shri mangal bhog/i });
  await expect(project).toHaveAttribute("href", "/work/shri-mangal-bhog");
  await project.click();
  await expect(page).toHaveURL(/\/work\/shri-mangal-bhog\/?$/);
  await expect(page.locator("iframe[title='Shri Mangal Bhog video']")).toHaveAttribute("src", /drive.google.com\/file\/d\/.*\/preview/);
});

test("fashion project exposes the supplied photo set on-site", async ({ page }) => {
  await page.goto("/work/asankhrang-fashion");
  await expect(page.locator(".project-gallery-item img")).toHaveCount(6);
  await expect(page.locator(".project-gallery-item img").first()).toHaveAttribute("src", /asankhrang-01\.jpg/);
  await expect(page.locator(".project-gallery-item img").last()).toHaveAttribute("src", /asankhrang-06\.jpg/);
});

test("business education project shows five locally hosted frames", async ({ page }) => {
  await page.goto("/work/business-education-films");
  await expect(page.locator(".project-gallery-item img")).toHaveCount(5);
  await expect(page.locator(".project-gallery-item img").first()).toHaveAttribute("src", /business-education-01\.jpg/);
  await expect(page.locator(".project-gallery-item img").last()).toHaveAttribute("src", /business-education-05\.jpg/);
});
