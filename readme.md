# aumberg_test_ambit

Wrapper for write client tests with [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) ([API](http://seleniumhq.github.io/selenium/docs/api/javascript/index.html)) and [Mocha](https://github.com/mochajs/mocha)

Steps:
* Install [firefox](https://www.mozilla.org/ru/firefox/products/) browser, [nodejs](https://nodejs.org/en/download/)
* Record test actions with [Selenium Builder](http://seleniumbuilder.github.io/se-builder/) and export actions to **selenium-webdriver** script or write js-test manualy
* Wrap selenium-webdriver test with **ambit** function
* Run start-script ./run.sh or ./run.bat

Test example:
```
var helpers = require('../helpers/helpers');
var google_com = require('../pages/google_com');

require('../ambit.js')("example", function() {
	helpers.screenSetSize(700,300);
	google_com.go()
	google_com.search("selenium")
	var infoPage = helpers.infoPage()
	driver.call(function() {console.log(infoPage.title);});
	var infoElement = helpers.infoElement(google_com.elementFirstLink())
	driver.call(function() {
		helpers.writeTestdata("testdata", {"firstLinkText": infoElement.text})
		console.log(helpers.readTestdata("testdata").firstLinkText);
	})
	google_com.goToFirstLink()
	helpers.screenshot("selenium_site");
});
```