import { test, expect } from '@playwright/test';

test('Interact with multiple tabs', async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo')

    // Interact with multiple windows
    const [multiPages] = await Promise.all([
        page.waitForEvent('popup'),
        page.click("#followboth")
        ]);

    await multiPages.waitForLoadState(); //without this, the pages will be 2 and not 3 (pages are: lambdatest, facebook, X)
    const pages = multiPages.context().pages();
    console.log("No.of pages: " + pages.length);
    
    //show the URLs of all opened pages
    pages.forEach(tab =>{
        console.log(tab.url());
    })

    // Interact with a specific tab
    let facebookTab;
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].url().includes('facebook')) {
            facebookTab = pages[i];
            break;
        }
    }
    if (!facebookTab) {
        throw new Error('Facebook tab not found');
    }
    await facebookTab.waitForLoadState();
    await facebookTab.fill('#_r_10_', 'lucasscognamiglio9@gmail.com');
    await expect(facebookTab.locator('#_r_10_')).toHaveValue('lucasscognamiglio9@gmail.com');
    
    //verify the email was filled
    const text = await facebookTab.locator('#_r_10_').inputValue();
    console.log(text);

    //------------------------------------------------------------------------------
    
    // Interact with a new window
    // const [newWindow] = await Promise.all([
    //     page.waitForEvent('popup'),
    //     page.click("text='Follow On Twitter'")
    // ]);

    // console.log(newWindow.url());


});