import DirectionActions from '../actions/DirectionActions';
import request from 'superagent';
import { apiEndpoint } from './Constants';

module.exports = {

  // Load mock product data from localStorage into ProductStore via Action
    getDirections: function(originLatLng, destinationLatLng, arrivalTime) {
        request
            .get('http://localhost:8088/api/directions')
            .query({ 
                originLatLng: originLatLng, 
                destinationLatLng: destinationLatLng, 
                arrivalTime: arrivalTime
            })
            .end(function(err, res) {
                if (err) {
                    console.log(err);
                    return err;
                }

                var directions = JSON.parse(res.text).data;
                DirectionActions.receiveDirections(directions);
            })
    }

};
