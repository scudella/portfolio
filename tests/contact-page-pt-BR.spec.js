// @ts-check
import { test, expect } from "@playwright/test"

test.describe("Several Contact Links", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("/")

    // Choose pt-BR locale by clicking its flag
    await page.getByRole("link", { name: "flag" }).nth(1).click()
  })

  test("Contact Link in navigation", async ({ page }) => {
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "contato" })
      .click()

    // Expects the URL to contain contact.
    await expect(page).toHaveURL(/contact/)

    // Fill the form
    await page.getByPlaceholder("nome").fill("Ed Cox")
    await page.getByPlaceholder("email").fill("ed@example.com")
    await page.getByPlaceholder("mensagem").fill("Please contact me")

    // submit the form
    await page.getByRole("button", { name: "Envie aqui" }).click()

    // Expects the URL to contain thanks.
    // Actually the URL changed, but still...
    await expect(page).toHaveURL(/thanks/)
  })
  test("Contact page link in contact me link", async ({ page }) => {
    await page.getByRole("link", { name: "Entre em contato" }).click()
    // Expects the URL to contain contact.
    await expect(page).toHaveURL(/contact/)

    // Press home icon to return to home page
    await page.locator(".link-icon > a").click()
    // Expects the URL to contain contact.
    await expect(page).toHaveURL(/pt-BR/)
  })
})
