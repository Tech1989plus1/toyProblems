/**
 * @param {number} x
 * @return {number}
 */

const reverse = (x) => {
  if (typeof x === 'number') {
    const sign = Math.sign(x);
    x = Math.abs(x) + "";
    return  sign * Number(x.split("").reverse().join(''));
  }
  return 0;
};

module.exports = reverse;

