import test from '@playwright/test'
test.use({
storageState:"Data/salesforceLogin.json"
})
test('Window Handle',async({page,context})=>{
await page.goto("https://orgfarm-46e4003770-dev-ed.develop.lightning.force.com/lightning/page/home")
await page.locator('//span[text()="Accounts"]').click()
await page.getByRole("button",{name:'New'}).click()
await page.locator('//input[@name="Name"]').fill('PushpithaRao')
await page.locator('//button[@aria-label="Rating"]').click()
await page.locator('//span[@title="Warm"]').click()
await page.locator('//button[@aria-label="Type"]').click()
await page.locator('//span[@title="Prospect"]').click()
await page.locator('//button[@aria-label="Industry"]').click()
await page.locator('//span[@title="Banking"]').click()
await page.locator('//button[@aria-label="Ownership"]').click()
await page.locator('//span[@title="Public"]').click()
await page.locator('//button[@name="SaveEdit"]').click()
await page.locator('//span[@part="button"]').setInputFiles('Data/Playwright Locators.pdf')






})