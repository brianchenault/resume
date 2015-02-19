/** @jsx React.DOM */
'use strict';
var request = require('superagent');
var React = require('react');
var PersonalClass = require('./../js/personal');
var SkillsClass = require('./../js/skills');
var ExperienceClass = require('./../js/experience');

request.get('/resume').end(function(res) {
    var resume = JSON.parse(res.text);
    React.render(<PersonalClass data={resume.personal} />, document.getElementById('personal'));
    React.render(<SkillsClass data={resume.skills} />, document.getElementById('skills'));
    React.render(<ExperienceClass data={resume.experience} />, document.getElementById('experience'));
});


