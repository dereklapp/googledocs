/**
 * Load Task Dependencies
**/
var gulp        = require('gulp');
var browsersync = require('browser-sync').create();


/**
 * Watch task
**/
gulp.task('watch', function() {
  browsersync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('./**/*.html').on('change', browsersync.reload);
});