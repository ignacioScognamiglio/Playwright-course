import {test, expect} from '@playwright/test';

test('dropdown test', async ({ page }) => {

  await page.goto('https://demoqa.com/select-menu');

  await page.click('#oldSelectMenu');

  await page.selectOption('#oldSelectMenu', 'Yellow');

  await page.waitForTimeout(2000);
});