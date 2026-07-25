import {test, expect} from '@playwright/test';

test('Selectors Demo', async({page}) => {

    await page.goto('https://www.saucedemo.com/')
    

    // using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Edision')
    await page.locator('[id="user-name"]').fill('Einstein')

    //using css selector
    //#login-button
    await page.locator('#login-button').click()
    await page.pause()

    //xpath selector
    //[@id="password"]
    await page.locator('xpath=//*[@id="user-name"]').fill('farady')
    await page.locator('//*[@id="user-name"]').fill('ram')

    //text selector
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()

}) 