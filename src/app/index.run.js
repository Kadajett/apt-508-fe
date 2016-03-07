(function() {
  'use strict';

  angular
    .module('apt508')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, auth) {
    auth.localStorageCheck();
    $log.debug('runBlock end');
  }

})();
