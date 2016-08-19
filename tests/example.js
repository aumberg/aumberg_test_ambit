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