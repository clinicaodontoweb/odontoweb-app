var app	= angular.module("OdontowebApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider)
{
	$routeProvider
		.when('/',
		{
			redirectTo: '/agenda'
		})
		.when('/agenda',
		{
			templateUrl: 'partials/agenda.html',
			controller: 'AgendaController'
		})
		.when('/pacientes',
		{
			templateUrl: 'partials/pacientes.html',
			controller: 'PacientesController'
		})
		.when('/cadastros',
		{
			templateUrl: 'partials/cadastros.html',
			controller: 'CadastrosController'
		})
		.when('/configuracoes',
		{
			templateUrl: 'partials/configuracoes.html',
			controller: 'ConfiguracoesController'
		})
		.otherwise({
			templateUrl: 'partials/no_page.html'
		})
}]);