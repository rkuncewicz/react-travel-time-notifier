var React = require('react'),
    ReactBootstrap = require('react-bootstrap'),
    Modal = ReactBootstrap.Modal,
    Button = ReactBootstrap.Button,
    Input = ReactBootstrap.Input,
    DateTimeField = require('react-bootstrap-datetimepicker');

// Define main Controller View
var NewNotification = React.createClass({

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    addNewNotification: function () {
        this.props.toggleModal();
    },

    // Render our child components, passing state via props
    render: function() {
        console.log(this.props);
        var self = this;
        return (
            <Modal show={this.props.show} onHide={this.props.toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add A New Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input 
                        type="text" 
                        label="Notification Name" 
                        placeholder="Enter in notification name.." 
                        valueLink={this.props.updateNotification("name")} />
                    <Input 
                        type="text" 
                        label="Origin" 
                        placeholder="Enter in starting address.."
                        valueLink={this.props.updateNotification("origin")} />
                    <Input 
                        type="text" 
                        label="Destination" 
                        placeholder="Enter in destination address.." 
                        valueLink={this.props.updateNotification("destination")}/>

                    <label className="control-label">Arrive By</label>
                    <div className="row">
                        <div className="col-xs-12">
                            <DateTimeField mode="time" 
                            defaultText="Please select a time to arrive by.." 
                            onChange={this.props.updateTime}/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.addNewNotification}>Add</Button>
                </Modal.Footer>
            </Modal> 
        );
    },

});

module.exports = NewNotification;
