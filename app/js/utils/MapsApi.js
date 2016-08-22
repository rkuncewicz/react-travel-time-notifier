var DirectionActions = require('../actions/DirectionActions'),
    request = require('superagent');

module.exports = {

  // Load mock product data from localStorage into ProductStore via Action
    getDirections: function(origin, destination) {
        request
            .get('http://localhost:8088/api/directions')//https://maps.googleapis.com/maps/api/directions/json')
            .query({ origin: origin, destination: destination, key: key, departure_time: 'now'})
        .end(function(err, res) {
            if (err) {
                console.log(err);
                return err;
            }

            console.log("Map data");
            var data = JSON.parse(res.text);
            var directions = JSON.parse(data.data);
            console.log(directions);

           //Make api call to server to check for storage
            DirectionActions.receiveDirections(directions);
        })
    }

};
