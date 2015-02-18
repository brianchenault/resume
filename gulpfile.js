'use strict';
var app = require('./server/app.js');
var gulp = require('gulp');
var react = require('gulp-react');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('jsx', function() {
    return gulp.src('./jsx/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('./js'));
});

gulp.task('webpack', ['jsx'], function() {
    return gulp.src('./js/app.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['webpack'], function() {
    app.listen(8080);
});