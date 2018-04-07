
var Users = require("../models/userModel");

module.exports = function(app){

    //this function adds the endpoint to express app
    app.get('api/setupUsers', function(request, response){

        var starterUsers = [
        { //obj matches the schema
            // id:1, --> we use Mongo's default Id
            username:"cbianchi",
            password:"pass1",
            email:"chrishbianchi@gmail.com",
            userType:"pro"
        },
        { //obj matches the schema
            // id:2,
            username:"dcash",
            password:"pass2",
            email:"addictcodercs@gmail.com",
            userType:"pro"
        },
        { //obj matches the schema
            // id:3,
            username:"ljames",
            password:"pass3",
            email:"ljames@gmail.com",
            userType:"free"
        }
        ];//pass in an array of user objects to seed the db, db populated with this
        Users.create(starterUsers, function(error, results){
            response.send(results);//output results after created back to browser
        });//closes create

    })//closes get


    //this is all just an endpoint, so lets make our app aware of the endpoint


}