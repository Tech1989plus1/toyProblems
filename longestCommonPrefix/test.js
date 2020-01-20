const expect = require('chai').expect;

describe('Longest Common Prefix', () => {
  const longestCommonPrefix = require('./longestCommonPrefix.js');

  it(`If there is no common prefix, return an empty string "".`, () => {
    expect(longestCommonPrefix(["dog","racecar","car"])).to.equal("");
  });

  it(`Common prefix should return "fl"`, () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).to.equal("fl");
  });

  it(`Common prefix should return "rick"`, () => {
    expect(longestCommonPrefix(["derick","rick","ricky", "kicr"])).to.equal("rick");
  });
});