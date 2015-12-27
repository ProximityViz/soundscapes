angular.module('app.controllers')
.controller('ExploreCtrl', ['SoundsFactory', '$stateParams', '$scope', '$ionicModal', 
										function(SoundsFactory,   $stateParams,   $scope,   $ionicModal) {
	console.log('ExploreCtrl');

	this.packName = "NPS";
	this.pack = SoundsFactory.getExplore($stateParams.packId);

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

	this.showPhotoModal = function(card) {
		console.log(card);
		$scope.title = card.title;
		$scope.image = card.image;
		$scope.photoModal.show();
	}

	this.showSpectrogramModal = function(card) {
		$scope.title = card.title;
		$scope.spectrogram = card.spectrogram;
		$scope.spectrogramModal.show();
	}

}]);
