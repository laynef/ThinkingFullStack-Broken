'use-strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('sass', function () {
	return gulp
		.src('./web/styles/index.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('client.css'))
		.pipe(gulp.dest('./assets/css'))
		.pipe(gulp.dest('./assets/css'))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(concat('client.min.css'))
		.pipe(gulp.dest('./assets/dist'))
		.pipe(gulp.dest('./assets/dist'));
});

gulp.task('watch', function () {
	gulp.watch('./web/styles/**/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
