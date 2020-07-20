/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let step = 0;
    let max = nums[0];
    let current = 0;

    while (current < nums.length - 1) {
        let nextMax = max;
        for (let i = current + 1; i <= max; i++) {
            nextMax = Math.max(nextMax, i + nums[i]);
        }
        current = max;
        max = nextMax;
        step++;
    }

    return step;
};

console.log(jump([0]), 0);
console.log(jump([2,1]), 1);
console.log(jump([2,3,1]), 1);
console.log(jump([1, 3, 2]), 2);
console.log(jump([2,3,1,1,4]), 2);
console.log(jump([8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6]), 4);
console.log(jump([8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5]), 13);