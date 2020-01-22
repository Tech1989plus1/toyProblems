/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

 var strStr = (haystack, needle) => {
  if (typeof haystack === 'string' && typeof needle === 'string') {
    haystack = haystack.split('');
    needle = needle.split('');
    
    haystack.map((char, key) => {
      if (char === needle[0]) {
        let j = 1;
        let i = key + 1;
        
      }
    });
  }
  return -1;
};

console.log(strStr("hello","ll"));