/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = (s) => {
  var bool = true;

  if (s === null || s.length < 0) {
    return true;
  }

  else if (typeof s === 'string') {
    const parentheses = s.split("");
    var stack = [];

    parentheses.map((paren) => {
      if (paren === '[') {
        stack.push(']');
      } else if (paren === '{') {
        stack.push('}');
      } else if (paren === '(') {
        stack.push(')');
      } else if (stack.length === 0 || paren !== stack.pop()) {
        bool = false;
        return;
      }
    });
    
    if (stack.length === 0 && bool) {
      bool = true;
    }
  }
    return bool;
};

module.exports = isValid;