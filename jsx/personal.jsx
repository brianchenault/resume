/** @jsx React.DOM */
'use strict';

var React = require('react');

var PersonalClass = React.createClass({
    getInitialState: function() {
        return {
            skills: []
        };
    },

    render: function() {
        return (
            <div id="personal">
                <div id="name">{this.props.data.name}</div>
                <div id="city">{this.props.data.city}</div>, <div id="state">{this.props.data.state}</div>
                <div id="education">{this.props.data.education}</div>
                <div id="email">{this.props.data.email}</div>
                <div id="github"><a href={this.props.data.github} target="_blank">{this.props.data.github}</a></div>
            </div>
        )
    }
});

module.exports = PersonalClass;