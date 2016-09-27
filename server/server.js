var express 		=	require('express');
var app 			=	express();
var bodyParser 		=	require('body-parser');
var path 			=	require('path');
var request			=	require('request');

// load static files
app.use('/public', express.static(path.join(__dirname, '..', 'client/src/public/')));
app.use('/partials', express.static(path.join(__dirname, '..', 'client/src/partials/')));
// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// load the single application page
app.get('/', function (req, res) {
	
	res.sendFile(path.join(__dirname, '..', 'client/src/index.html'));
});

// login
app.post('/login', function (req, res) {
	request.post({
		url:'http://localhost:8001/autenticacao-service/auth', 
		json: req.body
	},function(error, response, body){
		if (!error && response.statusCode == 200) {
			res.json(body);
		}else{
			res.status(401).send('usuário ou senha inválidos');
		}
	});

});

app.listen(8000, function () {
	console.log("Server up and runnig on port: ", 8000);
})