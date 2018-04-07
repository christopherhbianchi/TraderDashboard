var mongoose = require('mongoose');
//require mongoose to set up schema

var Schema = mongoose.Schema; //this obj let's us create new Schemas

var userSchema = new Schema({
    //id: int,
    username: String,
    password:String,
    email: String,
    userType: String //pro vs free membership
});

//new model with that schema, and then export below
/*
mongoose.model gives us the schema, as well as the methods
to create, update, and delete in the mongo DB data base
*/
var User = mongoose.model("User", userSchema);
module.exports = User;

//now connecting the DB