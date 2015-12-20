var React = require('react');

// Define main Controller View
var AddNotification = React.createClass({

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    // Render our child components, passing state via props
    render: function() {
        return (
            <div className="AddNotification">
                <button>Add</button>
            </div>
        );
    },

});

module.exports = AddNotification;
