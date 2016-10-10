module.exports	=	function(app){
	
	var request	= require('request');
	var service	= 'http://192.169.169.166:3334/agenda-service/tipoConsulta';
	
	app.post('/consulta/tipo', function (req, res) {
		request.post({url: service, json: req.body }, function(error, response, body){
			res.send(body);
		});
	});

	app.put('/consulta/tipo', function (req, res) {
		request.put({url: service, json: req.body }, function(error, response, body){
			res.send(body);
		});
	});

	app.get('/consulta/tipo', function (req, res) {
		request.get({url: service}, function(error, response, body){
			res.json(JSON.parse(body));
		});
	});

	app.get('/consulta/tipo/:id', function (req, res) {
		request.get({url: service + '/' + req.params.id}, function(error, response, body){
			res.json(JSON.parse(body));
		});
	});

	app.delete('/consulta/tipo/:id', function (req, res) {
		request.del({url: service + '/' + req.params.id}, function(error, response, body){
			res.json(body);
		});
	});
}