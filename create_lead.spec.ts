import test from '@playwright/test'
test("Create Lead",async({page})=>{
await page.goto(" https://login.salesforce.com")
await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
await page.locator('#password').fill("TestLeaf@2025")
await page.locator('#Login').click()
await page.locator(".appLauncher.slds-context-bar__icon-action").click()
await page.waitForTimeout(2000)
await page.locator("//button[@aria-label='View All Applications']").click()
await page.locator(`//p[text()="Sales"]`).click()

await page.locator("//a[@title='Leads']").click()
await page.locator("//button[@name='New']").click()
await page.locator("//button[@aria-label='Salutation']").click()
await page.locator("//input[@placeholder='Last Name']").fill("Rajendran")
await page.locator("//input[@name='Company']").fill("Testleaf")

await page.locator('//button[@name="SaveEdit"]').click()



})