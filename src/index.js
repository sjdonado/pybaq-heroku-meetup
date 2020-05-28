const puppeteer = require('puppeteer');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const LINK = 'https://www.who.int/es/news-room/detail/search-results';

const searchScraper = async (searchValue) => {
  const browser = await puppeteer.launch({ headless: process.env.NODE_ENV === 'production' });
  const page = await browser.newPage();
  await page.goto(LINK, { 'waitUntil': 'networkidle0' });

  const searchSelector = '#\\38 778386f-3360-4183-8632-bf480f1626f1';
  const submitSelector = '#\\35 8d6c148-7be1-4ae3-bcb0-8e282b54fd8e';
  const searchResultsSelector = '#PageContent_C002_Col01 > div.sf-search-results > div.sf-search-results--container.media-list > div';

  await page.waitForSelector(searchSelector);
  await page.type(searchSelector, searchValue);

  await page.waitForSelector(submitSelector);
  await page.click(submitSelector);

  await page.waitForSelector(searchResultsSelector);
  const results = await page.evaluate(async (searchResultsSelector) => {
    const latestNews = [...document.querySelectorAll(searchResultsSelector)].map((child) => {
      const linkChild = child.firstElementChild.firstElementChild;
      const link = linkChild.href;
      const title = linkChild.firstElementChild.innerText;
      const date = linkChild.children[1].firstElementChild.innerText;
      const description = linkChild.lastElementChild.innerText;
      return { title, date, description, link };
    })
    return latestNews;
  }, searchResultsSelector);

  await browser.close();

  return results;
}

app.get('/search', async (req, res) => {
  const { q } = req.query;
  if (!q) res.status(400).json({ message: 'q param is required' });
  try {
    const data = await searchScraper(q);
    res.json({ data });
  } catch({ message }) {
    res.status(500).json({ message });
  }
});

app.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));
