const expect = require('chai').expect;

describe('Remove duplicates from an array of number', () => {
  const removeDuplicates = require('./removeDuplicates.js');

  it(`removeDuplicates([])`, () => {
    expect(removeDuplicates()).to.equal();
  });
});