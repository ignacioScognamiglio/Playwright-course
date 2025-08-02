import {chromium, test} from '@playwright/test'

test('Login test demo', async () => {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span')
    await page.click("'Login'")
    await page.fill('//*[@id="input-email"]', 'lucasscognamiglio9@gmail.com')
    await page.fill('//*[@id="input-password"]', 'lucasplaywright')
    await page.click('//*[@id="content"]/div/div[2]/div/div/form/input[1]')
    await page.waitForTimeout(3000);

    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account')
    await page1.waitForTimeout(3000);
})