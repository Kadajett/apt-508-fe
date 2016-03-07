(function() {
  'use strict';

  angular
    .module('apt508')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $modal, $rootScope) {
    var vm = this;

    vm.clickLogin = function(){
      $rootScope.loginOpen = true;
      var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'app/main/yubikey.html',
      controller: 'yubikeyController',
      controllerAs: 'yub'
    })
    modalInstance.result.then(function(){

    }, function(){

      $rootScope.loginOpen = false;

    });

    }
  }
})();
