var express = requir('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');

//this function adds our endpoint to the express app
var setupController = require('./controllers/setupController');

var port = process.env.PORT || 3000;

app.use('/assets/', express.static(_dirname + '/public'));

app.set('view engine', 'ejs');

//open up the connection, and we never disconnect after 
//because by default mongodb stays open on a single connection
mongoose.connect(config.getDbConnectionString());
setupController(app);
app.listen(port);

//have the app waiting and listening but not doing anything yet