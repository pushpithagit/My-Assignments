import test from '@playwright/test'
test("CreateInd", async({page})=>{
    await page.goto("https://login.salesforce.com")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.locator(".appLauncher.slds-context-bar__icon-action").click()
    await page.locator("//button[@aria-label='View All Applications']").click()
    await page.locator("//a[@data-label='Individuals']").click()
    await page.locator(`//div[@title="New"]`).click()
    await page.locator("//input[@placeholder='Last Name']").fill("Rajendran")
    await page.locator("//span[text()='Save']").click() 


})