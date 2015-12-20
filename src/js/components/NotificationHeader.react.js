var React = require('react');

// Define main Controller View
var NotificationHeader = React.createClass({

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    // Render our child components, passing state via props
    render: function() {
        var self = this, id = this.props.id, name = this.props.name;

        return (
            <div className="NotificationHeader">
                <span>{name}</span>
            </div>
        );
    }

});

module.exports = NotificationHeader;
