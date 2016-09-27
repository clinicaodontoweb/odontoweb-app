app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider)
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
		.when('/login',
		{
			templateUrl: 'partials/login.html',
			controller: 'AuthenticationController'
		})
		.otherwise({
			templateUrl: 'partials/no_page.html'
		});

	$httpProvider.interceptors.push('JWTInterceptor');
	
}]);