angular.module('app.controllers')
.controller('GamePlayCtrl', ['$scope', '$ionicModal', '$ionicConfig', 'SoundsFactory', '$stateParams', 
					 function($scope,   $ionicModal,   $ionicConfig,   SoundsFactory,   $stateParams) {
	console.log('GamePlayCtrl');

	$ionicConfig.backButton.previousTitleText(false);

	// move this into its own function so it's not all repeated
	this.id = 0;
	this.quiz = SoundsFactory.getQuiz($stateParams.pack, this.id);
	this.packName = this.quiz.packTitle;
	this.number = parseInt(this.id) + 1;
	this.title = this.packName + ' Pack: Sound ' + this.number + ' of ' + this.quiz.packSize;
	this.audio = '/../resources/'+this.quiz.sound.file;

	console.log(this.quiz);

	this.attempted = [false, false, false, false];
	this.complete = false;

	this.choose = function(choice) {
		if (!this.complete) {
			this.complete = this.quiz.correctSpectrogramIndex === choice;
			this.attempted[choice] = true;
		};
	};

	this.advance = function() {
		this.id++;
		this.quiz = SoundsFactory.getQuiz($stateParams.pack, this.id);
		this.number = parseInt(this.id) + 1;
		this.title = this.packName + ' Pack: Sound ' + this.number + ' of ' + this.quiz.packSize;
		this.attempted = [false, false, false, false];
		this.complete = false;
		this.audio = '/../resources/'+this.quiz.sound.file;
		source.src = this.audio;
		audio.load();
		console.log(this.id);
	};

	$ionicModal.fromTemplateUrl('templates/photo-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.photoModal = modal;
	});

	$ionicModal.fromTemplateUrl('templates/spectrogram-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.spectrogramModal = modal;
	});

	this.showPhotoModal = function() {
		$scope.title = this.quiz.title;
		$scope.image = this.quiz.image;
		$scope.photoModal.show();
	}

	this.showSpectrogramModal = function(index) {
		$scope.title = "";
		$scope.spectrogram = this.quiz.spectrograms[index];
		$scope.spectrogramModal.show();
	}
}]);
