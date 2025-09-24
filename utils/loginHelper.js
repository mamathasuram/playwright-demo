
// utils/loginHelper.js
import { LoginPage } from '../pages/LoginPage.js';
import data from '../test-data/loginData.json'; // Optional, if using JSON

export async function login(page) {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterCredentials(
        data.Valid_user.username,
        data.Valid_user.password
    );
    await loginPage.clickOnLogin();
}
