import { test, expect } from "@playwright/test"

test.describe("Projects Page, pt-BR locale", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("/")
    // Select pt-BR flag
    await page.getByRole("link", { name: "flag" }).nth(1).click()
  })

  test("Go to projects page by link and select a project and go to project page", async ({
    page,
  }) => {
    // Go to Projects Page
    await page.getByRole("main").getByRole("link", { name: "projetos" }).click()
    // Click in a project to go to Project Page
    await page
      .getByRole("article")
      .filter({
        hasText: /Interiores/,
      })
      .getByRole("link")
      .first()
      .click()
    await expect(page).toHaveURL(/pt-BR\/projects\/design-de-interiores/)
    // Go to external website of the project
    const page6Promise = page.waitForEvent("popup")
    // Click at the picture at the center of the picture
    await page.getByRole("article").getByRole("link").click()
    const page6 = await page6Promise
    // Expect the external website
    await expect(page6).toHaveURL(/design.netlify.app/)
  })

  test("Go to Projects page and come back by clicking the logo", async ({
    page,
  }) => {
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "projetos" })
      .click()
    await expect(page).toHaveURL(/projects/)
    await page.getByRole("link", { name: "web dev" }).click()
    await expect(page).toHaveURL(/pt-BR/)
  })
})
