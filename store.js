var mongoose     = require('mongoose');
var Schema = mongoose.Schema;

var ManualstoreSchema = new Schema({
    Store_name: String,
    Company_name:String,
    Store_address_line1:String,
     Store_address_line2:String,
     Store_address_line3:String,
     City:String,
     Country:String,
     State:String,
     Pin:Number,
    Phone:Number,
    Email: String,
    Website: String,
    Warehouse:String,
    Store_log:String




    });

module.exports = mongoose.model('Manual', ManualstoreSchema);