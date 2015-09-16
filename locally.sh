#!/bin/sh

DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
export PATH=$DIR/../lib:/usr/local/bin:$PATH
echo "run tests locally"
exec node_modules/mocha/bin/mocha -C test --options='
{
    "desiredCapabilities": {
        "browserName": "firefox"
    }
}
'