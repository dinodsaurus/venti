"use strict";

var gulp = require("gulp");
var webserver = require("gulp-webserver");

var proxies = [{source: "/api", target: "http://localhost:8080/api"}];

gulp.task("serve", ["watch"], function () {
  gulp.src("app")
   .pipe(webserver({
     livereload: true,
     open: true,
     proxies: proxies
   }));
});
