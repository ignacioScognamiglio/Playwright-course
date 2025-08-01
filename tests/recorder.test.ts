import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('button', { name: ' My account' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('lucasscognamiglio9@gmail.com');
  await page.getByRole('textbox', { name: 'E-Mail Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('lucasplaywright');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).dblclick();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Ignacio');
  await page.getByRole('button', { name: 'Continue' }).click();
});