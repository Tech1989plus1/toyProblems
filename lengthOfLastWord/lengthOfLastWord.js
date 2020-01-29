/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = (s) => {
  if (typeof s === 'string' && s.length > 0) {
    const words = s.split(' ');

    for (let i = words.length-1; 0 <= i ; i--) {
      if (words[i] !== '') return words[i].length;
    }
  }
  return 0;
};
