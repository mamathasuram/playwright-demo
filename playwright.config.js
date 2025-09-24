

const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  timeout: 30000,
  reporter: [
    ['list'],                 // console output
    ['allure-playwright']     // Allure reporter
  ],
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
};

module.exports = config;