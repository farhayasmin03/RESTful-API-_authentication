var express= require('express')
var app= express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

let routes=require("./router/routes");
app.use('/api',routes)
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/restAPI")
var db=mongoose.connection
//handling Error
db.on('error',console.error.bind(console,'connection Error'));
db.once('open',function(){
    console.log("Connected to mongoDB")
})
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')

});
module.exports = app;
