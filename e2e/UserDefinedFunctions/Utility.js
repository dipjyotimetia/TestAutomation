var EXCEL=function(){

  // Function used to read test data from xls file
  this.cellFromXLS = function (cellId) {
    'use strict';
    //Define sheetNumber
    var sheetNumber = 0;
    //Define file Path name
    var fileNamePath = "./e2e/TestData/Data.xls";
    //NodeJs read file
    var XLS;
    if (typeof require !== 'undefined') {
      XLS = require('xlsjs');
    }
    //Working with workbook
    var workbook = XLS.readFile(fileNamePath);
    var sheetNamelist = workbook.SheetNames;
    var value = workbook.Sheets[sheetNamelist[sheetNumber]][cellId].v;
    return value;
  }

//Function used to read test data from  (Note: If B1 then it should C1 in cellid)
  this.cellFromXLSX = function (cellId) {
    'use strict';
    //Define sheetNumber
    var sheetNumber = 0;
    //Define file Path name
    var fileNamePath = "./e2e/TestData/DataSheet.xlsx";
    //NodeJs read file
    var XLSX;
    if (typeof require !== 'undefined') {
      XLSX = require('xlsx');
    }
    //Working with workbook
    var workbook = XLSX.readFile(fileNamePath);
    var sheetNamelist = workbook.SheetNames;
    var value = workbook.Sheets[sheetNamelist[sheetNumber]][cellId].v;
    return value;
  }

  //Function used to write to the test data
  this.cellToXLSX = function (cellId) {
    'use strict';
    //Define sheetNumber
    var sheetNumber = 0;
    //Define file Path name
    var fileNamePath = "./e2e/TestData/DataSheet.xlsx";
    //NodeJs read file
    var XLSX;
    if (typeof require !== 'undefined') {
      XLSX = require('xlsx');
    }
    //Working with workbook
    var workbook = XLSX.readFile(fileNamePath);
    var sheetNamelist = workbook.SheetNames;
    var value = workbook.Sheets[sheetNamelist[sheetNumber]][cellId].v;
    return value;
  }
}
module.exports=new EXCEL();
