#!/bin/sh

SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd $SCRIPTPATH
# export PATH=$DIR/../lib:/usr/local/bin:$PATH
echo "build tests"
npm install
echo "run tests locally"
node_modules/mocha/bin/mocha -R nyan --no-exit --colors --no-timeouts -C tests --options='
{
	"desiredCapabilities": {
        "browserName": "firefox"
    }
}
'

# "hub": "http://127.0.0.1:4444/wd/hub",