import { expect, test } from "@playwright/test";

test("contact form confirms a valid enquiry locally", async ({ page }) => {
  await page.route("https://formsubmit.co/ajax/ajinkyamoghe2@gmail.com", async (route) => {
    const payload = JSON.parse(route.request().postData() ?? "{}");
    expect(payload).toMatchObject({
      email: "asha@example.com",
      _subject: "New Cine Glam project enquiry",
      message: "Launch a seasonal film and content system.",
    });
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true }),
    });
  });

  await page.goto("/contact");
  await page.getByLabel("Name").fill("Asha Mehta");
  await page.getByLabel("Company").fill("Northstar Foods");
  await page.getByLabel("Email").fill("asha@example.com");
  await page.getByLabel("Project brief").fill("Launch a seasonal film and content system.");
  await page.getByRole("button", { name: /send enquiry/i }).click();
  await expect(page.getByText(/thanks|we'll be in touch/i)).toBeVisible();
});

test("supporting routes stay within a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of ["/about", "/process", "/studio", "/contact"]) {
    await page.goto(route);
    await expect(page.locator("body")).toHaveJSProperty("scrollWidth", 390);
  }
});
