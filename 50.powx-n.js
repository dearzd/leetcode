/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let isNegative = false;
    if (n < 0) {
        n = -n;
        isNegative = true;
    }

    const result = fastPow(x, n);

    return isNegative ? 1 / result : result;
};

let fastPow = function(x, n) {
    if (n === 0) return 1;

    const subResult = fastPow(x, Math.floor(n / 2));
    if (n % 2 === 0) {
        return subResult * subResult;
    } else {
        return subResult * subResult * x;
    }
};

console.log(myPow(2, 10));
console.log(myPow(2, -10));
console.log(myPow(0.44528, 0));
console.log(myPow(2, -2147483648));
