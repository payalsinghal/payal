var express=require('express')
var app=express()
var bodyParser=require('body-parser')
var login = require('./app/models/login');
var contact = require('./app/models/contact');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/login');


var port=8080

var router = express.Router();              
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


// router.route('/login').post(function(req, res)      // creating new contacts
// {
        
//         var login = new login();      
//         login.usename = req.body.usename;
//         login.phone_no = req.body.phone_no; 
//         login.password=req.body.password;
//         login.email_id=req.body.email_id; 

       
//         bear.save(function(err) {
//             if (err)
//                 res.send(err);

//             res.json({ message: 'contact created!' });
//         });



















// router.route('/contact').post(function(req, res)      // creating new contacts
// {
        
//         var contact = new contact();      
//         contact.name = req.body.name;
//         contact.phone_no = req.body.phone_no; 
//         contact.address=req.body.address;
//         contract.email_id=req.body.email_id; 

       
//         bear.save(function(err) {
//             if (err)
//                 res.send(err);

//             res.json({ message: 'contact created!' });
//         });

// router.route('/contact').get(function(req, res)  // find all contacts
// {
//         contact.find(function(err, contacts) {
//             if (err)
//                 res.send(err);by 

//             res.json(contacts);
//         });
//     });
// router.route('/contacts/:contact_id')          // getting  by one id
//     .get(function(req, res) {
//         Bear.findById(req.params.contact_id, function(err, contact) {
//             if (err)
//                 res.send(err);
//             res.json(contact);var Schema       = mongoose.Schema;

// var contactSchema   = new Schema({
//     name: String,
//     phone_no:Number,
//     address:String,
//     email_id:String
// });

// module.exports = mongoose.model('contact', contactSchema);
//         });
//     });

//  router.route('/contacts/:contact_id')   // change the already exit contact
//  .put(function(req, res) {

//         contact.findById(req.params.bear_id, function(err, contact) {

//             if (err)
//                 res.send(err);

//             contact.name = req.body.name; 
//             // save the contact
//             contact.save(function(err) {
//                 if (err)
//                     res.send(err);

//                 res.json({ message:' contact updated!' });
//             });

//         });
//     });













app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);