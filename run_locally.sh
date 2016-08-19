#!/bin/sh

SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd $SCRIPTPATH
# не показывать графику браузера с помощью программы Xvfb
Xvfb :1 -screen 5 1280x1024x8 > /dev/null 2>&1 &
export DISPLAY=:1.5
# export PATH=$DIR/../lib:/usr/local/bin:$PATH
echo "build tests"
npm install
echo "run tests locally"
node_modules/mocha/bin/mocha --no-timeouts -C tests --options='
{
    "desiredCapabilities": {
        "browserName": "firefox"
    }
}
'
# ,"hub": "http://127.0.0.1:4444/wd/hub"