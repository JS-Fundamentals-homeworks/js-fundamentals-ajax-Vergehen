const puppeteer = require('puppeteer');

describe('User City Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should display correct city for user', async () => {
    await page.goto('http://127.0.0.1:5500/index.html');

    const userName = 'Leanne Graham';
    await page.type('#userNameInput', userName);

    await page.click('#getUserButton');

    await page.waitForTimeout(3000);
    await page.waitForSelector('#userCity');

    const userCity = await page.$eval('#userCity', element => element.textContent);
    expect(userCity).toBe('Gwenborough');
  }, 10000);
});
