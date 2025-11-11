import test from '@playwright/test'
test('Frames',async({page})=>{
    await page.goto("https://www.leafground.com/frame.xhtml")
    await page.frameLocator("(//iframe)[3]").frameLocator("//iframe[@id='frame2']").locator('#Click').click()
   console.log(await page.frameLocator("(//iframe)[3]").frameLocator("//iframe[@id='frame2']").locator('#Click').innerText())

await page.frame({url:'https://leafground.com/default.xhtml'})?.locator("#Click").first().click()
console.log(await page.frame({url:'https://www.leafground.com/default.xhtml'})?.locator("#Click").first().innerText())

const count= await page.frames()
console.log("The no of frames:"+count.length)

})
