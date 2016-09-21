var gulp = require( 'gulp' );
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function() {

    var sources = [
        './bower_components/jquery/dist/jquery.js',
        './bower_components/bootstrap.min.js',
        './bower_components/angular/angular.js',
        './bower_components/angular-route/angular-route.js'

    ];

    var stream = gulp.src(sources)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat('lib.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/app'));
    return stream;


});