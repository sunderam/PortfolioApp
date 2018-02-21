var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
mongoose.connect('mongodb://sundarbrao:sandy01@portfolio-shard-00-00-ldzdg.mongodb.net:27017,portfolio-shard-00-01-ldzdg.mongodb.net:27017,portfolio-shard-00-02-ldzdg.mongodb.net:27017/test?ssl=true&replicaSet=Portfolio-shard-0&authSource=admin');
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser());

app.use(require('./routers/index'));

app.listen(3000, function(){
	console.log('Runing on server port 3000');
})