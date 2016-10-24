var mongoose     = require('mongoose');

var Schema       = mongoose.Schema;

var ContactSchema   = new Schema({
    name: String,
    phone_no:Number,
    address:String,
    email_id:String
});

module.exports = mongoose.model('Contact', ContactSchema);