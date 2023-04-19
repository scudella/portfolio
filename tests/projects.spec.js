import { test, expect } from "@playwright/test"

test.describe("Projects Page", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("/")
  })

  test("Go to projects page by link and select a project and go to project page", async ({
    page,
  }) => {
    // Go to Projects Page
    await page.getByRole("main").getByRole("link", { name: "projects" }).click()
    // Click in a project to go to Project Page
    await page
      .getByRole("article")
      .filter({
        hasText: /Github Search/,
      })
      .getByRole("link")
      .first()
      .click()
    await expect(page).toHaveURL(/projects\/github-search/)
    // Go to external website of the project
    const page5Promise = page.waitForEvent("popup")
    // Click at the picture at the center of the picture
    await page.getByRole("article").getByRole("link").click()
    const page5 = await page5Promise
    // Expect the external website
    await expect(page5).toHaveURL(/github.netlify.app/)
  })

  test("Go to Projects page and come back by clicking the logo", async ({
    page,
  }) => {
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "projects" })
      .click()
    await expect(page).toHaveURL(/projects/)
    await page.getByRole("link", { name: "web dev" }).click()
    await expect(page).toHaveURL("/")
  })
})
