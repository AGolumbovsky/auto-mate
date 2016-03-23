var express = require('express');

var app = express();

var port = 8778;

//server static files
app.use(express.static(__dirname + '/public'));



app.listen(process.env.PORT || port, function() {
	console.log("running on node, port " + port);
});