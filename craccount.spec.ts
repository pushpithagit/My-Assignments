import {test,expect}from '@playwright/test'
test("Create Account",async({page})=>{
await page.goto("https://login.salesforce.com/")
await page.getByLabel("Username").fill('dilipkumar.rajendran@testleaf.com')
await page.getByLabel("Password").fill('TestLeaf@2025')
await page.locator("#Login").click()
await page.locator('//h1[@class="slds-text-heading_large sellerHomeTitle"]',{hasText:'Seller Home'})
console.log("The title is Seller Home")
await page.locator('//div[@class="slds-icon-waffle"]').click()
await page.locator('//button[text()="View All"]').click()
await page.getByPlaceholder('Search apps or items...').fill('Service')
await page.locator('(//mark[text()="Service"])[1]').click()
await page.locator('//span[text()="Accounts"]').click()
await page.getByRole("button",{name:'New'}).click()
await page.locator('//input[@name="Name"]').fill('PushpithaRao')
await page.locator('//button[text()="Save"]').click()










})