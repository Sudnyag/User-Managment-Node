var express = require('express');
var router = express.Router();
var resticToLoggedInUserOnly = require('./middleware/auth');
var {handleUserSignUp, getAllUsers,handleUserlogin, updateUser, deleteUser} = require('./controller/userContoller');
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());
router.use(bodyParser.raw());

var db={};
var mongoose = require('mongoose');
db.mongoose=mongoose;
db.mongoose.connect("mongodb://127.0.0.1:27017/User").then(()=>{
    console.log("Database is connected succesfully!!");
}).catch((err)=>{
    console.log("Database not connected",err);
});

router.get("/",function (req,res){
    res.send("ITS A HOME PAGE");
})

router.post("/Signup",handleUserSignUp);
router.get("/getAll",getAllUsers);
router.post("/login",handleUserlogin);
router.put("/update",updateUser);
router.delete("/delete",deleteUser)

module.exports=router;