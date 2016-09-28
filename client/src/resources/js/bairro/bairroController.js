app.controller('BairroController', ['$scope', 'BairroService', function($scope, BairroService){

	$scope.title	= "Gerenciador de Bairros";
	$scope.bairros	=  BairroService.query(function(bairros){
		console.log(bairros);
	});
	
}]);