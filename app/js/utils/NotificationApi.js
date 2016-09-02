import NotificationActions from '../actions/NotificationActions';
import request from 'superagent';

module.exports = {

  // Load mock product data from localStorage into ProductStore via Action
    getNotificationData: function() {
        //var data = JSON.parse(localStorage.getItem('notifications'));
        request.get('http://localhost:8088/api/notifications')
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
    }

};
