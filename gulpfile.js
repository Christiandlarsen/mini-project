const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', ['build-css'], function() {
    browserSync.init({
		proxy: "localhost/mini-project/public/index.php"
    });

    gulp.watch('source/scss/**/*.scss', ['build-css']);
});

gulp.task('build-css', function() {
	return gulp.src('source/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(gulp.dest('public/css'))
		.pipe(browserSync.stream());
});