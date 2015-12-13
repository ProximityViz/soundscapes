angular.module('app.controllers')
.controller('GamePlayCtrl', ['$ionicModal', 'SoundsFactory', '$stateParams', function($ionicModal, SoundsFactory, $stateParams) {
	console.log('GamePlayCtrl');

	this.packName = "NPS";
	this.id = $stateParams.soundId;
	this.quiz = SoundsFactory.getQuiz($stateParams.soundId, 0);
	console.log(this.quiz);
}]);
