const puppeteer = require('puppeteer');

describe('User List Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should display users on the page', async () => {
    await page.goto('http://127.0.0.1:5500/');

    await page.waitForTimeout(3000);

    const userList = await page.$('.usersList');
    expect(userList).toBeTruthy();

    const userItems = await userList.$$('li');
    expect(userItems.length).toBeGreaterThan(0);
  }, 10000);
});
