module.exports	=	function(app){
	
	var request	= require('request');
	var service	= 'http://localhost:8001/autenticacao-service';
	
	app.post('/login', function (req, res) {
		request.post({
			url: service + '/auth', 
			json: req.body
		},function(error, response, body){
			if (!error && response.statusCode == 200) {
				res.json(body);
			}else{
				res.status(401).send('usuário ou senha inválidos');
			}
		});

	});
}