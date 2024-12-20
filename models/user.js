var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    userId:{type:Number},
    userName:{type:String},
    password:{type:Number},
    city:{type:String}
});

var Users = mongoose.model("users",userSchema,"users");
module.exports=Users;