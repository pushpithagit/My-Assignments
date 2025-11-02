import test from '@playwright/test'
test("Edit Lead",async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator("#password").fill("crmsfa")
await page.locator("//input[@class='decorativeSubmit']").click()
await page.locator("#label").click()
await page.locator("//a[@href='/crmsfa/control/leadsMain']").click()
await page.locator("//a[@href='/crmsfa/control/createLeadForm']").click()
await page.waitForTimeout(3000)
await page.locator("//input[@id='createLeadForm_companyName']").fill("Testleaf")
await page.locator("//input[@id='createLeadForm_firstName']").fill("Pushpitha")
await page.locator("//input[@id='createLeadForm_lastName']").fill("Rao")
await page.locator("//input[@value='Create Lead']").click()
await page.locator("//a[text()='Edit']").click()
await page.locator("//input[@id='updateLeadForm_companyName']").fill("Amazon")
await page.locator("//input[@value='Update']").click()




})