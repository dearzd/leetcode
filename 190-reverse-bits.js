/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;
    let mask = 1;
    for (let i = 0; i < 32; i++) {
        result = result << 1;
        result += (n & mask);
        n = n >> 1;
    }
    return result >>> 0;
};

console.log(reverseBits(1));