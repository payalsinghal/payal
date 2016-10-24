var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
var Login     = require('./app/models/login');
var Contact     = require('./app/models/contact');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080; 

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/new'); 



var router = express.Router();             


router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); 
});
         

router.get('/', function(req, res) {
    res.json({ message: 'welcome to our api!' });   
});


router.route('/logins').post(function(req,res) {
        
        var login = new Login();      
        login.username = req.body.username;
        login.phone_no= req.body.phone_no;
         login.email_id=req.body.email_id;
         login.password=req.body.password;

        login.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'login created!' });

        });
        
     });


 router.route('/logins').get(function(req, res)  // find all contacts
{
        Login.find(function(err, logins) {
            if (err)
                res.send(err);

            res.json(logins);
        });
    });


//  router.route('/contacts').post(function(req,res) {
        
//         var contact = new Contact();      
//         contact.name = req.body.name;
//         contact.phone_no= req.body.phone_no;
//         contact.address=req.body.address;
//          contact.email_id=req.body.email_id;
         

//         contact.save(function(err) {
//             if (err)
//                 res.send(err);

//             res.json({ message: 'contact created!' });

//         });
        
//      });

//  router.route('/contacts').get(function(req, res)  // find all contacts
// {
//         Contact.find(function(err, contacts) {
//             if (err)
//                 res.send(err);

//             res.json(contacts);
//         });
//     });

















app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);