var gulp = require( 'gulp' );
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('appscripts', function() {

    var sources = [
        './app/**/*.js'
    ];

    var stream = gulp.src(sources)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/app'));
    return stream;
});