/** @jsx React.DOM */
'use strict';

var React = require('react');

var PersonalClass = React.createClass({displayName: "PersonalClass",
    getInitialState: function() {
        return {
            skills: []
        };
    },

    render: function() {
        return (
            React.createElement("div", {id: "personal"}, 
                React.createElement("div", {id: "name"}, this.props.data.name), 
                React.createElement("div", {id: "city"}, this.props.data.city), ", ", React.createElement("div", {id: "state"}, this.props.data.state), 
                React.createElement("div", {id: "email"}, "brian at brianchenault dot com")
            )
        )
    }
});

module.exports = PersonalClass;