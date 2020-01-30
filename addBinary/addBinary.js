/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const addBinary = (a, b) => {
  var result = "";

  if (typeof a === 'string' && typeof b === 'string') {
    var aSize = a.length-1;
    var bSize = b.length-1;
    var sum = 0;

    while (aSize >= 0 || bSize >= 0 || sum === 1) {
      sum += ((aSize >= 0) ? Number(a[aSize]) : 0);
      sum += ((bSize >= 0) ? Number(b[bSize]): 0);
      
      result = (sum % 2).toString() + result;
      sum = Math.floor(sum / 2);

      aSize--;
      bSize--;
    }

    return result;
  }
  return null;
};
