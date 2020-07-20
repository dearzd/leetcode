/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const targetValue = target - nums[i];
        if (map.has(targetValue)) {
            return [map.get(targetValue), i];
        } else {
            map.set(nums[i], i);
        }
    }
};

// 两次遍历，一次hash，一次验证
var twoSum_second = function(nums, target) {
    let valueMap = {};
    nums.forEach((n, i) => valueMap[n] = i);
    for (let i = 0; i < nums.length; i++) {
        const value = target - nums[i];
        if (i !== valueMap[value] && valueMap[value] !== void 0) {
            return [i, valueMap[value]];
        }
    }
};

// 两重循环 n2
var twoSum_first = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

const nums = [2,7,11,15];
console.log(twoSum(nums, 9));

