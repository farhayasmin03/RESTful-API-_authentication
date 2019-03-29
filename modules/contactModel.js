var mongoose = require('mongoose');
// Setup schema
var contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
   
    contact: {
        type: String,
        required: true
    }
    
});
// Export Contact model
var User=mongoose.model('User',contactSchema);
module.exports=User;

//Find user by id
module.exports.getUserById=function(id,callback){
    User.findById(id,callback);
}
//Find users by name
module.exports.getUserByName=function(id,callback){
    const query={
        Name:name
    }
    User.findOne(query,callback);
}
module.exports.addUser = function (newUser, callback) {
    console.log("Added user")
}
