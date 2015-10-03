#!/bin/sh

DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
export PATH=$DIR/../lib:/usr/local/bin:$PATH
echo "run tests on saucelabs"
exec node_modules/mocha/bin/mocha --no-timeouts -C test --options='
{
	"hub": "http://ondemand.saucelabs.com:80/wd/hub"
    ,"desiredCapabilities": {
        "browserName": "chrome"
        ,"platform": "Windows 10"
        ,"version": "45"
        ,"name": "Sample selenium-webdriver test"
        ,"username": 
        ,"accessKey": 
    }
}
'