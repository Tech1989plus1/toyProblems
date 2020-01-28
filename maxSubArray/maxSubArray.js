/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = (nums) => {
  if (Array.isArray(nums)){
    var subTotal = nums[0];

    var recursive = (index, total) => {
      if (total === undefined) {
        recursive(index+1, nums[index]);
      }

      if (index < nums.length) {
        recursive(index+1, nums[index] + total);
      }

      if (total > subTotal) {
        subTotal = total
      }
    }

    for (let i = 0; i < nums.length; i++) {
      recursive(i, undefined);
    }

    return subTotal;
  }
  return null;
};