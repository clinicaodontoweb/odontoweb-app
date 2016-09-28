var express 		=	require('express');
var app 			=	express();
var bodyParser 		=	require('body-parser');
var path 			=	require('path');

app.use('/public', express.static(path.join(__dirname, '..', 'client/src/public/')));
app.use('/partials', express.static(path.join(__dirname, '..', 'client/src/partials/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var index 	= require('./src/routes')(app);
var auth 	= require('./src/routes/authentication')(app);
var bairro 	= require('./src/routes/bairro')(app);

app.listen(8000, function () {
	console.log("Server up and runnig on port: ", 8000);
})