'use strict';
var app = require('./app.js');
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var react = require('gulp-react');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('jsx', function() {
    return gulp.src('./jsx/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('./js'));
});

gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('webpack', ['jsx', 'sass'], function() {
    return gulp.src('./js/app.js')
        .pipe(webpack(webpackConfig))
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('default', ['webpack'], function() {
    app.listen(8080);
});