const twoSum = function(nums, target) {
    var obj = {};
    var result = []
    
    if (Array.isArray(nums)) {
        nums.map((num, key) => {
            let sum = Math.abs(target - num);

            if (obj[num] !== undefined){
                result = [obj[num], key];
                return;
            }  else {
                obj[sum] = key;
            }
        });
    }

    return result;
};

module.exports = twoSum;

