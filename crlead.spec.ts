


 /* Click CRM/SFA
 Click Leads
 Click Create Lead
 Fill the Company Name
 Fill the First Name
 Fill the Last Name. Fill the Salutation
 Fill the Title
 Fill the Annual Revenue
 Fill the Department
 Fill the Phone number
 Click Create Lead button
 Verify the company name, first name, last name and the status
 Get the page title */

import {test,expect}from '@playwright/test'
test("Create Lead",async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator('#username').fill('DemoSalesManager')
await page.locator('#password').fill('crmsfa')
await page.locator(".decorativeSubmit").click()
await page.getByText('CRM/SFA').click()
await page.locator('//a[text()="Leads"]').click()
await page.locator('//a[text()="Create Lead"]').click()
await page.locator("//input[@id='createLeadForm_companyName']").fill("Testleaf")
await page.locator("//input[@id='createLeadForm_firstName']").fill("Pushpitha")
await page.locator("//input[@id='createLeadForm_lastName']").fill("Rao")
await page.locator('//input[@id="createLeadForm_personalTitle"]').fill('Ms')
await page.locator('//input[@name="generalProfTitle"]').fill('Details')
await page.locator('//input[@name="annualRevenue"]').fill("4.5")
await page.locator('//input[@name="departmentName"]').fill('Testing')
await page.locator('#createLeadForm_primaryPhoneNumber').fill('0997756434')
await page.locator("//input[@value='Create Lead']").click()
await  page.locator('//div[text()="View Lead"]',{hasText:'Testleaf (11430)'})
console.log('The company name is verified')
await page.locator('//div[text()="View Lead"]',{hasText:'Pushpitha'})
console.log('The first name is verified')
await page.locator('//div[text()="View Lead"]',{hasText:'Rao'})
console.log("The Last name is Verified")
})
