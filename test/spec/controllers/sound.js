'use strict';

describe('Controller: SoundCtrl', function () {

  // load the controller's module
  beforeEach(module('soundscapesApp'));

  var SoundCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SoundCtrl = $controller('SoundCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SoundCtrl.awesomeThings.length).toBe(3);
  });
});
