function Page () {
    this.title = 'My Page';
}

Page.prototype.open = function (path) {
    browser.url('http://gmail.com')
}

module.exports = new Page()

module.exports.readJSON = function(filename) {
	return JSON.parse(require("fs").readFileSync(__dirname + "/../data/" + filename + ".json").toString());
}

module.exports.writeJSON = function (filename, testdata) {
	require("fs").writeFileSync(__dirname + "/../data/"+ filename+".json", JSON.stringify(testdata).replace(/\",\"/g, "\",\n\"").replace(/},{/g, "},\n\n\n{"));
}

browser.element_old = browser.element
browser.element = function(selector) {
	// browser.waitUntil(function() {
	// 	if (browser.isVisible(selector)) {
	// 		return true
	// 	}
	// }, 10000, "element not found")

	browser.waitForVisible(selector, 10000);

	return browser.element_old(selector)
}