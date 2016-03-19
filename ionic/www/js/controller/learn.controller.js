angular.module('app.controllers')
.controller('LearnCtrl', function() {
	console.log('LearnCtrl');

	this.openLink = function(link) {
		window.open(link, "_system", "location=yes");
	}

});
