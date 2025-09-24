// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';
// import loginData from '../test-data/loginData.json'
// test('test', async ({ page }) => {
//   const login = new LoginPage(page);

//   await login.goto();
//   await login.enterCredentials("standard_user", "secret_sauce");
//   await login.clickOnLogin();


// });

// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage.js';
// import data from '../test-data/loginData.json';

// test('test', async ({ page }) => {
//   const login = new LoginPage(page);
//   await login.goto();
//   await login.enterCredentials(data.Valid_user.username, data.Valid_user.password);
//     await login.clickOnLogin();
//  // await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
// });



import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import logger from '../utils/loger.js';
import data from '../test-data/loginData.json';

test('Test', async ({ page }) => {
 logger.info('Starting Login Test')

  const login = new LoginPage(page);
  await login.goto();
  // ✅ Using correct JSON key
  await login.enterCredentials(data.Valid_user.username, data.Valid_user.password);

  await login.clickOnLogin();
  
  logger.info('Login Test Completed')
});
