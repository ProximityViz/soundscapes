angular.module('app.controllers')
.controller('GamePlayCtrl', ['$scope', '$localStorage', '$ionicModal', '$ionicConfig', 'SoundsFactory', '$stateParams', 
					 					 function($scope,   $localStorage,   $ionicModal,   $ionicConfig,   SoundsFactory,   $stateParams) {
	console.log('GamePlayCtrl');

	$ionicConfig.backButton.previousTitleText(false);

	// move this into its own function so it's not all repeated
	this.id = $localStorage.gameProgress[$stateParams.pack] ? $localStorage.gameProgress[$stateParams.pack] : 0;
	this.quiz = SoundsFactory.getQuiz($stateParams.pack, this.id);
	console.log(this.quiz);
	this.packName = this.quiz.packTitle;
	this.number = parseInt(this.id) + 1;
	this.title = this.packName + ' Pack: Sound ' + this.number + ' of ' + this.quiz.packSize;
	this.audio = this.quiz.sound.file;

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
		this.audio = this.quiz.sound.file;
		source.src = this.audio;
		audio.load();
		$localStorage.gameProgress[$stateParams.pack] = this.id;
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

	// when the audio play button is pressed,
	// start animation
	// when the pause button is pressed,
	// pause animation
	this.audioTapped = function() {
		console.log("audio");
	}
	var player = document.getElementById("audio");
	var elements = document.getElementsByClassName("time-bar-not-animated");
	player.onplay = function() {
		console.log("audio playing");
		// add time-bar class
		angular.element(elements).addClass("time-bar");
	};
	player.onpause = function() {
		console.log("audio paused");
		// remove time-bar class (for now)
		angular.element(elements).removeClass("time-bar");
	};
	player.onended = function() {
		console.log("audio ended");
		// remove time-bar class
		angular.element(elements).removeClass("time-bar");
	};

}]);
