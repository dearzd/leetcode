/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let gIndex = 0;
    let sIndex = 0;

    while(gIndex < g.length && sIndex < s.length) {
        if (g[gIndex] <= s[sIndex]) {
            gIndex++;
        }
        sIndex++;
    }

    return gIndex;
};

console.log(findContentChildren([1,2,3], [1,1]), 1);
console.log(findContentChildren([1,2], [1,2,3]), 2);
console.log(findContentChildren([10,9,8,7], [5,6,7,8]), 2);