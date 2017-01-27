/**
 * Created by Dipjyoti on 10-Jul-16.
 */
var objects=require('../ObjectRepository/Objects.json');
var loginBank=function(){
    this.UserName=element(by.name(objects.locators.loginpagebank.username));
    this.Password=element(by.name(objects.locators.loginpagebank.password));
    this.SignInButon=element(by.name(objects.locators.loginpagebank.LoginButton));

    this.login=function(UserName,Password)
    {
      this.UserName.sendKeys(UserName);
      this.Password.sendKeys(Password);
      this.SignInButon.click();
    }
};
module.exports=new loginBank();
