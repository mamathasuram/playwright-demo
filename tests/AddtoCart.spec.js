// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';
// import { addtocartPage } from '../pages/addtocartPage';

//  test(' add items to cart', async ({ page }) => {
//      // Login
//      const login = new LoginPage(page);
//     await login.goto();
//     await login.enterCredentials("standard_user", "secret_sauce");
//     await login.clickOnLogin();

//      // Add to cart
//     const addtocart = new addtocartPage(page);
//     await addtocart.ClickOnaddtocart1();
//     await addtocart.ClickOnaddtocart2();

   
// });
import { test, expect } from '@playwright/test';
import { login } from '../utils/loginHelper.js';
import { addtocartPage } from '../pages/addtocartPage';
import logger from '../utils/loger.js';

test('Add items to cart', async ({ page }) => {
    logger.info('Starting  of Add items to cart')
    await login(page); // Global login called once

    const addtocart = new addtocartPage(page);
    await addtocart.ClickOnaddtocart1();
    await addtocart.ClickOnaddtocart2();
     logger.info('Ending of  Add items to cart')
});
