const expect = require('chai').expect;

const comment = 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.';

describe(comment, () => {
  const twoSum = require('./twoSum.js');

  it('should return an array the index of integer', () => {
    var nums = [2, 7, 11, 15];
    var target = 9;

    expect(twoSum(nums, target)).to.equal([0, 1]);
  });

  it('should return an array the index of integer', () => {
    var nums = [-1,-2,-3,-4,-5];
    var target = -8;

    expect(twoSum(nums, target)).to.equal([2, 4]);
  });
});