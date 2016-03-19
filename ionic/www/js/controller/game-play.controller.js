angular.module('app.controllers')
.controller('GamePlayCtrl', ['$scope', '$localStorage', '$ionicModal', '$ionicConfig', 'SoundsFactory', '$stateParams', 'ngAudio', '$interval',
					 					 function($scope,   $localStorage,   $ionicModal,   $ionicConfig,   SoundsFactory,   $stateParams,   ngAudio,   $interval) {
	console.log('GamePlayCtrl');

	var vm = this;

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
	this.completionPercentage = (this.number - 1) * 100 / this.quiz.packSize;
	this.audio = ngAudio.load(this.quiz.sound.file);

	this.attempted = [false, false, false, false];
	this.complete = false;

	this.choose = function(choice) {
		if (!this.complete) { // keep people from guesing after they've gotten in right
			if (this.quiz.correctSpectrogramIndex === choice) {
				this.complete = true;
				this.attempted[choice] = "correct";
				this.completionPercentage = this.number * 100 / this.quiz.packSize;
			} else {
				this.attempted[choice] = "incorrect";
			}
		};
	};

	this.advance = function() {
		this.audio.stop();
		if (this.number == this.quiz.packSize) {
			this.complete = false;
			this.quizComplete = true;
			this.quiz.title = "Pack Complete!";
			$localStorage.gameProgress[$stateParams.pack] = 0;
		} else {
			this.id++;
			this.quiz = SoundsFactory.getQuiz($stateParams.pack, this.id);
			this.number = parseInt(this.id) + 1;
			this.attempted = [false, false, false, false];
			this.complete = false;
			this.audio = ngAudio.load(this.quiz.sound.file);
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

	vm.audioIcon = 'ion-play';
	function toggleAudioIcon() {
		vm.audioIcon = vm.audioIcon === 'ion-play' ? 'ion-stop' : 'ion-play';
	}

	// monitor ngAudio every n milliseconds to see if the audio has ended
	var interval = 300;
	function checkAudio() {
		if (typeof(vm.audio) !== 'undefined' && !vm.audio.paused && vm.audio.remaining <= interval / 1000) {
			toggleAudioIcon();
		}
	}
	$interval(checkAudio, interval);

	var elements = document.getElementsByClassName("time-bar-not-animated");

	// when the audio play button is pressed,
	// start animation
	// when the pause button is pressed,
	// pause animation
	this.audioTapped = function() {
		toggleAudioIcon();
		if (vm.audioIcon === 'ion-stop') {
			if (!this.audio.paused) {
				this.audio.stop();
				angular.element(elements).removeClass("time-bar");
			}
			this.audio.play();
			angular.element(elements).addClass("time-bar");
		} else {
			this.audio.stop();
			angular.element(elements).removeClass("time-bar");
		}
	}

}]);
