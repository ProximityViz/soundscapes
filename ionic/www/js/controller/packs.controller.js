angular.module('app.controllers')
.controller('PacksCtrl', ['SoundsFactory', '$localStorage', 
										function(SoundsFactory, $localStorage) {
	console.log('PacksCtrl');

	this.packs = SoundsFactory.getPacks();
	this.progress = $localStorage.gameProgress;
	
	for(i in this.packs) {
		var pack = this.packs[i];
		pack.progress = this.progress[pack.shortTitle];
		pack.progressPercent = pack.progress * 100 / pack.pack.length;
		pack.progressIncompletePercent = 100 - pack.progressPercent;
	}

}]);
