angular.module('app.controllers')
.controller('LearnCtrl', ['$ionicHistory', function($ionicHistory) {
	console.log('LearnCtrl');
	
	this.backClicked = function() {
		$ionicHistory.goBack();
	}

	this.openLink = function(link) {
		window.open(link, "_system", "location=yes");
	}

}]);
