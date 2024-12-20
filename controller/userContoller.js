var User = require('../models/user');
const {v4:uuidv4}=require('uuid');
const {setUser}=require('../service/auth')

async function handleUserSignUp(req,res) {
    try {
        const obj = {
            userId: req.body.userId,
            userName: req.body.userName,
            password: req.body.password,
            city: req.body.city
        };

        const result = await User.insertMany(obj);
        res.status(201).json({ message: "Record inserted", result });
    } catch (error) {
        res.status(400).json({ error: "Unable to insert record", details: error.message });
    }
    
};

async function getAllUsers(req,res) {
    try {
        const result = await User.find();
        res.status(201).json({ message: "Record found", result });
    } catch (error) {
        res.status(400).json({ error: "Unable to find record", details: error.message });
    }
    
};

async function handleUserlogin(req,res) {
    const {userName,password}=req.body;

        const result = await User.findOne({userName:userName,password:password});
        if(!result)
        {
            res.status(401).json({ message: "Inavlid Credentials"});
        }

        const token=setUser(result);
        res.cookie("uid",token);


    return res.redirect("http://localhost:3001/userApp");
};

async function updateUser(req, res) {
    try {
        const { userId,userName } = req.body;
        const user = await User.findOne({ userId: userId });
        if (!user) {
            return res.status(404).json({ status: "User not found!" });
        }
        
        user.userName = userName;
        const updatedUser = await user.save();

        if (updatedUser) {
            res.status(200).json({ status: "User updated successfully!", data: updatedUser });
        } else {
            res.status(400).json({ status: "Failed to update user." });
        }
    } catch (error) {
        res.status(500).json({ status: "An error occurred.", error });
    }
}

async function deleteUser(req, res) {
    try {
        const { userId } = req.body;
       
        const result = await User.findOneAndDelete({ userId: userId });

        if (result) {
            res.status(200).json({ status: "User deleted successfully!", data: result });
        } else {
            res.status(404).json({ status: "User not found!" });
        }
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ status: "An error occurred.", error: error.message });
    }
}



module.exports={handleUserSignUp,getAllUsers,handleUserlogin,updateUser,deleteUser};