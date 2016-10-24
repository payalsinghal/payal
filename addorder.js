var mongoose     = require('mongoose');
var Schema = mongoose.Schema;

var AddorderSchema = new Schema({
    firt_name:    {type:String},
    last_name:    {type:String},
    email:        {type:String},
    phone_no:     {type:Number},
    address_line1:{type:String},
    address_line2:{type:String},
    address_line3:{type:String},
     city:        {type:String},
     state:       {type:String},
     pin_code:    {type:Number},
    country:      {type:String},
    order_number: {type:String},
    order_date:   {type:Number},
    payment_type: {type:String},
    item_name:    {type:String},
    item_price:   {type:Number},
    item_quantity:{type:Number},
    order_total:  {type:Number},
    cod_total:    {type:Number},
 });

module.exports = mongoose.model('Addorder', AddorderSchema);