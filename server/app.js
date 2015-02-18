'use strict';
var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname.replace('server', '')));

app.get('/resume', function(req, res) {
    var resumeJson =  fs.readFileSync('data/resume.json', 'utf8');
    res.send(resumeJson);
});

module.exports = app;
