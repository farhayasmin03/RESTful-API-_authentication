var express= require('express');
var router=express.Router();
var User=require('../modules/contactModel')

router.get("/contact",function(req,res){
    res.json({
        "username":"farhana",
        "message":"hello welcome"
    })
})
router.post("/register",function(req,res){
    let newUser= new User({
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact
    });
    newUser.save((err,savedInstance) => {
        if (err) {
            let message = "";
            if (err.errors.username) message = "Username is already taken. ";
            if (err.errors.email) message += "Email already exists.";
            return res.json({
                success: false,
                message
            });
        } else {
            return res.json({
                success: true,
                message: "User registration is successful."
            });
        }
    });
})
module.exports = router;