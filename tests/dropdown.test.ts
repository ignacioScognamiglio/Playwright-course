import {test, expect} from '@playwright/test';

test('dropdown test', async ({ page }) => {
   // go to the page
  await page.goto('https://demoqa.com/select-menu');

  // Click on the "Select One" dropdown
  await page.click('#oldSelectMenu');

  // Click on the "Yellow" option
  await page.selectOption('#oldSelectMenu', 'Yellow');

  await page.waitForTimeout(2000);
});