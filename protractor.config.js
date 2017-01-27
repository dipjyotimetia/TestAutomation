/**
 * Created by Dipjyoti on 15-Dec-16.
 */

var fs = require('fs');
var path = require('canonical-path');
var _ = require('lodash');

exports.config = {

  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
    // 'browserName': 'firefox'

    // 'browserName': 'internet explorer',
    // 'platform': 'ANY',
    // 'version': '11'
  },

  // multicapabilities:[{
  //   'browserName': 'firefox'
  // },{
  //   'browserName': 'firefox'
  // }],

  // Framework to use.
  framework: 'jasmine2',

  // suites: {
  //   regressionTests: ['**/*.js']//will run all specs in subfolders
  // },

  // Spec patterns are relative to this config file
  // specs: ['**/*BankDashboard.js'],


  // For angular tests
  // useAllAngular2AppRoots: true,

  // Base URL for application server
  // baseUrl: 'http://localhost:8080',

  // To use webdriver js
  onPrepare: function() {
    global.dvr = browser.driver;
  },
  // To use if the site is angular if yes then true
  onPrepare: function() {
    global.isAngularSite = function(flag) {
      browser.ignoreSynchronization = !flag;
    };
  },
  onPrepare: function () {
    // SpecReporter
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    jasmine.getEnv().addReporter(new SpecReporter({displaySuccessesSummary: false}));
    jasmine.getEnv().addReporter(new SpecReporter({displayFailuresSummary: true}));
    jasmine.getEnv().addReporter(new SpecReporter({displayPendingSummary: true}));
    jasmine.getEnv().addReporter(new SpecReporter({displaySuccessfulSpec: true}));
    jasmine.getEnv().addReporter(new SpecReporter({displayFailedSpec : true}));
    jasmine.getEnv().addReporter(new SpecReporter({displayPendingSpec: false}));
    jasmine.getEnv().addReporter(new SpecReporter({displaySpecDuration: false}));
    jasmine.getEnv().addReporter(new SpecReporter({displaySuiteNumber: false}));

    // colors: {
    //   success: 'green';
    //     failure: 'red';
    //     pending: 'yellow';
    // };
    // prefixes: {
    //   success: '✓ ';
    //     failure: '✗ ';
    //     pending: '* ';
    // };
    // customProcessors: []


    // debugging
    // console.log('browser.params:' + JSON.stringify(browser.params));
    // jasmine.getEnv().addReporter(new Reporter(browser.params));

    // Allow changing bootstrap mode to NG1 for upgrade tests
    // global.setProtractorToNg1Mode = function () {
    //   browser.useAllAngular2AppRoots = false;
    //   browser.rootEl = 'body';
    // };
  },

  jasmineNodeOpts: {
    // defaultTimeoutInterval: 60000,
    defaultTimeoutInterval: 30000,
    showTiming: true,
    isVerbose: true,
    realtimeFailure: true,
    includeStackTrace: true,
    showColors: true,
    // print: function () {
    // }
  },

  //Jasmine allure reporter function
  onPrepare: function () {
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

  //Protractor jasmine2html reporter
  onPrepare: function () {
    var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      savePath:'./reports/',
      ////Uncomment if required full consolidate details
      // screenshotsFolder:'images',
      // takeScreenshots:true,
      // takeScreenshotsOnlyOnFailures:false,
      // fixedScreenshotName:true,
      // consolidate:true,
      // consolidateAll:true
      })
    );
  },

  //Function is used to read from excel and save it as a json file
  // onPrepare: function () {
  //   var xlsxj = require("xlsx-to-json");
  //   xlsxj({
  //     input: "./e2e/TestData/DataSheet.xlsx",
  //     output: "./e2e/TestData/output.json",
  //     sheet: "Sheet1"
  //   }, function (err, result) {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       console.log(result);
  //     }
  //   });
  // },

  // //Accessibility testing
  // plugins: [{
  //   path: "./node_modules/protractor-accessibility-plugin/index.js",
  //   chromeA11YDevTools: {
  //       treatWarningsAsFailures: false,
  //       axsConfig: []
  //   },
  //   package: 'protractor-accessibility-plugin'
  // }]

  // plugins: [{
  //   package: 'jasmine2-protractor-utils',
  //   disableHTMLReport: false,
  //   disableScreenshot: false,
  //   screenshotPath:'./reports/screenshots',
  //   screenshotOnExpectFailure:true,
  //   screenshotOnSpecFailure:true,
  //   clearFoldersBeforeTest: true,
  //   htmlReportDir: './reports/htmlReports',
  //   failTestOnErrorLog: {
  //     failTestOnErrorLogLevel: 900,
  //     // excludeKeywords: ['keyword1', 'keyword2']
  //   }
  // }]

};

