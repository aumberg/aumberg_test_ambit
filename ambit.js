var options = {
    "hub": undefined // "http://127.0.0.1:4444/wd/hub",  "http://ondemand.saucelabs.com:80/wd/hub"
    ,"desiredCapabilities": {
        "browserName": "firefox" // "Chrome"
        ,"platform": undefined //'Windows 10',
        ,"version": undefined
        ,"name": undefined //'Sample selenium-webdriver test',
        ,"username": undefined
        ,"accessKey": undefined
    }
};

module.exports = function(testName, func) {
    webdriver = require('selenium-webdriver');
    until = webdriver.until;
    By = webdriver.By;
    driver = undefined;

    // webdriver.promise.controlFlow().on('uncaughtException', function(e) {
    //     driver.quit();
    //     console.log("theerror");
    //     console.log(e);
    //     throw Error(e);
    //     process.exit(1);
    // });

    describe('----------------TEST----------------', function(){
        this.timeout(999999999);

        beforeEach(function() {
            for (var i = 0; i < process.argv.length; i++) {
                if ("--options=" === process.argv[i].slice(0, 10)) {
                    try {
                        var jsonarg = JSON.parse(process.argv[i].slice(10).replace(/\'/g, "\""));
                        options = require('util')._extend(options, jsonarg);
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
            driver.findElement_old = driver.findElement;
            driver.findElement = function(locator, timeout) {
                timeout = timeout || 10000;
                driver.wait(until.elementLocated(locator), timeout).then(function() {},function() {})
                driver.wait(until.elementIsVisible(driver.findElement_old(locator).then(function() {},function() {})), timeout).then(function() {},function() {})
                var e = driver.findElement_old(locator)
                
                return e
            }

            console.log(this["currentTest"]["file"] + " \"" + this["currentTest"]["title"] + "\"");
        })

        it(testName, function(callback) {
            func();
            driver.call(callback)
        });


        after(function(callback) {
            driver.quit();
            driver.call(callback)
        });        
    }) 
}