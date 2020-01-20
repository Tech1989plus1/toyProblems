const expect = require('chai').expect;

describe('Is Valid Parentheses', () => {
  const isValid = require('./isValid.js');

  it('Empty string is true', () => {
    expect(isValid('')).to.equal(true);
  });

  it(`Parentheses: "[" to be false`, () => {
    expect(isValid('[')).to.equal(false);
  });

  it(`Parentheses: "[}" to be false`, () => {
    expect(isValid('[}')).to.equal(false);
  });

  it(`Parentheses: "[]{}()" to be true`, () => {
    expect(isValid('[]{}()')).to.equal(true);
  });

  it(`Parentheses: "[{]}()" to be false`, () => {
    expect(isValid('[{]}()')).to.equal(false);
  });
});