
const nestedArray = (arr) => {
  var result = [];

  const recursive = (enterArr) => {
    for (let i = 0; i < enterArr.length; i++) {
      if (Array.isArray(enterArr[i])) {
        recursive(enterArr[i]);
      } else {
        result.push(enterArr[i]);
      }
    }
  }
  recursive(arr);

  return result;
};

console.log(nestedArray([[1,2,[3]],4,5,[3]]));