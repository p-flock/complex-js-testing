function Complex(real, imaginary) {

  this.real = real;
  this.imag = imaginary;
}

Complex.prototype = {
  /*
   *getValue: function() {
   *  return this.real + this.imaginary*Math.sqrt(2);
   *},
   */
  add: function(o) {
    return new Complex(this.real + o.real, this.imag + o.imag);
  },
  sub: function(o) {
    return new Complex(this.real - o.real, this.imag - o.imag);
  },
  equals: function(o) {
    return (this.real === o.real) && (this.imag === o.imag);
  },
  mult: function(o) {
    var real_part = (this.real * o.real) - (this.imag * o.imag)
    var imag_part = (this.real * o.imag) + (this.imag * o.real)
    return new Complex(real_part, imag_part);

  },
}

module.exports = {
  Complex,
};
