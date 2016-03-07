/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('apt508')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('apiDetails', {url: 'http://localhost:8080'})

})();
