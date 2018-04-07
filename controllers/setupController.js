
var User = require("../models/userModel");

module.exports = function(app){

    app.get('api/setupUser', function(request, response){

        var ourUser = { //obj matches the schema
            id:1,
            username:"cbianchi",
            password:"pass1",
            email:"chrishbianchi@gmail.com",
            userType:"pro"
        }//pass in a user object to seed the db, db populated with this
    })//closes get
}