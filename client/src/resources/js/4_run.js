app.run(['$rootScope', '$location', 'AuthorizationService', function($rootScope, $location, AuthorizationService) {
    
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        if(!nextRoute.$$route.hasOwnProperty('requireLogin') && !AuthorizationService.isLogged()) {
            $location.path("/login");
        }
    });

    $rootScope.$on("$viewContentLoaded", function(event){
        $('#content-wrapper').height($(window).height() - 120);
    });

    $rootScope.userName = function(){ 
    	return AuthorizationService.getUserName();
    };

    $rootScope.isLogged = function(){ 
    	return AuthorizationService.isLogged();
    };

    $rootScope.showElement = function () {
        return AuthorizationService.isLogged();
    };

    $rootScope.go = function (path) {
        $location.path(path);
    };

}]);
