import {test, expect, chromium} from '@playwright/test';

test('Slow Motion Video Recording Demo', async() => {

    const browser = await chromium.launch({
        slowMo: 500,
        headless: false,
    });


    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width: 800, height: 600}
        },
    });


    const page = await context.newPage();


    await page.goto('https://demo.applitools.com/')
    // await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Ram')
    await page.locator('[placeholder="Enter your password"]').fill('1234')

    await page.waitForSelector('a.btn.btn-primary', {timeout : 5000})
    await page.locator('a.btn.btn-primary').click()


    await context.close();



})