// // Custom reporter
// function Reporter(options) {
//   var _defaultOutputFile = path.resolve(process.cwd(), './_test-output', 'protractor-results.txt');
//   options.outputFile = options.outputFile || _defaultOutputFile;
//
//   initOutputFile(options.outputFile);
//   options.appDir = options.appDir ||  './';
//   var _root = { appDir: options.appDir, suites: [] };
//   log('AppDir: ' + options.appDir, +1);
//   var _currentSuite;
//
//   this.suiteStarted = function(suite) {
//     _currentSuite = { description: suite.description, status: null, specs: [] };
//     _root.suites.push(_currentSuite);
//     log('Suite: ' + suite.description, +1);
//   };
//
//   this.suiteDone = function(suite) {
//     var statuses = _currentSuite.specs.map(function(spec) {
//       return spec.status;
//     });
//     statuses = _.uniq(statuses);
//     var status = statuses.indexOf('failed') >= 0 ? 'failed' : statuses.join(', ');
//     _currentSuite.status = status;
//     log('Suite ' + _currentSuite.status + ': ' + suite.description, -1);
//   };
//
//   this.specStarted = function(spec) {
//
//   };
//
//   this.specDone = function(spec) {
//     var currentSpec = {
//       description: spec.description,
//       status: spec.status
//     };
//     if (spec.failedExpectations.length > 0) {
//       currentSpec.failedExpectations = spec.failedExpectations;
//     }
//
//     _currentSuite.specs.push(currentSpec);
//     log(spec.status + ' - ' + spec.description);
//   };
//
//   this.jasmineDone = function() {
//     outputFile = options.outputFile;
//     //// Alternate approach - just stringify the _root - not as pretty
//     //// but might be more useful for automation.
//     // var output = JSON.stringify(_root, null, 2);
//     var output = formatOutput(_root);
//     fs.appendFileSync(outputFile, output);
//   };
//
//   function ensureDirectoryExistence(filePath) {
//     var dirname = path.dirname(filePath);
//     if (directoryExists(dirname)) {
//       return true;
//     }
//     ensureDirectoryExistence(dirname);
//     fs.mkdirSync(dirname);
//   }
//
//   function directoryExists(path) {
//     try {
//       return fs.statSync(path).isDirectory();
//     }
//     catch (err) {
//       return false;
//     }
//   }
//
//   function initOutputFile(outputFile) {
//     ensureDirectoryExistence(outputFile);
//     var header = "Protractor results for: " + (new Date()).toLocaleString() + "\n\n";
//     fs.writeFileSync(outputFile, header);
//   }
//
//   // for output file output
//   function formatOutput(output) {
//     var indent = '  ';
//     var pad = '  ';
//     var results = [];
//     results.push('AppDir:' + output.appDir);
//     output.suites.forEach(function(suite) {
//       results.push(pad + 'Suite: ' + suite.description + ' -- ' + suite.status);
//       pad+=indent;
//       suite.specs.forEach(function(spec) {
//         results.push(pad + spec.status + ' - ' + spec.description);
//         if (spec.failedExpectations) {
//           pad+=indent;
//           spec.failedExpectations.forEach(function (fe) {
//             results.push(pad + 'message: ' + fe.message);
//           });
//           pad=pad.substr(2);
//         }
//       });
//       pad = pad.substr(2);
//       results.push('');
//     });
//     results.push('');
//     return results.join('\n');
//   }
//
//   // for console output
//   var _pad;
//   function log(str, indent) {
//     _pad = _pad || '';
//     if (indent == -1) {
//       _pad = _pad.substr(2);
//     }
//     console.log(_pad + str);
//     if (indent == 1) {
//       _pad = _pad + '  ';
//     }
//   }
//
// }
