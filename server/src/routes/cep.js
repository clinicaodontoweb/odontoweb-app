module.exports	=	function(app){
	
	var request	= require('request');
	var service	= 'http://192.169.169.166:3334/agenda-service/cep';
	
	app.post('/cep', function (req, res) {
		request.post({url: service, json: req.body }, function(error, response, body){
			res.send(body);
		});
	});

	app.put('/cep', function (req, res) {
		request.put({url: service, json: req.body }, function(error, response, body){
			res.send(body);
		});
	});

	app.get('/cep', function (req, res) {
		request.get({url: service}, function(error, response, body){
			res.json(JSON.parse(body));
		});
	});

	app.get('/cep/:id', function (req, res) {
		request.get({url: service + '/' + req.params.id}, function(error, response, body){
			res.json(JSON.parse(body));
		});
	});

	app.delete('/cep/:id', function (req, res) {
		request.del({url: service + '/' + req.params.id}, function(error, response, body){
			res.json(body);
		});
	});
}