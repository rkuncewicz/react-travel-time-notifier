import NotificationActions from '../actions/NotificationActions';
import request from 'superagent';
import { apiEndpoint } from './Constants';

module.exports = {

  // Load mock product data from localStorage into ProductStore via Action
    getNotificationData: function() {
        //var data = JSON.parse(localStorage.getItem('notifications'));
        request
            .get(apiEndpoint + '/api/notifications')
            .end(function(err, res) {
                if (err) {
                    console.log(err);
                    return err;
                }
                var data = JSON.stringify(res.body.data);
                console.log(data);

            //Make api call to server to check for storage
                NotificationActions.receiveNotifications(data);
            })
    },

    createNotification: function(title, origin, destination, arrivalTime) {
        request
            .post(apiEndpoint + '/api/notifications')
            .send({
                title: title,
                originLat: origin.Lng,
                originLng: origin.Lat,
                destinationLat: destination.Lat,
                destinationLng: destination.Lng,
                arrivalTime: arrivalTime
            })
            .end(function(err, res){
                if (err) {
                    console.log(err);
                    return err;
                }
                var data = JSON.stringify(res.body.data);
                console.log(data);
            })
    }

};
