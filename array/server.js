var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
var Registration= require('./app/models/reg');
var Login= require('./app/models/login');




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080; 

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/array'); 



var router = express.Router();             
  

router.get('/', function(req, res) {
    res.json({ message: 'welcome to our api!' });   
});



router.route('/regs').post(function(req,res) {
        
        var registration = new Registration();      
        registration.username = req.body.username;
        registration.phone_no= req.body.phone_no;
         registration.email_id=req.body.email_id;
        

        registration.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: ' registration done!' });

        });

         var login = new Login();      
        login.email_id = req.body.email_id;
        login.password= req.body.password;

        login.save(function(err) {
        if (err)
                res.send(err);
        
            else
            res.json( { message: 'log'})
    });
    });

    //     var addcontact=new AddContact();
    //     addcontact.email_id=req.body.email_id;

    //      addcontact.save(function(err) {
    //     if (err)
    //             res.send(err);

    //         res.json( { message: 'email address found'})
        
    //     });

    // });


//  router.route('/regs').get(function(req, res)  // find all contacts
// {
//         Registration.find(function(err, regs) {
//             if (err)
//                 res.send(err);
//             else
//             res.json(regs);
//         });
//     });




router.route('/login').post(function(req,res) {
        
        Login.findOne({email_id:req.body.email_id},function(err,d)

    {
         if(!err)
         {

            if(d.email_id==req.body.email_id && d.password == req.body.password)
            
            res.json("match");

        else 
        res.json({message:'not match password'}) 
        }   
    })

});




router.route('/addcontact').post(function(req,res) {

    Registration.findOne({email_id:req.body.email_id},function(err,d)
    {
     if(!err)   
     {
        var contact = new Registration();  
        contact.name= req.body.name;
        contact.phone= req.body.phone;
        contact.email= req.body.email;

        Registration.update({email_id:req.body.email_id},{$push:{contact:{name :contact.name,phone:contact.phone,email:contact.email}}},function(err,dd){
            if(err)
                res.send(err);
            else
    
            res.json( { message: 'Add contact'})
            
        });
    }
    });
 });


router.route('/updatecontact').post(function(req,res) {

  Registration.findOne({email_id:req.body.email_id},function(err,d)
  {
    // var contact = new Registration();  
    //     contact.name= req.body.name;
    if(!err)
    {

Registration.update({email_id:req.body.email_id,"contact.email":req.body.email},{$set:{contact:{name : req.body.name,phone:req.body.phone,email:req.body.email}}},function(err,dd){
            if(err)
                res.send(err);
            else
    
            res.json( { message: 'update contact'})
    });
}

});
 });













// router.route('/addcontact').get(function(req,res)  // find all contacts
// {
//         AddContact.find(function(err, addcontacts) {
//             if (err)
//                 res.send(err);

//             res.json(addcontacts);
//         });
//     });

// router.route('/addcontact/:email_id').get(function(req, res) 
// {
//         AddContact.find({email_id:req.params.email_id}, function(err, addcontact) {
//             if (err)
//                 res.send(err);
//             else
//             res.json(addcontact);
//         });
//     });


// router.route('/addcontact/:addcontact_id').delete(function(req, res) {
//         AddContact.remove({id: req.params._id}, function(err, addcontact) {
//             if (err)
//                 res.send(err);

//             res.json({ message: 'Successfully deleted' });
//         });
//     });




app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);