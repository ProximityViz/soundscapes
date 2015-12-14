angular.module('app.controllers')
.controller('GamePlayCtrl', ['$scope', '$ionicModal', 'SoundsFactory', '$stateParams', 
										 function($scope,   $ionicModal,   SoundsFactory,   $stateParams) {
	console.log('GamePlayCtrl');

	// move this into its own function so it's not all repeated
	this.id = 0;
	this.quiz = SoundsFactory.getQuiz($stateParams.packId, this.id);
	this.packName = this.quiz.packTitle;
	this.number = parseInt(this.id) + 1;
	this.title = this.packName + ' Pack: Sound ' + this.number + ' of ' + this.quiz.packSize;

	console.log(this.quiz);

	this.attempted = [false, false, false, false];
	this.complete = false;
	var _this = this;

	this.choose = function(choice) {
		if (!this.complete) {		
			console.log(choice);
			this.complete = this.quiz.correctSpectrogramIndex === choice;
			this.attempted[choice] = true;
		};
	};

	this.advance = function() {
		this.id++;
		this.quiz = SoundsFactory.getQuiz($stateParams.packId, this.id);
		this.number = parseInt(this.id) + 1;
		this.title = this.packName + ' Pack: Sound ' + this.number + ' of ' + this.quiz.packSize;
		this.attempted = [false, false, false, false];
		this.complete = false;
		console.log(this.id);
	};

	$ionicModal.fromTemplateUrl('templates/photo-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		_this.photoModal = modal;
	});

	$ionicModal.fromTemplateUrl('templates/spectrogram-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		_this.spectrogramModal = modal;
	});

	this.showPhotoModal = function() {
		_this.photoModal.show();
	}

	this.showSpectrogramModal = function(index) {
		_this.spectrogram = this.quiz.spectrograms[index].file;
		_this.spectrogramModal.show();
	}
}]);
