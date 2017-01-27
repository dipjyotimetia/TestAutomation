/**
 * Created by Dipjyoti on 18-Dec-16.
 */
var objects=require('../ObjectRepository/Objects.json');
// var data=require('../TestData/output.json');
// var obj=JSON.parse(data);
var helpers = require('protractor-helpers');
var compass = require('protractor-compass');


var addcustomer=function(){

  this.CustomerName=element(by.name(objects.locators.addnewcustomer.customername));
  this.DOB=element(by.name(objects.locators.addnewcustomer.dob));
  this.Address=element(by.name(objects.locators.addnewcustomer.address));
  this.City=element(by.name(objects.locators.addnewcustomer.city));
  this.State=element(by.name(objects.locators.addnewcustomer.state));
  this.Pin=element(by.name(objects.locators.addnewcustomer.pin));
  this.PhoneNo=element(by.name(objects.locators.addnewcustomer.phoneno));
  this.Email=element(by.name(objects.locators.addnewcustomer.email));
  this.Password=element(by.name(objects.locators.addnewcustomer.password));
  this.SubmitButton=element(by.name(objects.locators.addnewcustomer.submitbutton));

  this.AddCustomer=function(CustomerName,DOB,Address,City,State,Pin,PhoneNo,Email,Password){
    // this.NewCustomer.click();
    this.CustomerName.sendKeys(CustomerName);
    this.DOB.sendKeys(DOB);
    this.Address.sendKeys(Address);
    this.City.sendKeys(City);
    this.State.sendKeys(State);
    this.Pin.sendKeys(Pin);
    this.PhoneNo.sendKeys(PhoneNo);
    this.Email.sendKeys(Email);
    this.Password.sendKeys(Password);
    this.SubmitButton.click();
  }
};

module.exports=new addcustomer();

