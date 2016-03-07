(function(){
  'use strict';

  angular
    .module('apt508')
    .controller('yubikeyController', yubikeyController);

    function yubikeyController($timeout, $rootScope, $modalInstance, auth){
      var vm = this;

      function init(){
        focusInput();
      }

      vm.yubikeyFinished = function(){
        vm.authAttempt = true;
        vm.authLoading = true;
        vm.authSuccess = null;
        auth.login(vm.yubikeyInput)
        .then(function(){
          console.log('SuccessfulAuth');
          vm.authLoading = false;
          vm.authSuccess = true;

          $timeout(function(){
            $modalInstance.dismiss();
          }, 1000);

        }, function(){
          vm.authLoading = false;
          vm.authSuccess = false;
          vm.yubikeyInput = "";
          console.log('Failed Auth');
        })

      }

      function focusInput(){
        var yubikeyInput = angular.element("#yubikeyInput");



        if(yubikeyInput && $rootScope.loginOpen){
          yubikeyInput.focus();
          console.log(vm.yubikeyInput);
          $timeout(focusInput, 500);
        }

      }

      init();
    }

})();
