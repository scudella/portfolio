// @ts-check
import { test, expect } from "@playwright/test"

test.use({ locale: "en" })

test("has title", async ({ page }) => {
  await page.goto("/")

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Portfolio/)
})

test.describe("Several Projects Links", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("/")
  })

  test("Projects link in navigation", async ({ page }) => {
    // Click the projects link in the Navbar.
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "projects" })
      .click()

    // Expects the URL to contain projects.
    await expect(page).toHaveURL(/projects/)
  })

  test("Projects link in the main", async ({ page }) => {
    // Click the projects link in the end of main.
    await page.getByRole("main").getByRole("link", { name: "projects" }).click()

    // Expects the URL to contain projects.
    await expect(page).toHaveURL(/projects/)
  })

  test("Projects link in the Sidebar", async ({ page }) => {
    // Click the projects link in the Sidebar.
    // Change viewport to make the link visible
    await page.setViewportSize({ width: 600, height: 600 })
    await page.getByRole("navigation").getByRole("button").click()
    await page
      .getByRole("complementary")
      .getByRole("link", { name: "projects" })
      .click()

    // Expects the URL to contain projects.
    await expect(page).toHaveURL(/projects/)
  })
})

test.describe("Some External Links", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("/")
  })

  test("linkedin icon link to external site", async ({ page }) => {
    const page1Promise = page.waitForEvent("popup")
    await page.locator("header").getByRole("link").nth(1).click()
    const page1 = await page1Promise
    await expect(page1).toHaveURL(/linkedin.com/)
  })

  test("github icon link to external site", async ({ page }) => {
    const page2Promise = page.waitForEvent("popup")
    await page.locator("header").getByRole("link").nth(4).click()
    const page2 = await page2Promise
    await expect(page2).toHaveURL(/github.com/)
  })
})

test("about link in navigation", async ({ page }) => {
  await page.goto("/")

  // Click about link in navbar
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "about" })
    .click()

  await expect(page).toHaveURL(/about/)

  // Click second locale pt-BR
  await page.getByRole("link", { name: "flag" }).nth(1).click()

  await expect(page).toHaveURL(/pt-BR\/about/)

  //Click the home icon
  await page.locator(".link-icon > a").click()
  await expect(page).toHaveURL(/pt-BR/)
})

test("test Services section exist", async ({ page }) => {
  await page.goto("/")
  await page.getByRole("heading", { name: "Services" }).click()
  await page.getByRole("heading", { name: "Web development" }).click()
  await page
    .getByText("WebRTC applications with front-end and backend development.")
    .click()
  await page.getByRole("heading", { name: "Back-end development" }).click()
  await expect(page).toHaveURL("/")
})

test("jobs section", async ({ page }) => {
  await page.goto("/")

  // Click on a job
  await page.getByRole("button", { name: "WxBR" }).click()
  await page.getByRole("heading", { name: "Business Executive" }).click()
  await page.getByRole("button", { name: "Freelancer" }).click()
  await page.getByRole("heading", { name: "Developer" }).click()
})

test.describe("Projects section in the home page", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("/")
  })

  test("Click on the central link, bringing the project page", async ({
    page,
  }) => {
    await page
      .getByRole("article")
      .filter({
        hasText: /WebRTC/,
      })
      .getByRole("link")
      .first()
      .click()
    await expect(page).toHaveURL(/web-rtc/)
    await page.getByRole("article").getByRole("button").click()
    await expect(page).toHaveURL("/")
  })

  test("Click on the github link, bringing the external github page", async ({
    page,
  }) => {
    const page3Promise = page.waitForEvent("popup")
    await page
      .getByRole("article")
      .filter({
        hasText: /WebRTC/,
      })
      .getByRole("link")
      .nth(2)
      .click()
    const page3 = await page3Promise
    await expect(page3).toHaveURL(/github.com/)
  })

  test("Click on the app deployed link, bringing the app website", async ({
    page,
  }) => {
    const page4Promise = page.waitForEvent("popup")
    await page
      .getByRole("article")
      .filter({
        hasText: /WebRTC/,
      })
      .getByRole("link")
      .nth(3)
      .click()
    const page4 = await page4Promise
    await expect(page4).toHaveURL(/scudella.net.br/)
  })

  test("Go to the Project page by the link in the projects title", async ({
    page,
  }) => {
    await page.getByRole("heading", { name: "featured projects" }).click()
    await page.getByRole("link", { name: "WebRTC Conference" }).click()
    await expect(page).toHaveURL(/web-rtc/)
  })

  test("Go to Projects page and back through the link-icon", async ({
    page,
  }) => {
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "projects" })
      .click()
    await expect(page).toHaveURL(/projects/)
    await page.locator(".link-icon > a").click()
    await expect(page).toHaveURL("/")
  })
})
