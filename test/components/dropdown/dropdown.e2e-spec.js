const AxeBuilder = require('axe-webdriverjs');

const { browserStackErrorReporter } = requireHelper('browserstack-error-reporter');
const utils = requireHelper('e2e-utils');
const rules = requireHelper('default-axe-options');
const config = requireHelper('e2e-config');
requireHelper('rejection');
const axeOptions = { rules };

jasmine.getEnv().addReporter(browserStackErrorReporter);

const clickOnDropdown = async () => {
  const dropdownEl = element(by.css('div[aria-controls="dropdown-list"]'));
  await browser.driver.wait(protractor.ExpectedConditions.presenceOf(dropdownEl), config.waitsFor);
  await dropdownEl.click();
};

describe('Dropdown example-index tests', () => {
  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.driver.get(`${browser.baseUrl}/components/dropdown/example-index?theme=${browser.params.theme}`);
  });

  it('Should open dropdown list on click', async () => {
    await clickOnDropdown();

    expect(await element(by.className('is-open')).isDisplayed()).toBe(true);
  });

  it('Should scroll down to end of list, and Vermont Should be visible', async () => {
    await clickOnDropdown();
    await browser.executeScript('document.querySelector("ul[role=\'listbox\']").scrollTop = 10000');
    const dropdownElList = await element(by.css('ul[role="listbox"]'));
    const vermontOption = await element(by.css('li[data-val="VT"]'));
    const posVT = await vermontOption.getLocation();
    const dropdownElListSize = await dropdownElList.getSize();
    const posDropdownElList = await dropdownElList.getLocation();

    expect(posVT.y > posDropdownElList.y &&
      posVT.y < (posDropdownElList.y + dropdownElListSize.height)).toBeTruthy();
  });

  // Exclude IE11: Async timeout errors
  if (!utils.isIE()) {
    it('Should be accessible on init with no WCAG 2AA violations', async () => {
      await clickOnDropdown();
      const res = await AxeBuilder(browser.driver)
        .configure(axeOptions)
        .exclude('header')
        .analyze();

      expect(res.violations.length).toEqual(0);
    });
  }

  if (!utils.isSafari()) {
    it('Should arrow down to New York, and focus', async () => {
      const dropdownEl = await element(by.css('div[aria-controls="dropdown-list"]'));
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(dropdownEl), config.waitsFor);
      await dropdownEl.click();
      await dropdownEl.sendKeys(protractor.Key.ARROW_DOWN);
      await dropdownEl.sendKeys(protractor.Key.ARROW_DOWN);
      await browser.driver.sleep(config.sleep);

      expect(await element(by.className('is-focused')).getText()).toEqual('New York');
    });
  }

  if (!utils.isSafari()) {
    it('Should not work when disabled', async () => {
      const dropdownEl = await element(by.css('div[aria-controls="dropdown-list"]'));
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(dropdownEl), config.waitsFor);
      await dropdownEl.click();
      await dropdownEl.sendKeys(protractor.Key.ARROW_DOWN);
      await dropdownEl.sendKeys(protractor.Key.ARROW_DOWN);
      await browser.driver.sleep(config.sleep);

      expect(await element(by.className('is-focused')).getText()).toEqual('New York');
    });
  }

  if (utils.isChrome()) {
    xit('Should not visual regress', async () => {
      const dropdownEl = element(by.css('div[aria-controls="dropdown-list"]'));
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(dropdownEl), config.waitsFor);

      expect(await browser.protractorImageComparison.checkScreen('dropdownPage')).toEqual(0);
    });
  }

  it('Should search for Colorado', async () => {
    const dropdownEl = await element(by.css('div[aria-controls="dropdown-list"]'));
    await browser.driver
      .wait(protractor.ExpectedConditions.presenceOf(dropdownEl), config.waitsFor);
    await dropdownEl.click();
    const dropdownSearchEl = element(by.id('dropdown-search'));
    await dropdownSearchEl.click();
    await browser.driver.switchTo().activeElement().clear();
    await browser.driver.switchTo().activeElement().sendKeys('Colorado');
    // Forcefully wait for focus shift
    await browser.driver.sleep(config.sleep);

    expect(await element(by.className('is-focused')).getText()).toEqual('Colorado');
  });
});

describe('Dropdown example-ajax tests', () => {
  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.driver.get(`${browser.baseUrl}/components/dropdown/example-ajax?theme=${browser.params.theme}`);
  });

  if (!utils.isSafari()) {
    it('Should make ajax request, and arrow down to New York, and focus', async () => {
      const dropdownEl = await element(by.css('div[aria-controls="dropdown-list"]'));
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(dropdownEl), config.waitsFor);
      await dropdownEl.click();
      await dropdownEl.sendKeys(protractor.Key.ARROW_DOWN);
      await dropdownEl.sendKeys(protractor.Key.ARROW_DOWN);
      await browser.driver.sleep(config.sleep);

      expect(await element(by.className('is-focused')).getText()).toEqual('American Samoa');
    });
  }
});

