var _ = require('lodash'),
    HttpError = require('http-errors'),
    Notification = require('../models/Notification');

module.exports = function notifications(router, route) {
    //resource(router, Notification, { except: [A.Update] });
    console.log("Ayyy");
    console.log(route);
    router
        .get('/boo/', function *(next) {
            Notification.find(function(err, notifications){
                this.body = {
                    data: notifications
                };
            });
        })
        .post(route, function *(next) {
            console.log("ay");
            console.log(req);
            var first = new Notification({title: "hello"});
            first.save(function (err, first) {
                if (err) return console.error(err);
                res.json({
                    data: first
                })
            });
        })
    console.log(router);
    return router;
}
