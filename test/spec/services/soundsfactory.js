'use strict';

describe('Service: SoundsFactory', function () {

  // load the service's module
  beforeEach(module('soundscapesApp'));

  // instantiate service
  var SoundsFactory;
  beforeEach(inject(function (_SoundsFactory_) {
    SoundsFactory = _SoundsFactory_;
  }));

  it('should do something', function () {
    expect(!!SoundsFactory).toBe(true);
  });

});
