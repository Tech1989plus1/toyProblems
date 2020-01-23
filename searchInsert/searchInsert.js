/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 var searchInsert = (nums, target) => {
   if (Array.isArray(nums)) {
     for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (num >= target) {
        return i;
      }
     }
   }
   return nums.length;
};
