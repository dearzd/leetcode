/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0;
    let right = num;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (mid * mid === num) return true;
        if (mid * mid < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};

console.log(isPerfectSquare(0), true);
console.log(isPerfectSquare(5), false);
console.log(isPerfectSquare(4), true);
console.log(isPerfectSquare(1024), true);
console.log(isPerfectSquare(6), false);
console.log(isPerfectSquare(16), true);
