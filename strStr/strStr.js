/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

 var strStr = (haystack, needle) => {
  if (typeof haystack === 'string' && typeof needle === 'string') {
    haystack = haystack.split('');
    needle = needle.split('');

    if ((haystack.length === 0 && needle.length === 0) || needle.length === 0) return 0;
    
    for (let index = 0; index < haystack.length; +index++) {
      const char = haystack[index];
      
      if (char === needle[0]) {
        var bool = true;
        var keyIndex = index + 1;
        for (let i = 1; i < needle.length; i++) {
          if (needle[i] !== haystack[keyIndex]) bool = false;
          keyIndex++;
        }
  
        if (bool) return index;
      }
    }
  }
  return -1;
};

console.log(strStr("aaa","aaaa"));