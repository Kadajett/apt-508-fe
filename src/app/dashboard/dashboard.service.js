(function() {
  'use strict';

  angular
    .module('apt508')
    .factory('Dashboard', Dashboard);

  /** @ngInject */
  function Dashboard($http, $q, apiDetails) {
    var api = {
      getCurrentUser: function(){
        var defer = $q.defer();
        $http.get(apiDetails.url + '/me')
        .success(function(res){
          defer.resolve(res);
        })
        .error(function(err){
          defer.reject(err);
        })
        return defer.promise;
      }
    };

    return api;
  }
})();
