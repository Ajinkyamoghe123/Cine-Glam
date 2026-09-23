import { expect, test } from "@playwright/test";

test("home exposes the primary project CTA and selected work", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /we create/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /start a project/i }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: /selected work/i })).toBeVisible();
});

test("home filters selected work without leaving the page", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /the ark/i })).toBeVisible();

  await page.getByRole("button", { name: "Photography", exact: true }).click();

  await expect(page).toHaveURL(/127\.0\.0\.1:4173\/$/);
  await expect(page.getByRole("link", { name: /aurelia/i })).toBeVisible();
  await expect(page.getByRole("button", { name: "Photography", exact: true })).toHaveAttribute("aria-pressed", "true");
});
