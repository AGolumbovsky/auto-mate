var express = require('express');

var app = express();

var port = 8778;

//serve static files
app.use(express.static(__dirname + '/public'));

// time stamp for nodemon
var now = new Date().getTime();

// listen carefully
app.listen(process.env.PORT || port, function() {
	console.log("running on node port " + port + ' ' + now);
});