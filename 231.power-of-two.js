/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n >= 0 && (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo(1), true);
console.log(isPowerOfTwo(16), true);
console.log(isPowerOfTwo(218), false);
console.log(isPowerOfTwo(-2147483648), false);