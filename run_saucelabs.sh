#!/bin/sh

SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd $SCRIPTPATH
export PATH=$DIR/../lib:/usr/local/bin:$PATH
echo "run tests on saucelabs"
node_modules/mocha/bin/mocha --no-timeouts -C tests --options='
{
	"hub": "http://ondemand.saucelabs.com:80/wd/hub"
    ,"desiredCapabilities": {
        "browserName": "chrome"
        ,"platform": "Windows 10"
        ,"version": "45"
        ,"name": "Sample selenium-webdriver test"
        ,"username": ""
        ,"accessKey": ""
    }
}
'