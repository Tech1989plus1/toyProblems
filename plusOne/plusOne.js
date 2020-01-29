/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = (digits) => {
  var numS = "";

  digits.map((num) => numS += num.toString());

  numS = (Number(numS) + 1).toString().split("");

  numS.map((num, key) => numS[key] = Number(num));
  
  return numS;
};

var nums = plusOne([9,9]);

console.log(nums);