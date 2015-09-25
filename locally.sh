#!/bin/sh

DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
# Xvfb :1 -screen 5 1024x768x8 &
# export DISPLAY=:1.5
export PATH=$DIR/../lib:/usr/local/bin:$PATH
echo "run tests locally"
exec node_modules/mocha/bin/mocha -C test --options='
{
    "desiredCapabilities": {
        "browserName": "firefox"
    }
}
'
# ,"hub": "http://127.0.0.1:4444/wd/hub"