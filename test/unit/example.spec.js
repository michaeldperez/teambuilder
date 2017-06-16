import add from '../../client/example';

describe('An example test suite', function() {
  beforeEach(function() {});
  afterEach(function() {});

  it('should pass canary test', function() {
    expect(add(1,2)).to.equal(3);
  });

});