describe('Dropdown example-no-search-lsf tests', () => {
  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.driver.get(`${browser.baseUrl}/components/dropdown/example-no-search-lsf?theme=${browser.params.theme}`);
  });

  it('Should select a Dropdown item when keying on a closed Dropdown component', async () => {
    const dropdownPseudoEl = await element.all(by.css('div[aria-controls="dropdown-list"]')).first();
    await browser.driver
      .wait(protractor.ExpectedConditions.presenceOf(dropdownPseudoEl), config.waitsFor);

    await dropdownPseudoEl.click();
    await dropdownPseudoEl.sendKeys('r');
    await browser.driver.sleep(config.sleep);

    expect(await element.all(by.css('div[aria-controls="dropdown-list"]')).first().getText()).toEqual('R - Rocket Raccoon');
  });

  it('Should cycle through dropdown options that begin with the same character', async () => {
    const dropdownPseudoEl = await element.all(by.css('div[aria-controls="dropdown-list"]')).first();
    await browser.driver
      .wait(protractor.ExpectedConditions.presenceOf(dropdownPseudoEl), config.waitsFor);

    await dropdownPseudoEl.click();
    await dropdownPseudoEl.sendKeys('t');
    await browser.driver.sleep(config.sleep);

    expect(await element.all(by.css('div[aria-controls="dropdown-list"]')).first().getText()).toEqual('T - Thor');

    await dropdownPseudoEl.sendKeys('t');
    await browser.driver.sleep(config.sleep);

    expect(await element.all(by.css('div[aria-controls="dropdown-list"]')).first().getText()).toEqual('T2 - Thanos');

    await dropdownPseudoEl.sendKeys('t');
    await browser.driver.sleep(config.sleep);

    expect(await element.all(by.css('div[aria-controls="dropdown-list"]')).first().getText()).toEqual('T3 - That other one that won\'t get selected');

    await dropdownPseudoEl.sendKeys('t');
    await browser.driver.sleep(config.sleep);

    expect(await element.all(by.css('div[aria-controls="dropdown-list"]')).first().getText()).toEqual('T - Thor');
  });
});

describe('Dropdown example-no-search-filtering tests', () => {
  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.driver.get(`${browser.baseUrl}/components/dropdown/example-no-search-filtering?theme=${browser.params.theme}`);
  });

  it('Should properly filter when multiple characters are typed ahead', async () => {
    const dropdownPseudoEl = await element.all(by.css('div[aria-controls="dropdown-list"]')).first();
    await browser.driver
      .wait(protractor.ExpectedConditions.presenceOf(dropdownPseudoEl), config.waitsFor);
    await dropdownPseudoEl.click();
    await dropdownPseudoEl.sendKeys('15');
    await browser.driver.sleep(config.sleep);

    expect(await element.all(by.css('div[aria-controls="dropdown-list"]')).first().getText()).toEqual('15');

    await dropdownPseudoEl.sendKeys('1');
    await browser.driver.sleep(config.sleep);

    expect(await element.all(by.css('div[aria-controls="dropdown-list"]')).first().getText()).toEqual('10');

    await dropdownPseudoEl.sendKeys('1');
    await browser.driver.sleep(config.sleep);

    expect(await element.all(by.css('div[aria-controls="dropdown-list"]')).first().getText()).toEqual('11');

    await dropdownPseudoEl.sendKeys('101');
    await browser.driver.sleep(config.sleep);

    expect(await element.all(by.css('div[aria-controls="dropdown-list"]')).first().getText()).toEqual('101');

    await dropdownPseudoEl.sendKeys('56');
    await browser.driver.sleep(config.sleep);

    expect(await element.all(by.css('div[aria-controls="dropdown-list"]')).first().getText()).toEqual('56');
  });

  it('Should clear a previous dropdown selection when pressing DELETE', async () => {
    const dropdownPseudoEl = await element.all(by.css('div[aria-controls="dropdown-list"]')).first();
    await browser.driver
      .wait(protractor.ExpectedConditions.presenceOf(dropdownPseudoEl), config.waitsFor);

    await dropdownPseudoEl.click();
    await dropdownPseudoEl.sendKeys('15');
    await browser.driver.sleep(config.sleep);

    expect(await element.all(by.css('div[aria-controls="dropdown-list"]')).first().getText()).toEqual('15');

    await dropdownPseudoEl.sendKeys(protractor.Key.DELETE);
    await browser.driver.sleep(config.sleep);
    const dropdownHTML = await browser.executeScript('return document.querySelector("div[aria-controls=\'dropdown-list\']").innerHTML');

    expect(dropdownHTML).toEqual('<span>&nbsp;</span>');
  });
});