/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;
    let i = 1;
    let j = 2;
    let sum = 0;
    for (let k = 2; k < n; k++) {
        sum = i + j;
        i = j;
        j = sum;
    }
    return sum;
};

console.log(climbStairs(6));