/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = (s) => {
  if (s === null || s.length < 0) {
    return true;
  }

  else if (typeof s === 'string') {
    const parentheses = s.split("");
    var stack = [];

    for (let i = 0; i < parentheses.length; i++) {
      const paren = parentheses[i];

      if (paren === '[') {
        stack.push(']');
      } else if (paren === '{') {
        stack.push('}');
      } else if (paren === '(') {
        stack.push(')');
      } else if (stack.length === 0 || paren !== stack.pop()) {
        return false;
      }
    }
    
    if (stack.length === 0) {
      return true;
    }
  }
    return false;
};

module.exports = isValid;