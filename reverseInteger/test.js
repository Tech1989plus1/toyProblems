const expect = require('chai').expect;

const comment = 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.';

describe(comment, () => {
  const reverse = require('./reverseInteger.js');

  it('should return reverse integer', () => {
    var nums = 123;

    expect(reverse(nums)).to.equal(321);
  });

  it('should return reverse integer', () => {
    var nums = 374748596;

    expect(reverse(nums)).to.equal(695847473);
  });

  it('should return reverse negative integer', () => {
    var nums = -123;

    expect(reverse(nums)).to.equal(-321);
  });

  it('should return reverse integer and drop zero', () => {
    var nums = 120;

    expect(reverse(nums)).to.equal(21);
  });
});