var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NotificationSchema = new Schema({
  title:  String
});

module.exports = mongoose.model('Notification', NotificationSchema);