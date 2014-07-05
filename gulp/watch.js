'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('watch', ['styles'] ,function () {
  gulp.watch('app/styles/**/*.less', ['styles']);
  gulp.watch('app/scripts/**/*.js', ['scripts']);
  gulp.watch('app/images/**/*', ['images']);
  gulp.watch('app/partials/**/*', ['partials']);
});
