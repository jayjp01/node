
(function() {
var app = angular.module('NerdCtrl', [])

	'use strict';

	/**
	 * @ngInject
	 */

	function NerdController($scope,Nerd) {
		$scope.tagline = 'Nothing beats a pocket protector!';
		Nerd.getUserDetails().then(function(data) {
			$scope.check = data;
			console.log($scope.check);
		});
	}
		


app.controller('NerdController', NerdController);

})();

