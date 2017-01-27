/**
 * Created by Dipjyoti on 06-Jul-16.
 */
var objects=require('./Objects.json');
var loginPage=function(){
  this.UserName=element(by.xpath(objects.locators.loginpage.username));
  this.Next=element(by.xpath(objects.locators.loginpage.next));
  this.Password=element(by.xpath(objects.locators.loginpage.password));
  this.SignInButon=element(by.xpath(objects.locators.loginpage.SignIn));
}

module.exports=new loginPage();
