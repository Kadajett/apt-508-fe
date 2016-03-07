(function() {
  'use strict';

  angular
    .module('apt508')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($timeout, $rootScope, Dashboard) {
    var vm = this;
    Dashboard.getCurrentUser()
    .then(function(res){
      vm.user = res;
    })
  }
})();
