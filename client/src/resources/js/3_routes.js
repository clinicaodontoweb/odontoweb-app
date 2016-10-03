app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider)
{
	$routeProvider
		.when('/', {redirectTo: '/agenda'})
		.when('/agenda', {templateUrl: 'partials/agenda/index.html', controller: 'AgendaController'})
		.when('/pacientes', {templateUrl: 'partials/pacientes/index.html', controller: 'PacientesController'})
		.when('/cadastros', {templateUrl: 'partials/cadastros/index.html', controller: 'CadastrosController'})
		.when('/configuracoes', {templateUrl: 'partials/configuracoes/index.html', controller: 'ConfiguracoesController'})
		.when('/cadastros/bairro', {templateUrl: 'partials/cadastros/bairro/list.html', controller: 'BairroController'})
		.when('/cadastros/bairro/novo', {templateUrl: 'partials/cadastros/bairro/new.html', controller: 'BairroController'})
		.when('/cadastros/bairro/editar/:id', {templateUrl: 'partials/cadastros/bairro/new.html', controller: 'BairroController'})
		.when('/login', {templateUrl: 'partials/authentication/login.html', controller: 'AuthenticationController'})
		.otherwise({templateUrl: 'partials/no_page.html'});

	$httpProvider.interceptors.push('JWTInterceptor');
	
}]);