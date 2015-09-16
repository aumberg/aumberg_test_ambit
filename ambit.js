var extend = require('util')._extend;
var webdriver = require('selenium-webdriver');
var options = {
    "hub": undefined // "http://127.0.0.1:4444/wd/hub",  "http://ondemand.saucelabs.com:80/wd/hub"
    ,"desiredCapabilities": {
        "browserName": "firefox" // "Chrome"
        ,"platform": undefined //'Windows 10',
        ,"name": undefined //'Sample selenium-webdriver test',
        ,"username": undefined
        ,"accessKey": undefined
    }
};

module.exports = function(testName, func) {
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

    describe('----------------TEST----------------', function(){
        this.timeout(999999);

        beforeEach(function() {
            for (var i = 0; i < process.argv.length; i++) {
                if ("--options=" === process.argv[i].slice(0, 10)) {
                    try {
                        var jsonarg = JSON.parse(process.argv[i].slice(10).replace(/\'/g, "\""));
                        options = extend(options, jsonarg);
                    }
                    catch (e) {
                        console.log("not valid JSON in argument", process.argv[i].slice(10), e);
                        process.exit();
                    }
                }
            };

            driver = new webdriver.Builder()
                .usingServer(options.hub)
                .forBrowser(options.desiredCapabilities.browserName)
                .withCapabilities(options.desiredCapabilities)
                .build();

            driver.options = options;

            // driver.findElement_old = driver.findElement;
            // driver.findElement = function(locator) {
            //   driver.sleep(500); // wait page reload etc.
            //   return driver.findElement_old(locator)
            // }

            console.log("\"" + this["currentTest"]["title"] + "\" " + this["currentTest"]["file"]);
        })

        it(testName, function(callback) {
            func();
            driver.quit();
            driver.call(callback)
        });
    }) 
}