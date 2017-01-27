/**
 * Created by Dipjyoti on 10-Jul-16.
 */
//Objects Required
var logger=require('./../PageObjects/log.js');
var objects=require('../ObjectRepository/Objects.json');
var functions=require('../UserDefinedFunctions/basePage.js');
var util=require('../UserDefinedFunctions/Utility.js');

// Page Objects
var loginBank=require('./../PageObjects/LoginBank.js');
var AddCustomer=require('./../PageObjects/AddCustomer.js');

// Test Data
var url=objects.bankURL;
var username=objects.banklogindetails.username;
var password=objects.banklogindetails.password;
var CustomerName=util.cellFromXLS('H2');
var DOB=util.cellFromXLS('J2');
var Address=util.cellFromXLS('L2');
var City =util.cellFromXLS('N2');
var State =util.cellFromXLS('P2');
var Pin=util.cellFromXLS('R2');
var PhoneNo=util.cellFromXLS('T2');
var Email=util.cellFromXLS('V2');
var Password=util.cellFromXLS('X2');

var data=require('../TestData/output.json');
// var obj=JSON.parse(JSON.stringify(data));

//Test Definations
describe("Login to bank application",function(){

  beforeAll(function () {
    functions.IgnoreSynchronization();
    functions.GetUrl(url);
    functions.MaximizeWindow();
    console.log("Bank url is" + url);
    //
    // for(var i = 0; i < data.length; ++i){
    //   //do something with obj[i]
    //   for(var ind in data[i]) {
    //     console.log(ind);
    //     for(var vals in data[i][ind]){
    //       console.log(vals, data[i][ind][vals]);
    //       console.log(vals);
    //
    //     }
    //   }
    // }

    // var tcno="TC002";
    //
    // for (var i = 0; i < data.length; i++) {
    //   var arayvalue = data[i].tcno;
    //   if (arayvalue == tcno) {
    //     var Name = data[i].Name
    //     var Surname = data[i].Surname
    //     var FullName = data[i].FullName
    //     var DOB = data[i].DOB
    //   }
    // }


    //
    // console.log(Name);
    // console.log(Surname);
    // console.log(FullName);
    // console.log(DOB);
    logger.log('info','Website navigated successfully');
  });

  it("Validate user credentials",function(){
    loginBank.login(username,password);
    console.log("Sign in successful");
    logger.log('info','Bank sign in successful');
  });

  it("AddCustomer",function(){
    browser.driver.findElement(by.xpath("html/body/div[2]/div/ul/li[2]/a")).click();
    AddCustomer.AddCustomer(CustomerName,DOB,Address,City,State,Pin,PhoneNo,Email,Password);
    // browser.driver.findElement(by.name("name")).sendKeys(CustomerName);

  });
  afterAll(function(){
    browser.close();
    browser.quit();
  });
});



