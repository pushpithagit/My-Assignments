import test from '@playwright/test'
test("ALert Frame",async({page})=>{
    page.once('dialog',alerttype=>{
       console.log(alerttype.type())
       console.log(alerttype.message())
       alerttype.accept()

      




})
await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    
await page.frameLocator('#iframeResult').locator('//button[@onclick="myFunction()"]').click()

 


    })







