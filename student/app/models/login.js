var mongoose     = require('mongoose');
var Schema = mongoose.Schema;

var LoginSchema = new Schema({
    username: String,
    phone_no:Number,
    email_id:String,
    password:String
});

module.exports = mongoose.model('Login', LoginSchema);