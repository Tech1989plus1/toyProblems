/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = (nums, val) => {
  if (Array.isArray(nums)) {
    let i = 0;

    while (i < nums.length) {
      const num = nums[i];
      if (num === val) {
        for (let j = i; j < nums.length - 1; j++) {
          nums[j] = nums[j+1];
        }
        nums.pop()
      } else {
        i++;
      }
    }

  }
  return nums.length;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))