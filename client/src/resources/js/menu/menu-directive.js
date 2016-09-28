app.directive('menuAtivo', ['$location', function (location) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs, controller) {
      var path = attrs.href;
      path = path.substring(1);
      scope.location = location;
      scope.$watch('location.path()', function (newPath) {
        if (path === newPath) {
          $(element).parent().addClass('menu-ativo');
        } else {
          $(element).parent().removeClass('menu-ativo');
        }
      });
    }
  };
}]);