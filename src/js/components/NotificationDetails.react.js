var React = require('react');

// Define main Controller View
var NotificationDetails = React.createClass({

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    // Render our child components, passing state via props
    render: function() {
        var self = this;

        return (
            <div className="NotificationDetails">
                <span> Origin: {this.props.origin}</span>
                <span> Destination: {this.props.destination}</span>
                <span>Arrive by: {this.props.arriveBy}</span>
                <span>Leave by: {this.props.leaveBy}</span>
            </div>
        );
    },

});

module.exports = NotificationDetails;
