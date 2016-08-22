var React = require('react'),
    ReactBootstrap = require('react-bootstrap'),
    Modal = ReactBootstrap.Modal,
    Button = ReactBootstrap.Button,
    GetLocations = require('./GetLocations.react'),
    GetDetails = require('./GetDetails.react');

// Define main Controller View
var NewNotification = React.createClass({
    getInitialState: function() {
        return { 
            apiLoaded: false,
            notificationStep: 0
        };
    },
    // Add change listeners to stores
    componentDidMount: function() { 
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    nextStep: function() {
        this.setState({notificationStep: this.state.notificationStep + 1});
    },

    // Render our child components, passing state via props
    render: function() {
        var self = this;
        return (
            <Modal show={this.props.show} onHide={this.props.toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add A New Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { this.state.notificationStep === 0 
                        ? <GetLocations /> 
                        : <GetDetails /> }
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.nextStep}>Continue</Button>
                </Modal.Footer>
            </Modal> 
        );
    },

});

module.exports = NewNotification;
