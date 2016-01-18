angular.module('app.controllers')
.controller('PacksCtrl', ['SoundsFactory', 
										function(SoundsFactory) {
	console.log('PacksCtrl');

	this.packs = SoundsFactory.getPacks();
	for (pack in this.packs) {
		console.log(this.packs[pack]);
	}

}]);
