#!/bin/sh

SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd $SCRIPTPATH
echo "run tests locally"
# ./node_modules/.bin/phantomjs --webdriver=4445 &
./node_modules/.bin/wdio wdio.phantomjs.conf.js