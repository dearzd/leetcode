/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0, zeroIndex = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i !== zeroIndex) {
                nums[zeroIndex] = nums[i];
                nums[i] = 0;
            }
            zeroIndex++;
        }
    }
};


// below code is first time write algorithm
var moveZeroes_first = function(nums) {
    var i = 0;
    var endIndex = nums.length;
    for (; i < endIndex; i++) {
        if (nums[i] === 0) {
            moveTo(nums, i, endIndex);
            i--;
            endIndex--;
        }
    }
};

var moveTo = function(nums, index) {
    var start = nums[index];
    for (let i = index; i < nums.length; i++) {
        nums[i] = nums[i + 1];
    }
    nums[nums.length - 1] = start;
};

var arr = [0, 1, 0, 2, 0, 3, 4, 0];
//moveZeroes_first(arr);
moveZeroes(arr);
console.log(arr);