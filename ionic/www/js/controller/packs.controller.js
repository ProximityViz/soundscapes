angular.module('app.controllers')
.controller('PacksCtrl', ['SoundsFactory', 
										function(SoundsFactory) {
	console.log('PacksCtrl');

	this.packs = SoundsFactory.getPacks();
	console.log(this.packs);

}]);
