module.exports.log = function(text) {
	driver.call(function() {console.log(text);});
};

module.exports.screenSetSize = function(x, y) {
	driver.manage().window().setSize(x || 500, y || 700);
};

module.exports.screenshot = function(filename) {
    driver.sleep(1000);
    driver.takeScreenshot().then(function(pngString) {
        require('fs').writeFileSync(__dirname + "/../data/" + (filename || (new Date()).getTime()) + ".png", new Buffer(pngString, 'base64'));
    })
    driver.sleep(1000);
};

module.exports.readTestdata = function(filename) {
	return JSON.parse(require("fs").readFileSync(__dirname + "/../data/" + filename + ".json").toString());
}

module.exports.writeTestdata = function (filename, testdata) {
	require("fs").writeFileSync(__dirname + "/../data/"+ filename+".json", JSON.stringify(testdata).replace(/\",\"/g, "\",\n\"").replace(/},{/g, "},\n\n\n{"));
}

module.exports.changeTab = function (tabNumber) {
	driver.getAllWindowHandles().then(function(handles) {
		driver.switchTo().window(handles[tabNumber - 1]);
	})
}

module.exports.screenScrollToElement = function (element, offset) {
	//http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/actions_exports_TouchSequence.html#scrollFromElement
	offset = offset || {x:0,y:0};
	(new webdriver.TouchSequence(driver)).scrollFromElement(element, offset).perform();
}

module.exports.screenScrollToOffset = function (offset) {
	//http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/actions_exports_TouchSequence.html#scrollFromElement
	// driver.executeScript("window.scrollTo(0,"+ y +")");
	// driver.executeScript("$('html, body').animate({scrollTop: ($('button').offset().top) -100}, 2000);");
	(new webdriver.TouchSequence(driver)).scroll(offset).perform();
}

module.exports.dragAndDrop = function (element, targetElement) {
	// https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/actions_exports_ActionSequence.html
	(new webdriver.ActionSequence(driver)).dragAndDrop(element, targetElement).perform();
}

module.exports.infoPage = function () {
	var result = {}

	driver.getTitle().then(function(title) {
		result.title = title;
	})

	driver.getCurrentUrl().then(function(url) {
		result.url = url;
	})

	// driver.call(function() {console.log(JSON.stringify(result));});

	return result;
}

module.exports.infoElement = function (element) {
	var result = {}

	element.getLocation().then(function(location) {
		result.x = location.x;
		result.y = location.y;
	})

	element.getSize().then(function(size) {
		result.width = size.width;
		result.height = size.height;
	})	

	element.getTagName().then(function(tagname) {
		result.tagname = tagname;
	});	

	element.getText().then(function(text) {
		result.text = text;
	});

	element.isEnabled().then(function(isEnabled) {
		result.isEnabled = isEnabled;
	});

	element.isSelected().then(function(isSelected) {
		result.isSelected = isSelected;
	});

	// driver.call(function() {console.log(JSON.stringify(result));});

	return result;
}