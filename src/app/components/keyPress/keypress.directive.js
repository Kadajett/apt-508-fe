angular.module("apt508").directive('keyPress', keyPress);

  function keyPress() {
    return {
      restrict: 'EA',
      link: function($scope, $element, $attrs) {
        $element.bind("keypress", function(event) {
          var keyCode = event.which || event.keyCode;

          if (keyCode == $attrs.code) {
            $scope.$apply(function() {
              $scope.$eval($attrs.keyPress, {$event: event});
            });

          }
        });
      }
    };
  }
