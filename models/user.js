var mongoose=require('mongoose');

//generat schema

var userSchema=mongoose.Schema({
  fname:{
    type:String,
    required:true
  },
  lname:{
    type:String,
    required:true
  },
  uname:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:true
  },
  interest:[String],
  twitterLink:{type:String},
  facebookLink:{type:String},
  linkedLink:{type:String},
  aboutMe:{type:String},
  post:[String]
})

var User=module.exports=mongoose.model('users',userSchema);

// get User
module.exports.getUser=function(callback,limit)
{
  console.log("m in get  user");
  User.find(callback,limit).limit(limit);
}

module.exports.getUserById=function(id,callback){
  User.findById(id,callback);
}

module.exports.getUserByEmail=function(email,callback){
  console.log("m in email");
  User.findOne({"email":email},callback);
}

// Add user Signup
module.exports.addUser=function(user,callback){
  User.create(user,callback);
}

module.exports.updateUser=function(id,user,options,callback){
  var query={_id:id};
  var update={
    fname:user.fname,
    lname:user.lname,
    uname:user.uname,
    password:user.password,
    email:user.email,
    city:user.city,
    interest:user.city,
    twitterLink:user.twitterLink,
    facebookLink:user.facebookLink,
    linkedLink:user.linkedLink,
    aboutMe:user.aboutMe,
    post:user.post
  }

  User.findOneAndUpdate(query,update,options,callback);
}
