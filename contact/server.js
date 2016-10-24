var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
var Login= require('./app/models/login');
var Addcontact= require('./app/models/addcontact');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080; 

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/contact'); 


var router = express.Router();             


router.get('/', function(req, res) {
    res.json({ message: 'welcome to our api!' });   
});


router.route('/login').post(function(req,res) {
        
        var login = new Login();      
        login.email_id = req.body.email_id;
        login.password= req.body.password;
login.save(function(err) {
        if (err)
                res.send(err);
        else

            res.json( { message: 'login!'})
            
        
      });
 });

router.route('/addcontact').post(function(req,res) {
        
        var addcontact = new Addcontact();  
         addcontact.name= req.body.name;
         addcontact.email_id = req.body.email_id;
        addcontact.mobile= req.body.mobile;
addcontact.save(function(err) {
        if (err)
                res.send(err);
        else

            res.json( { message: 'Add contact'})
            
        
      });
 });


router.route('/addcontact').get(function(req,res)  // find all contacts
{
        Addcontact.find(function(err, addcontacts) {
            if (err)
                res.send(err);

            res.json(addcontacts);
        });
    });

router.route('/addcontact/:email_id').get(function(req, res) 
{
        Addcontact.find({email_id:req.params.email_id}, function(err, addcontact) {
            if (err)
                res.send(err);
            else
            res.json(addcontact);
        });
    });


router.route('/addcontact/:addcontact_id').delete(function(req, res) {
        Addcontact.remove({id: req.params._id}, function(err, addcontact) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);