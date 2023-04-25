// @ts-check
import { test, expect } from "@playwright/test"

test("Locale pt-BR for Project", async ({ page }) => {
  await page.goto("/pt-BR/")

  await page
    .getByRole("navigation")
    .getByRole("link", { name: "projetos" })
    .click()

  // Expects the URL to contain projects.
  await expect(page).toHaveURL(/projects/)
})

test("Services section exist for the locale", async ({ page }) => {
  await page.goto("/")

  // Click on the pt-BR flag
  await page.getByRole("link", { name: "flag" }).nth(1).click()

  // Check the Services Section exist for the locale
  await page.getByRole("heading", { name: "serviços" }).click()
  await page.getByRole("heading", { name: "Desenvolvimento web" }).click()
  await page.getByRole("heading", { name: "Aplicações WebRTC" }).click()
  await page
    .getByText(
      "Desenvolvimento Back-endDesenvolvimento Back-end com Nodejs, Expressjs, MongoDB "
    )
    .click()
  await expect(page).toHaveURL(/pt-BR/)
})

test("jobs section", async ({ page }) => {
  await page.goto("/")
  await page.getByRole("link", { name: "flag" }).nth(1).click()
  await page.getByRole("button", { name: "WxBR" }).click()
  await page.getByText("Outubro 2012 - Dezembro 2014").click()
  await page.getByRole("button", { name: "Freelancer II" }).click()
  await page
    .getByRole("heading", {
      name: "Desenvolvedor / Engenheiro de Sistemas / Devops",
    })
    .click()
})

test("Projects section, test Project single page", async ({ page }) => {
  await page.goto("/")
  await page.getByRole("link", { name: "flag" }).nth(1).click()
  await page.getByRole("heading", { name: "projetos em destaque" }).click()
  await page
    .getByRole("article")
    .filter({
      hasText: /Receitas/,
    })
    .getByRole("link")
    .first()
    .click()
  await expect(page).toHaveURL(/pt-BR\/projects\/receitas/)
})

test("Projects section, link in the title to Project page and back", async ({
  page,
}) => {
  await page.goto("/")
  await page.getByRole("link", { name: "flag" }).nth(1).click()
  await page.getByRole("heading", { name: "projetos em destaque" }).click()
  await page.getByRole("link", { name: "Receitas" }).click()
  await expect(page).toHaveURL(/projects/)
  await page.getByRole("article").getByRole("button").click()
  await expect(page).toHaveURL(/pt-BR/)
})
