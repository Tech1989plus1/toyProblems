/**
 * @param {string[]} strs
 * @return {string}
 */

 const longestCommonPrefix = (strs) => {
    var result = "";
    
    if (Array.isArray(strs)) {
      const word = strs[0];

      word.split("").map((char) => {
        var  bool = true;
        for (let i = 1; i < strs.length; i++) {
          if (!strs[i].includes(char)){
            bool = false;
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