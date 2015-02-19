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
                <div id="email">brian at brianchenault dot com</div>
            </div>
        )
    }
});

module.exports = PersonalClass;