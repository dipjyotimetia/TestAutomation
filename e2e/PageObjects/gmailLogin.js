/**
 * Created by Dipjyoti on 09-Jul-16.
 */
var logger=require('../UserDefinedFunctions/log.js');
var objects=require('../ObjectRepository/Objects.json');
// var getdata=require('../UserDefinedFunctions/Utility.js');
var using=require('jasmine-data-provider');

describe("Test Gmail",function(){
  var LoginPage=require('../PageObjects/LoginPage.js');
  // var data=getdata.cellFromXLS('D1');
  beforeEach(function(){
    //if working on non ags websites
    browser.ignoreSynchronization=true;
    browser.get(objects.testsiteURL);
    browser.manage().window().maximize();
    console.log("test site url is"+objects.testsiteURL);
    // console.log("Excel data is"+data);
    logger.log('Info','Website navigated successfully');
  });
  using([{UserName:objects.userdetails.username1,Password:objects.userdetails.password1},{UserName:objects.userdetails.username2,Password:objects.userdetails.password2}],
    function(data){
      it("Validate user credentials",function(){
        LoginPage.UserName.sendKeys(data.UserName);
        LoginPage.Next.click();
        browser.sleep(700);
        LoginPage.Password.sendKeys(data.Password);
        LoginPage.SignInButon.click();
      });

    });

});
