/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let result = 0;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (mid * mid <= x) {
            left = mid + 1;
            result = mid;
        } else {
            right = mid - 1;
        }
    }
    return result;
};

console.log(mySqrt(4));
console.log(mySqrt(1));
console.log(mySqrt(0));
console.log(mySqrt(5));
console.log(mySqrt(8));
console.log(mySqrt(2));
console.log(mySqrt(1024));
console.log(mySqrt(255));
console.log(mySqrt(6));
console.log(mySqrt(2147395600));