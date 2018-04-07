var express = requir('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets/', express.static(_dirname + '/public'));

app.set('view engine', 'ejs');

app.listen(port);

//have the app waiting and listening but not doing anything yet