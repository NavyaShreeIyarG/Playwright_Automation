import test, {page, expect } from '@playwright/test';

test('Assertions Demo', async({page}) => {

    await page.goto('https://kitchen.applitools.com/')
    await page.pause()

    // Assertions
    // Check element present or not
    await expect(page.locator('.chakra-heading.css-dpmy2a')).toHaveCount(1)

    if(await page.$('.chakra-heading.css-dpmy2a')){
        await page.locator('.chakra-heading.css-dpmy2a').click()
    }

    // Check element is hidden or visible
    await expect(page.locator('.chakra-heading.css-dpmy2a')).toBeVisible()
    // await expect.soft(page.locator('.chakra-heading.css-dpmy2a')).toBeHidden()

    //Check element is enabled or disabled
    await expect(page.locator('.chakra-heading.css-dpmy2a')).toBeEnabled()
    // await expect.soft(page.locator('.chakra-heading.css-dpmy2a')).toBeDisabled()

    //Check Text
    await expect(page.locator('.chakra-heading.css-dpmy2a')).toHaveText('The Kitchen')
    // await expect(page.locator('.chakra-heading.css-dpmy2a')).not.toHaveText('Kitchen')

 

    //Check Attribute Value
    await expect(page.locator('.chakra-heading.css-dpmy2a')).toHaveAttribute('class', 'chakra-heading css-dpmy2a')
    await expect(page.locator('.chakra-heading.css-dpmy2a')).toHaveClass(/.*css-dpmy2a/)

    // check page url and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle('The Kitchen')

    await page.pause()

    // visual validation with screenshot 
    await expect(page).toHaveScreenshot()
})