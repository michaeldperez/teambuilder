exports.config = {
  specs: ['../test/e2e/**/*.js'],
  onPrepare: function() {
    browser.driver.manage().window().setPosition(0,0);
    browser.driver.manage().window().setSize(1280, 720);
  }
};