var gulp = require("gulp");
var load = require("gulp-load-plugins")();

gulp.task("test", [], function () {
  var wiredep = require("wiredep");
  var bowerDeps = wiredep({
    directory: "app/bower_components",
    exclude: ["bootstrap"],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
    "app/scripts/**/*.js", "app/templates/**/*.js"
    ]);
    gulp.src(testFiles)
    .pipe(load.karma({
      configFile: "karma.conf.js",
      action:  "run"
    }))
    .on("error", function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
 });
