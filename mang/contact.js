var mongoose     = require('mongoose');
var Schema = mongoose.Schema;

var AddContactSchema = new Schema({
	
    email_id:String,
    cname: String, 
    cphone: Number,
   cemail: String
		
});

module.exports = mongoose.model('AddContact', AddContactSchema);