/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let x = m - 1;
    let y = n - 1;
    let i = m + n - 1;
    while (x >= 0 && y >= 0) {
        nums1[i--] = nums1[x] >= nums2[y] ? nums1[x--] : nums2[y--];
    }
    while (y >= 0) {
        nums1[i--] = nums2[y--];
    }
    console.log(nums1);
};

console.log(merge([1,2,3,0,0,0], 3, [2, 5, 6], 3));