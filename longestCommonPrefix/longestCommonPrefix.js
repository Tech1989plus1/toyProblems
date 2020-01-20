/**
 * @param {string[]} strs
 * @return {string}
 */

 const longestCommonPrefix = (strs) => {
    var result = "";
    
    if (Array.isArray(strs) && strs.length !== 0) {
      const word = strs[0];

      word.split("").map((char) => {
        var  bool = true;
        for (let i = 1; i < strs.length; i++) {
          if (!strs[i].includes(char)){
            bool = false;
          } else {
            const indexOf = strs[i].indexOf(char);
            var str = strs[i].split('');
            var temp = str[str.length - 1];
            str[str.length - 1] = str[indexOf];
            str[indexOf] = temp;
            str.pop();
            strs[i] = str.toString();
          }
        }

        if (bool) {
          result+= char;
        }
      })
    }
    return result;
};

module.exports = longestCommonPrefix;