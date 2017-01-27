/**
 * Created by Dipjyoti on 21-Dec-16.
 */
var gulp=require('gulp');
var protractor=require('gulp-protractor').protractor;

gulp.task('default',function () {

gulp.src(['**/*BankDashboard.js'])
  .pipe(protractor({
    // configFile:"protractor.config.js",
    configFile:"config.js",
    // args:['--baseUrl','http://127.0.0.1:8080']
  }))
  .on('error',function (e){throw e});

});

// 'use strict';
//
// var gulp = require('gulp'),
//   gulpProtractorAngular = require('gulp-angular-protractor'),
//   gulpStart = gulp.Gulp.prototype.start,
//   currentStartTaskName;
//
// gulp.Gulp.prototype.start = function (task) {
//   currentStartTaskName = task;
//   gulpStart.apply(this, arguments);
// };
// function executeWebTests(suiteName, appName) {
//   return gulp.src([])
//     .pipe(gulpProtractorAngular({
//       'configFile': 'protractor.config.js',
//       'debug': false,
//       'autoStartStopServer': true,
//       args: [
//         '--suite', suiteName,
//         '--capabilities.browserName', 'chrome',
//         '--params.APPNAME', appName,
//         '--params.SUITENAME', currentStartTaskName,
//         '--capabilities.platformName', 'Windows'],
//       keepAlive: false
//     }))
//     .on('error', function (e) {
//       console.log('Ended with below ERROR::',e);
//       process.exit(1);
//     })
//     .on('end', function () {
//       console.log('Test complete');
//       process.exit();
//     });
// }
//
// gulp.task('RegressionSuiteTask', function () {
//   executeWebTests('regressionTests,','BankDashboard');
// });
