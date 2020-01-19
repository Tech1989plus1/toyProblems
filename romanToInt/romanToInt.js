/**
 * @param {string} s
 * @return {number}
 */

const Roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s) => {
  var arr = [];
  var num = 0;

  s.toUpperCase().split('').map((numeral) => {
    arr.push(Roman[numeral]);
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i+1] !== undefined) {
      if (arr[i+1] > arr[i]) {
        num = num + (-1 * arr[i]);
      } else {
        num = num + arr[i];
      }
    } else {
      num = num + arr[i];
    }
  }

  return num;
};

module.exports = romanToInt;
