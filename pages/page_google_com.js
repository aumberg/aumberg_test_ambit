// page_gmail_com.js
var Page = require('./page')
var assert = require('chai').assert;

module.exports = Object.create(Page, {
    /**
     * define elements
     */
    searchInp: { get: function () { return browser.element('//*[@name="q"]'); } },
    searchBtn: { get: function () { return browser.element('//*[@id="sblsbb"]/button/span'); } },
    firstResultLink: { get: function () { return browser.element(('(//*[@id="rso"]//div[@class="srg"]//h3[@class="r"]/a)[1]')); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        browser.url('http://google.com')
        assert.equal(browser.getTitle(), 'Google')
    } },
    openFirstResultLink: { value: function() {
        this.firstResultLink.click();
        browser.window(browser.windowHandles().value[1]);
    } },    
    search: { value: function(request) {
        this.searchInp.setValue(request);
        browser.keys("\uE007");
    } }
});