/**
 * Created by Dipjyoti on 06-Jul-16.
 */

var logger=require('./log.js');
describe('angularjs homepage', function() {

        var LoginPage=require('../E2E/LoginPage.js');

        beforeEach(function(){
            browser.get('http://www.angularjs.org');
            logger.log('info','Navigating to the website')
        });

    it('should greet the named user', function() {
        LoginPage.name.sendKeys("Julie");
        //element(by.model('yourName')).sendKeys('Julie');
        var greeting = element(by.binding('yourName'));
        expect(greeting.getText()).toEqual('Hello Julie!');
        logger.log('info','greet the named user')
    });
});