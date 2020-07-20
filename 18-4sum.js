/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);

    const len = nums.length;

    let result = [];

    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        const min = nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3];
        if (target < min) break;

        const max = nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3];
        if (target > max) continue;

        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            const min = nums[i] + nums[j] + nums[j + 1] + nums[j + 2];
            if (target < min) break;

            const max = nums[i] + nums[j] + nums[len - 1] + nums[len - 2];
            if (target > max) continue;

            let x = j + 1;
            let y = len - 1;

            while (x < y) {
                const sum = nums[i] + nums[j] + nums[x] + nums[y];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[x], nums[y]]);
                    x++;
                    y--;
                    while (nums[x] === nums[x - 1]) x++;
                    while (nums[y] === nums[y + 1]) y--;
                } else if (sum < target) {
                    x++;
                } else {
                    y--;
                }
            }
        }
    }

    return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([0, 0, 0, 0], 0));
console.log(fourSum([-3,-1,0,2,4,5], 1));