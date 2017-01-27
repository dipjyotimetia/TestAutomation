/**
 * Created by Dipjyoti on 27-Jan-17.
 */
var date=new Date();
var day=date.getUTCDate();
var time=date.getTime();
var month=date.getMonth();
var year=date.getFullYear();
var datetime=year +'.'+[month+1] +'.'+day+'.'+time;

var HtmlScreenshotReporter=require('protractor-jasmine2-screenshot-reporter');

var reporter=new HtmlScreenshotReporter({
  dest: './e2e/Reporter',
  filename:'e2e_TestResult_'+datetime+'.html',
  reportTitle:'E2E_Test Summary Report',
  ignoredSkippedSpec:true,
  cleanDestination:false,
  showSummary:true,
  showConfiguration:true,
  clearFoldersBeforeTest:true,
  pathBuilder: function(currentSpec,suites,browserCapabilities){
    return browserCapabilities.get('browserName')+'/'+currentSpec.id;
  },
  configurationStrings:{
    Generated:"This report is generated on" +Date()
  }
});

exports.config={
  directConnect:true,
  framework:'jasmine2',

  capabilities:{
    'browserName':'chrome'
  },

  //TestSuites
  // suites:{
  //   all:'e2e/**/*.js'
  // },

  allScriptsTimeout:90000,

  getPageTimeout:90000,

  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

// Assign the test reporter to each running instance
  onPrepare: function() {
    browser.ignoreSynchronization=true,
      browser.driver.manage().window().maximize(),
//Reporters
      require('jasmine-reporters');
    var mkdirp=require('mkdirp');
    var path='./e2e/Reporter';
    mkdirp(path,function(err){
    });
    jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(path,true,true));
    jasmine.getEnv().addReporter(reporter);

    var SpecReporter=require('jasmine-spec-reporter');
    //add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
        displayStacktrace:'spec',
        displayFailuresSummary:true,
        displayPendingSummary:true,
        displaySuccessfulSpec:true,
        displayPendingSpec:true,
        displaySpecDuration:true,
        displaySuiteNumber:false,
        colors:true,
        colors:{
          success:'green',
          failure:'red',
          pending:'yellow'
        },
        prefixes:{
          success:'(PASS)',
          failure:'(FAIL)',
          pending:'(PEND)'
        },
        customProcessors:[]
      }
    ));

    //JasmineAllureReporter
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  },


  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
  jasmineNodeOpts: {
    // defaultTimeoutInterval: 60000,
    defaultTimeoutInterval: 30000,
    showTiming: true,
    isVerbose: true,
    realtimeFailure: true,
    includeStackTrace: true,
    showColors: true,
    print: function () {
    }
  },
}
