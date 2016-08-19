var helpers = require('../helpers/helpers');

module.exports.elementSearchInput = function() {
	return driver.findElement(By.name('q'));
}

module.exports.elementSearchButton = function() {
	return driver.findElement(By.xpath('//*[@id="sblsbb"]/button/span'));
}

module.exports.elementFirstLink = function() {
	return driver.findElement(By.xpath('(//*[@id="rso"]//div[@class="srg"]//h3[@class="r"]/a)[1]'));
}

module.exports.go = function() {
	driver.get("http://www.google.com");
	driver.wait(until.titleIs('Google'), 30000);
}

module.exports.search = function(request) {
	module.exports.elementSearchInput().sendKeys(request);
	module.exports.elementSearchButton().click()
}

module.exports.goToFirstLink = function() {
	module.exports.elementFirstLink().click();
	helpers.changeTab(2);
}
