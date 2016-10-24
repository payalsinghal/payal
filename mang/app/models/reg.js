var mongoose     = require('mongoose');
var Schema = mongoose.Schema;

var RegistrationSchema = new Schema({
    username: String,
    phone_no:Number,
    email_id:String,
   
});

module.exports = mongoose.model('Registration', RegistrationSchema);