// page_gmail_com.js
var Page = require('./page')
var assert = require('chai').assert;

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    usernameInp: { get: function () { return browser.element('//*[@id="Email"]'); } },
    passwordInp: { get: function () { return browser.element('//*[@id="Passwd"]'); } },
    nextBtn:     { get: function () { return browser.element('//*[@id="next"]'); } },
    signInBtn:     { get: function () { return browser.element('//*[@id="signIn"]'); } },
    composeBtn:     { get: function () { return browser.element('//*[@class="aic"]/div[@class="z0"]/div'); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        browser.url('http://gmail.com')
    } },
    signIn: { value: function(username, password) {
        console.log("title is ",this.title)
        this.usernameInp.setValue(username);
        this.nextBtn.click();
        this.passwordInp.setValue(password);
        this.signInBtn.click();
        browser.pause(5000);
        assert.equal(browser.getText(this.composeBtn.selector), 'COMPOSE')
    } }
});

module.exports = LoginPage