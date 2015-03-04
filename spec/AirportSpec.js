describe('Airport', function() {
  var airport;
  var plane

  beforeEach(function() {
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff'])
  });

  it('can dock a plane', function() {
    airport = new Airport();
    airport.dock(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it('can land a plane once docked', function() {
    airport.dock(plane);
    expect(plane.land).toHaveBeenCalled();
  });

});