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
