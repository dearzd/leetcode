/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1])
    let dp = triangle[triangle.length - 1].slice();
    for (let row = triangle.length - 2; row >= 0; row--) {
        for (let col = 0; col <= row; col++) {
            dp[col] = triangle[row][col] + Math.min(dp[col], dp[col + 1]);
        }
    }
    return dp[0];
};

var minimumTotal_third = function(triangle) {
    let cache = [];
    const levelCount = triangle.length;

    for (let i = 0; i < levelCount; i++) {
        cache[i] = new Array(triangle[i].length);
        cache[0][i] = triangle[levelCount - 1][i];
    }

    for (let level = 1; level < levelCount; level++) {
        const rowData = triangle[levelCount - level - 1];
        for (let col = 0; col < rowData.length; col++) {
            cache[level][col] = rowData[col] + Math.min(cache[level - 1][col], cache[level - 1][col + 1]);
        }
    }

    return cache[levelCount - 1][0];
};

var minimumTotal_second = function(triangle) {
    let cache = [];
    for (let i = 0; i < triangle.length; i++) {
        cache[i] = [];
    }

    let helper = function(level, col) {
        if (level >= triangle.length || col >= triangle[level].length) return 0;
        if (level === triangle.length) return triangle[col];

        if (!cache[level][col]) {
            let left = helper(level + 1, col);
            let right = helper(level + 1, col + 1);

            cache[level][col] = Math.min(left, right) + triangle[level][col];
        }

        return cache[level][col];
    };

    return helper(0, 0);
};


var minimumTotal_first = function(triangle) {
    let helper = function(level, col) {
        if (level >= triangle.length || col >= triangle[level].length) return 0;
        if (level === triangle.length) return triangle[col];

        let left = helper(level + 1, col);
        let right = helper(level + 1, col + 1);

        return Math.min(left, right) + triangle[level][col];
    };

    return helper(0, 0);
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]), 11);