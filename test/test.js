var Complex = require('../src/complex.js').Complex;

assert = require('assert');
describe('Complex class implementation', function() {
  it('new Complex()', function() {
    var a = new Complex(1, 2);
    var b = new Complex(-1, -2);
    assert.equal(1, a.real);
    assert.equal(2, a.imag);
    assert.equal(-1, b.real);
    assert.equal(-2, b.imag);
  });
  it('Addition: a.add(b)', function() {
    var a = new Complex(1, 2);
    var b = new Complex(3, 6);
    var c = a.add(b)
    assert.equal(4, c.real);
    assert.equal(8, c.imag);
  });
  it('Subtraction: a.sub(b)', function() {
    var a = new Complex(4, 7);
    var b = new Complex(3, 6);
    var c = a.sub(b)
    assert.equal(1, c.real);
    assert.equal(1, c.imag);
  });
  it('Multiplication: a.mult(b)', function() {
    //TODO implement Multiplication tests
    assert.equal(true, true);
  });
  it('Equality a.equals(b)', function() {
    //TODO implement equality function and write tests
    assert.equal(true, true);
  });
});
