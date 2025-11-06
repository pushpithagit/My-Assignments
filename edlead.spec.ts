
import test from '@playwright/test'
test('Edit lead',async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator('#username').fill('DemoSalesManager')
await page.locator('#password').fill('crmsfa')
await page.locator(".decorativeSubmit").click()
await page.getByText('CRM/SFA').click()
await page.locator('//a[text()="Leads"]').click()
await page.locator('//a[text()="Find Leads"]').click()
await page.locator('//label[text()="Lead ID:"]').fill('11466')
await page.locator('//button[text()="Find Leads"]').click()
await page.locator('//a[text()="11466"]').click()
await page.locator('//a[text()="Edit"]').click()
await page.locator('#updateLeadForm_companyName').fill('Facebook')
await page.locator('#updateLeadForm_annualRevenue').fill('5.5')
await page.locator('#updateLeadForm_departmentName').fill("Developing")
await page.locator('#updateLeadForm_description').fill("Welcome to my Page")
await page.locator('//input[@value="Update"]').click()
await page.locator('//div[@id="sectionHeaderTitle_leads"]',{hasText:'Facebook (11466)'})
await page.locator('//div[@id="sectionHeaderTitle_leads"]',{hasText:'$5.50'})
await page.locator('//div[@id="sectionHeaderTitle_leads"]',{hasText:'Developing'})
await page.locator('//div[@id="sectionHeaderTitle_leads"]',{hasText:'Welcome to my Page'})
console.log('The updated details are verified')


})