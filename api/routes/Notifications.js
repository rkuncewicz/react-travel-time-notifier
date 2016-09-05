var _ = require('lodash'),
    bodyParser = require('koa-bodyparser'),
    Notification = require('../models/Notification');

module.exports = function notifications(router) {
    //resource(router, Notification, { except: [A.Update] });
    router
        .get('/', function *(next) {
            Notification.find(function(err, notifications){
                this.body = {
                    data: notifications
                };
            });
        })
        .post('/', function *(next) {
            if (this.request.body.title === undefined ||
                this.request.body.arrivalTime === undefined ||
                this.request.body.origin === undefined ||
                this.request.body.destination === undefined) {
                this.throw('Please verify you are sending over a title, arrivalTime, origin and destination.', 400);
            }
            this.body = this.request.body;
        });
    return router;
}
