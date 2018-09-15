/**
 * Created by Dipjyoti on 10-Jul-16.
 */
//Objects Required
var log = require('./../PageObjects/log.js');
var objects = require('../ObjectRepository/Objects.json');
var functions = require('../UserDefinedFunctions/basePage.js');
var util = require('../UserDefinedFunctions/Utility.js');

// Page Objects
var loginBank = require('./../PageObjects/LoginBank.js');
var AddCustomer = require('./../PageObjects/AddCustomer.js');

// Test Data
var url = objects.bankURL;
var username = objects.banklogindetails.username;
var password = objects.banklogindetails.password;
var CustomerName = util.cellFromXLS('H2');
var DOB = util.cellFromXLS('J2');
var Address = util.cellFromXLS('L2');
var City = util.cellFromXLS('N2');
var State = util.cellFromXLS('P2');
var Pin = util.cellFromXLS('R2');
var PhoneNo = util.cellFromXLS('T2');
var Email = util.cellFromXLS('V2');
var Password = util.cellFromXLS('X2');

var data = require('../TestData/output.json');
// var obj=JSON.parse(JSON.stringify(data));

//Test Definations
describe("Login to bank application", function () {

    beforeAll(function () {
        functions.IgnoreSynchronization();
        functions.GetUrl(url);
        functions.MaximizeWindow();
        console.log("Bank url is" + url);
    });

    it("Validate user credentials", function () {
        loginBank.login(username, password);
        console.log("Sign in successful");
        // log.info('info', 'Bank sign in successful');
    });

    it("AddCustomer", function () {
        browser.driver.findElement(by.xpath("/html/body/div[3]/div/ul/li[2]/a")).click();
        AddCustomer.AddCustomer(CustomerName, DOB, Address, City, State, Pin, PhoneNo, Email, Password);
        // browser.driver.findElement(by.name("name")).sendKeys(CustomerName);

    });
    afterAll(function () {
        browser.close();
        browser.quit();
    });
});



