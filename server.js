var express 		=	require('express');
var app 			=	express();
var bodyParser 		=	require('body-parser');
var port 			=	process.env.PORT || 8000;

app.use('/public', express.static('./client/src/public/'));
app.use('/partials', express.static('./client/src/partials/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var index 			= require('./server/src/routes')(app);
var auth 			= require('./server/src/routes/authentication')(app);
var bairro 			= require('./server/src/routes/bairro')(app);
var cep 			= require('./server/src/routes/cep')(app);
var sigla 			= require('./server/src/routes/sigla')(app);
var estado 			= require('./server/src/routes/estado')(app);
var cidade 			= require('./server/src/routes/cidade')(app);
var tipoConsulta 	= require('./server/src/routes/tipo-consulta')(app);

app.listen(port, function () {
	console.log("Server up and runnig on port: ", port);
})