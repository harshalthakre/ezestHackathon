var express=require('express');
var app=express();

var bodyParser=require('body-parser');


app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

var mongoose=require('mongoose');

User=require('./models/user');
//interest=require('./models/interest');

mongoose.connect('mongodb://localhost/social',{ useMongoClient: true });
var db=mongoose.connection;

app.get('/api/users',function(req,res){
  User.getUser(function(err,users){
    if(err) throw err
    console.log("users: "+users);
    console.log("err: "+err);
    res.json(users);
  })
})

app.get('/api/users/:id',function(req,res){
  User.getUserById(req.params.id,function(err,user){
    if(err) {
      console.log("user req by id is: "+user);
      res.json(user);
    }
    res.json(user);
  })
})

app.post('/api/users',function(req,res){
  var user=req.body;
  User.addUser(user,function(err,user){
    if(err) throw err
    res.json(user)
  })
})

app.put('/api/users/:id',function(req,res){
  var id=req.params.id;
  var user=req.body;
  User.updateUser(id,user,{},function(err,user){
    if(err) throw err
    res.json(user);
  })
})

app.listen(3000);
console.log("listening to port 3000");
