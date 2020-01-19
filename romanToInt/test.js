const expect = require('chai').expect;

describe('Roman to Integer', () => {
  const romanToInt = require('./romanToInt.js');

  it(`Roman Numeral: "I" should be eqaul 1`, () => {
    expect(romanToInt('I')).to.equal(1);
  });

  it(`Roman Numeral: "IV" should be eqaul 4`, () => {
    expect(romanToInt('IV')).to.equal(4);
  });

  it(`Roman Numeral: "MMMDCCXXIV" should be eqaul 3724`, () => {
    expect(romanToInt('IV')).to.equal(4);
  });

  it(`Roman Numeral: "MMXXII" should be eqaul 2022`, () => {
    expect(romanToInt('MMXXII')).to.equal(2022);
  });

  it(`Roman Numeral: "DCCCXLV" should be eqaul 845`, () => {
    expect(romanToInt('DCCCXLV')).to.equal(845);
  });
});