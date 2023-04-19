// @ts-check
import { test, expect } from "@playwright/test"

test.use({ locale: "en" })

test.describe("Several Contact Links", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("/")
  })

  test("Contact Link in navigation", async ({ page }) => {
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "contact" })
      .click()

    // Expects the URL to contain contact.
    await expect(page).toHaveURL(/contact/)

    // Fill the form
    await page.getByPlaceholder("name").fill("Ed Cox")
    await page.getByPlaceholder("email").fill("ed@example.com")
    await page.getByPlaceholder("message").fill("Please contact me")

    // submit the form
    await page.getByRole("button", { name: "submit here" }).click()

    // Expects the URL to contain thanks.
    // Actually the URL changed, but still...
    await expect(page).toHaveURL(/thanks/)
  })
  test("Contact page link in contact me link", async ({ page }) => {
    await page.getByRole("link", { name: "contact me" }).click()
    // Expects the URL to contain contact.
    await expect(page).toHaveURL(/contact/)

    // Press home icon to return to home page
    await page.locator(".link-icon > a").click()
    // Expects the URL to contain contact.
    await expect(page).toHaveURL("/")
  })
})
