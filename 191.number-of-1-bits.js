/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    /*let count = 0;
    let mask = 1;
    while (n !== 0) {
        if (n & mask) {
            count++;
        }
        n = n >>> 1;
    }
    return count;*/

    let count = 0;
    while (n !== 0) {
        n = n & (n - 1);
        count++;
    }
    return count;
};

console.log(hammingWeight(9));