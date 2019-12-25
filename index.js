const puppeteer = require("puppeteer");
const app = require("express")();

let browser;
let page;

const getSongURL = async (req, res, next) => {
  try {
    var hrstart = process.hrtime();
    browser = await puppeteer.launch({
      // headless: false,
      // executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    });
    page = await browser.newPage();


    const word = req.query.word;
    console.log(word);
    await page.goto("https://www.google.com/search?q=define+"+word);

    await page.waitForSelector('input[aria-label="Search"]');

//    await page.screenshot({ path: "screenshot.png" });
    const _word = await page.$eval('[data-dobid="hdw"]', el => el.textContent);
    const _pronunce = await page.$eval(".lr_dct_ph span", el => el.textContent);
    const _description = await page.$eval(
      '[data-dobid="dfn"] span',
      el => el.textContent
    );
    const _synonyms = await page.$$eval("td span.SDZsVb", __synonyms => {
      let _synonyms = [];
      for (var i = 0; i < 5 && i < __synonyms.length; i++) {
        _synonyms.push(__synonyms[i].textContent);
      }
      return _synonyms;
    });
    await page.close();
    console.log(process.hrtime(hrstart));
    res.send({ _word, _description, _pronunce, _synonyms });
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

app.get("/word", getSongURL);

app.listen(3000);
