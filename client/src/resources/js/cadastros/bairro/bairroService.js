app.factory('BairroService', ['$resource', function($resource) {
	return $resource('/bairro/:id');
}]);