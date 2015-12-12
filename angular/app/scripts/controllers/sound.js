'use strict';

/**
 * @ngdoc function
 * @name soundscapesApp.controller:SoundCtrl
 * @description
 * # SoundCtrl
 * Controller of the soundscapesApp
 */
angular.module('soundscapesApp')
  .controller('SoundCtrl', function ($routeParams, SoundsFactory, $location) {
  	this.id = $routeParams.soundId;

  	console.log(SoundsFactory.getSound(this.id));
  	this.quiz = SoundsFactory.getQuiz(this.id);
  	console.log(this.quiz);

  	this.attempted = [false, false, false, false];
  	this.complete = false;

  	this.choose = function(choice) {
  		this.complete = this.quiz.correctSpectrogramIndex === choice;
  		this.attempted[choice] = true;
  	};

    this.navigate = function() {
    	var nextSound = parseInt(this.id) + 1;
      $location.path("/sounds/" + nextSound);
    };
  });
