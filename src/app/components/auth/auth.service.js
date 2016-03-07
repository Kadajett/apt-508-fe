angular.module("apt508")
.factory('auth', auth);

function auth($http, $q, localStorageService, apiDetails){
  var api = {
    login: function(yubikeyCode){
      var defer = $q.defer();
      if(yubikeyCode){
        $http.post(apiDetails.url + '/auth', {otp: yubikeyCode})
        .success(function(res){
          console.log('Response from Auth: ', res);
          localStorageService.set('authToken', res.authToken);
          $http.defaults.headers.common.Authorization = res.authToken;
          defer.resolve();
        })
        .error(function(err){
          defer.reject(401);
        })
      } else {
        console.log('Didnt send the yubikey code asshole...');
        defer.reject();
      }


      return defer.promise;
    },
    localStorageCheck: function(){
      var token = localStorageService.get('authToken');

      if(token){
        $http.defaults.headers.common.Authorization = token;
      }
    }
  };

  return api;
}
