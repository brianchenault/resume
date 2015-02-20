/** @jsx React.DOM */
'use strict';

var React = require('react');

var SkillsClass = React.createClass({
    render: function() {
        return (
            <ul className="skills">
                {
                    this.props.data.map(function(skill, index) {
                        return <li key={index}>{skill}</li>
                    })
                }
            </ul>
        )
    }
});


module.exports = SkillsClass;