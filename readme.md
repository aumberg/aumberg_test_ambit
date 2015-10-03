# aumberg_test_ambit

Wrapper for write client tests with [selenium-webdriver](https://code.google.com/p/selenium/wiki/WebDriverJs) ([API](http://seleniumhq.github.io/selenium/docs/api/javascript/index.html)) and [Mocha](https://github.com/mochajs/mocha)

Steps:
* Record test actions with [Selenium Builder](http://seleniumbuilder.github.io/se-builder/)
* Export actions to **selenium-webdriver** script
* Remove excess, wrap actions with **ambit** function

Example:
```
require('../ambit.js')("example", function() {
	driver.get("http://www.google.com");
	driver.wait(until.titleIs('Google'), 30000);
	driver.findElement(By.name('q')).sendKeys('webdriver');
	driver.sleep(2000);
	driver.findElement(By.name('btnG')).click();
	driver.wait(until.titleContains('webdriver'), 3000);
	driver.getTitle().then(function(title) {
	  console.log(title);
	});
});
```