angular.module('app.controllers')
.controller('ExploreCtrl', ['SoundsFactory', '$stateParams', '$ionicModal', 
										function(SoundsFactory,   $stateParams,   $ionicModal) {
	console.log('ExploreCtrl');

	this.packName = "NPS";
	this.pack = SoundsFactory.getExplore($stateParams.packId);
}]);
