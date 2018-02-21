var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send("My App");
});

app.listen(3000, function(){
	console.log('Runing on server port 3000');
})