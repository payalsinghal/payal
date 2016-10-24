var mongoose     = require('mongoose');
var Schema = mongoose.Schema;

var AddContactSchema = new Schema({
	name: String,
    email_id:String,
    mobile:Number
});

module.exports = mongoose.model('Addcontact', AddContactSchema);