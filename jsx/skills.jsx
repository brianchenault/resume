/** @jsx React.DOM */
'use strict';

var request = require('superagent');
var React = require('react');

var SkillsClass = React.createClass({
    getInitialState: function() {
        return {
            skills: []
        };
    },

    componentDidMount: function() {
        (function(skillsClass) {
            request.get('/resume').end(function(res) {
                skillsClass.setState({
                    skills: JSON.parse(res.text).skills
                });
            });
        })(this);
    },

    render: function() {
        return (
            <ul className="skills">
                {
                    this.state.skills.map(function(skill) {
                        return <li>{skill}</li>
                    })
                }
            </ul>
        )
    }
});


module.exports = React.render(<SkillsClass />, document.getElementById('content'));