/** @jsx React.DOM */
'use strict';

var React = require('react');

var ExperienceClass = React.createClass({
        getInitialState: function() {
            return {
                skills: []
            };
        },

        render: function() {
            return (
                <ul className="experience">
                {
                    this.props.data.map(function(job, index) {
                        return <li key={index}>
                            <h3>{job.company}</h3>
                            <div className="start">{job.dateStart}</div> - <div className="end">{job.dateEnd}</div>
                            <ul>
                                {
                                    job.bullets.map(function(bullet, index) {
                                        return <li key={index}>{bullet} </li>
                                    })
                                }
                            </ul>
                        </li>
                    })
                }
                </ul>
            )
        }
});


module.exports = ExperienceClass;