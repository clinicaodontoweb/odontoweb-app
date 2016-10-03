app.directive('breadcrumb', ['$location', function (location) {
  return {
    restrict: 'E',
    templateUrl: 'partials/directives/breadcrumb.html',
    link: function(scope, element, attrs) {
      scope.paths = _.filter(location.path().split('/'), function(path){ return path != ''; });
    }
  };
}]);