import { test, expect } from '@playwright/test';

test('frames test', async ({ page }) => {
    await page.goto('https://letcode.in/frame')

    const allframes = page.frames();
    console.log("No.of frames: " + allframes.length);

    const frame = page.frame('firstFr');
    if (!frame) throw new Error('Frame "firstFr" not found');
    
    await frame.locator('input[name=fname]').fill('lucasplaywright');
    await expect(frame.locator('input[name=fname]')).toHaveValue('lucasplaywright');
    await frame.locator('input[name=lname]').fill('lucasplaywright@gmail.com');
    await expect(frame.locator('input[name=lname]')).toHaveValue('lucasplaywright@gmail.com');

    //we can access the inner frame by using the frameLocator
    const innerframe = frame.frameLocator("iframe[src='innerframe']")
    await innerframe.locator("input[name='email']").fill('lucasplaywright@gmail.com');
    await expect(innerframe.locator("input[name='email']")).toHaveValue('lucasplaywright@gmail.com');
    await page.waitForTimeout(2000);

    await frame.locator('input[name=fname]').fill('Nachito');
    await expect(frame.locator('input[name=fname]')).toHaveValue('Nachito');


    //------------------------------------------------------------------------------


    // const myFrame = page.frame('firstFr');

    // console.log("Frame: " + myFrame);

    // myFrame.fill('input[name=fname]', 'lucasplaywright');
    // await expect(myFrame.locator('input[name=fname]')).toHaveValue('lucasplaywright');

    // await myFrame.fill('input[name=lname]', 'lucasplaywright@gmail.com');
    // await expect(myFrame.locator('input[name=lname]')).toHaveValue('lucasplaywright@gmail.com');

    // expect (await myFrame.locator('p.has-text-info').textContent()).toContain('You have entered');
    // console.log("Text in frame: " + await myFrame.locator('p.has-text-info').textContent());


});
