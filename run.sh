#!/bin/sh

SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd $SCRIPTPATH
# # не показывать графику браузера с помощью программы Xvfb
# Xvfb :1 -screen 5 1280x1024x8 > /dev/null 2>&1 &
# export DISPLAY=:1.5
echo "build tests"
npm install
echo "run tests locally"
# java -jar ./selenium-server-standalone-2.53.1.jar &
# ./node_modules/.bin/phantomjs --webdriver=4445 &
./node_modules/.bin/wdio wdio.conf.js