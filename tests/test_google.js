var page = require('../pages/page');
var page_gmail_com = require('../pages/page_gmail_com');
var page_google_com = require('../pages/page_google_com');

describe('test google', function() {
    it('google search "selenium"', function () {
    	browser.windowHandleSize({width: 700, height: 300})
		page_google_com.open()
		page_google_com.search("selenium")
		page_google_com.openFirstResultLink()
		browser.pause(2000)
		browser.saveScreenshot(__dirname + "/../data/selenium_site.png");

    });
    it('autorize gmail', function () {
    	browser.reload()
        page_gmail_com.open();
        page_gmail_com.signIn(page.readJSON("users")["user"]["email"], page.readJSON("users")["user"]["password"]);
    });   
});