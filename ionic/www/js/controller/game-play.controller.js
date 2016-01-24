angular.module('app.controllers')
.controller('GamePlayCtrl', ['$scope', '$localStorage', '$ionicModal', '$ionicConfig', 'SoundsFactory', '$stateParams', 
					 					 function($scope,   $localStorage,   $ionicModal,   $ionicConfig,   SoundsFactory,   $stateParams) {
	console.log('GamePlayCtrl');

	$ionicConfig.backButton.previousTitleText(false);

	// deal with landscape vs. portrait
	// init
	$scope.orientation = window.innerWidth >= window.innerHeight ? "landscape" : "portrait";
	var previousOrientation = window.innerWidth >= window.innerHeight ? "landscape" : "portrait";

	// resize
	window.onresize = function(event) {
		if (typeof $scope.orientation != 'undefined') { 
			previousOrientation = angular.copy($scope.orientation); 
		}
		$scope.orientation = window.innerWidth >= window.innerHeight ? "landscape" : "portrait";
		if (this.previousOrientation !== $scope.orientation) {
			// refresh view so new classes are activated in ng-class="orientation === 'landscape' ? 'choice-landscape' : 'choice-portrait'"
			$scope.$apply();
		}
	};

	// init quiz
	// move this into its own function so it's not all repeated
	this.quizComplete = false;
	this.id = $localStorage.gameProgress[$stateParams.pack] ? $localStorage.gameProgress[$stateParams.pack] : 0;
	this.quiz = SoundsFactory.getQuiz($stateParams.pack, this.id);
	this.packName = this.quiz.packTitle;
	this.number = parseInt(this.id) + 1;
	this.title = this.packName + ' Pack: Sound ' + this.number + ' of ' + this.quiz.packSize;
	this.audio = this.quiz.sound.file;

	this.attempted = [false, false, false, false];
	this.complete = false;

	this.choose = function(choice) {
		if (!this.complete) { // keep people from guesing after they've gotten in right
			if (this.quiz.correctSpectrogramIndex === choice) {
				this.complete = true;
				this.attempted[choice] = "correct";
			} else {
				this.attempted[choice] = "incorrect";
			}
		};
	};

	this.advance = function() {
		if (this.number == this.quiz.packSize) {
			this.complete = false;
			this.quizComplete = true;
			this.quiz.title = "Pack Complete!";
			$localStorage.gameProgress[$stateParams.pack] = 0;
		} else {
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
		}
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
