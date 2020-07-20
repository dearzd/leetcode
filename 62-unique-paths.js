/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // dp[i][j] = dp[i + 1][j] + dp[i][j + 1]

    let dp = new Array(n).fill(1);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }

    return dp[n - 1];

    /*let dp = [];
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n);
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];*/

    /*let cache = [];
    for (let i = 0; i < n; i++) {
        cache[i] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            cache[j] += cache[j - 1];
        }
    }

    return cache[n - 1];*/
};

var uniquePaths_first = function(m, n) {
    let cache = [];

    let maxPaths = function(i, j) {
        if (i === 1 || j === 1) return 1;
        if (i < 1 || j < 1) return 0;

        if (!cache[`${i},${j}`]) {
            cache[`${i},${j}`] = maxPaths(i - 1, j) + maxPaths(i, j - 1);
        }

        return cache[`${i},${j}`];
    };

    return maxPaths(m, n);

    /*if (m === 1 && n === 1) return 1;
    if (m < 1 || n < 1) return 0;
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);*/
};

console.log(uniquePaths(3, 2), 3);
console.log(uniquePaths(7, 3), 28);