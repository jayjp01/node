var ser = angular.module('NerdService', []);
ser.factory('Nerd', anp);
	function anp($http,$q) {

	var dataSvc = {};
		dataSvc.getUserDetails = function () {
				var deferred = $q.defer();
				$http.get('https://randomuser.me/api/')
				.success(function (data) {
					deferred.resolve(data);
				}).error(function (err) {
					deferred.reject(err);
				});
				return deferred.promise;
			}
			return dataSvc;

};