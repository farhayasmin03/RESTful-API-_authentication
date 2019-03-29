var express= require('express');
var router=express.Router();
var Contact=require('../modules/contactModel')
router.get("/contact",function(req,res){
    res.json({
        "username":"farhana",
        "message":"hello welcome"
    })
})
router.get('/', function (req, res) {
    res.send("hello world!!!")
});
module.exports = router;