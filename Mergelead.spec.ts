import test from '@playwright/test'
test.use({
storageState:"Data/leaftap.json"
})

test('Merge Leads',async({page,context})=>{
    
await page.goto('http://leaftaps.com/crmsfa/control/leadsMain')
await page.locator('//a[text()="Merge Leads"]').click()
const [fromlead]=await Promise.all([
context.waitForEvent('page'),
await page.locator('(//img[@alt="Lookup"])[1]').click()
])
await fromlead.waitForLoadState()
await fromlead.locator('//a[text()="10015"]').click()
const [tolead]=await Promise.all([
context.waitForEvent('page'),
await page.locator('(//img[@alt="Lookup"])[2]').click(),
])
await tolead.waitForLoadState()
await tolead.locator('//a[text()="10017"]').click()

page.once('dialog',async(alertvar)=>{
    console.log(alertvar.type())
    console.log(alertvar.message())
    alertvar.accept()
})
await page.locator('.buttonDangerous').click()

})













    









