/** @jsx React.DOM */
'use strict';

var React = require('react');

var ExperienceClass = React.createClass({displayName: "ExperienceClass",
        getInitialState: function() {
            return {
                skills: []
            };
        },

        render: function() {
            return (
                React.createElement("ul", {className: "experience"}, 
                
                    this.props.data.map(function(job, index) {
                        return React.createElement("li", {key: index}, 
                            React.createElement("h3", null, job.company), 
                            React.createElement("div", {className: "start"}, job.dateStart), " - ", React.createElement("div", {className: "end"}, job.dateEnd), 
                            React.createElement("ul", null, 
                                
                                    job.bullets.map(function(bullet, index) {
                                        return React.createElement("li", {key: index}, bullet, " ")
                                    })
                                
                            )
                        )
                    })
                
                )
            )
        }
});


module.exports = ExperienceClass;