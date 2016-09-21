var express 		=	require('express');
var app 			=	express();
var path 			=	require('path');

// load static files
app.use('/public', express.static(path.join(__dirname, '..', 'client/src/public/')));
app.use('/partials', express.static(path.join(__dirname, '..', 'client/src/partials/')));

// load the single application page
app.get('/', function (req, res) {
	
	res.sendFile(path.join(__dirname, '..', 'client/src/index.html'));
});

app.listen(8000, function () {
	console.log("Server up and runnig on port: ", 8000);
})