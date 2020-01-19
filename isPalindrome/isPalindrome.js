/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x === 0) {
    return true;
  }

  if (typeof x === 'number' && Math.sign(x) !== -1) {
    x = x + "";
    const reverse = Number(x.split("").reverse().join(''));

    if ( (x / reverse) === 1) {
      return true;
    }
  }
  return false;
};

module.exports = isPalindrome;
