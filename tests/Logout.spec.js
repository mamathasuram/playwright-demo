// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';
// import { LogoutPage } from '../pages/LogoutPage';

// test('logout', async ({ page }) => {
//     const login = new LoginPage(page);
//     const logout = new LogoutPage(page);

//     // // Login
//      await login.goto();
//      await login.enterCredentials("standard_user", "secret_sauce");
//      await login.clickOnLogin();

//     // Logout
//     await logout.ClickOnlogoutslide();
//     await logout.ClickOnlogout();

    
// });
import { test, expect } from '@playwright/test';
import { login } from '../utils/loginHelper.js';
import { LogoutPage } from '../pages/LogoutPage';
import logger from '../utils/loger.js';

test('Logout', async ({ page }) => {
    logger.info('Starting Logout Test')
    await login(page); // Global login

    const logout = new LogoutPage(page);
    await logout.ClickOnlogoutslide();
    await logout.ClickOnlogout();
    logger.info('Ending of Logout Test')
});
