/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] >= nums[left]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid -1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};

console.log(search([4,5,6,7,0,1,2], 0), 4);
console.log(search([4,5,6,7,0,1,2], 3), -1);
console.log(search([5,6,7,8,9,10,0,1,2,3,4], 3), 9);
console.log(search([3, 1], 1), 1);
console.log(search([3], 3), 0);
console.log(search([5, 1, 3], 3), 2);
console.log(search([5, 1, 3], 5), 0);
console.log(search([1, 3, 5], 1), 0);
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8), 4);