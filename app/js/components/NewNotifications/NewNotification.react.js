import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import GetLocations from './GetLocations.react';
import GetDetails from './GetDetails.react';
import NotificationsApi from '../../utils/NotificationApi';

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
        this.setState(
            {
                notificationStep: this.state.notificationStep + 1,
                origin: this.refs.getLocation.state.originPlace,
                destination: this.refs.getLocation.state.destinationPlace
            });
    },

    // Render our child components, passing state via props
    render: function() {
        var self = this;
        return (
            <Modal show={true} onHide={this.props.toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add A New Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { this.state.notificationStep === 0 
                        ? <GetLocations 
                            ref="getLocation"
                            origin={this.state.origin} 
                            destination={this.state.destination} /> 
                        : <GetDetails 
                            origin={this.state.origin}
                            destination={this.state.destination}/> }
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.nextStep}>Continue</Button>
                </Modal.Footer>
            </Modal> 
        );
    },

});

module.exports = NewNotification;
