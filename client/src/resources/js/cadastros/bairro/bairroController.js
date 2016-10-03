app.controller('BairroController', ['$scope', 'Restangular', '$location', '$routeParams', function($scope, Restangular, $location, $routeParams){

	var bairro_api 	= Restangular.all('bairro');
	
	$scope.title	= "Gerenciador de Bairros";
	$scope.bairro 	= {};

	bairro_api.getList().then(function(bairros) {
	  $scope.bairros = bairros;
	});

	$scope.save = function(isValid){
		if(isValid){
			bairro_api.post($scope.bairro).then(function(msg){
				$location.path("/cadastros/bairro");
			});
		}
	};
	
	
}]);