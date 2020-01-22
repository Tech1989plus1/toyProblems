/**
 * @param {number[]} nums
 * @return {number}
 */

 var removeDuplicates = (nums) => {
  if (Array.isArray(nums)) {
    nums.sort((a, b) => a - b);

    let i = 1;
    while (i < nums.length ) {
      if (i > 0 && nums[i] === nums[i-1]) {
        for (let j = i; j < nums.length-1; j++) {
          nums[j] = nums[j+1];
        }
        nums.pop(); 
      } else {
        i++;
      }
    }
    return nums;
  }
  return null; 
};

//module.exports = removeDuplicates;
console.log(removeDuplicates([-1,1,-2, 2]));