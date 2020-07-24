/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    // dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]
    let rowCount = grid.length;
    let colCount = grid[0].length;
    let dp = new Array(colCount);

    dp[colCount - 1] = grid[rowCount - 1][colCount - 1];

    for (let col = colCount - 2; col >= 0; col--) {
        dp[col] = grid[rowCount - 1][col] + dp[col + 1];
    }

    for (let row = rowCount - 2; row >= 0; row--) {
        dp[colCount - 1] += grid[row][colCount - 1];
        for (let col = colCount - 2; col >= 0; col--) {
            dp[col] = grid[row][col] + Math.min(dp[col], dp[col + 1]);
        }
    }

    return dp[0];
};

var minPathSum_second = function(grid) {
    // dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]
    const rowCount = grid.length;
    const colCount = grid[0].length;

    let dp = [];
    for (let i = rowCount - 1; i >= 0; i--) {
        for (let j = colCount - 1; j >= 0; j--) {
            if (i === rowCount - 1 && j === colCount - 1) {
                dp[j] = grid[i][j];
            } else if (i === rowCount - 1) {
                dp[j] = grid[i][j] + dp[j + 1];
            } else if (j === colCount - 1) {
                dp[j] = grid[i][j] + dp[j];
            } else {
                dp[j] = grid[i][j] + Math.min(dp[j], dp[j + 1]);
            }
        }
    }
    return dp[0];
};

var minPathSum_first = function(grid) {
    if (!grid || !grid[0] || !grid[0].length) return 0;

    const rowCount = grid.length;
    const colCount = grid[0].length;

    let cache = [];

    // init last col
    for (let i = rowCount - 1; i >= 0; i--) {
        cache[i] = new Array(colCount);
        cache[i][colCount - 1] = grid[i][colCount - 1] + (i < rowCount - 1 ? cache[i + 1][colCount - 1] : 0);
    }

    // init last row
    for (let j = colCount - 1; j >= 0; j--) {
        cache[rowCount - 1][j] = grid[rowCount - 1][j] + (j < rowCount - 1 ? cache[rowCount - 1][j + 1] : 0);
    }

    // bottom up
    for (let i = rowCount - 2; i >= 0; i--) {
        for (let j = colCount - 2; j >= 0; j--) {
            cache[i][j] = grid[i][j] + Math.min(cache[i + 1][j], cache[i][j + 1]);
        }
    }

    return cache[0][0];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]), 7);
console.log(minPathSum([[1,2],[5,6],[1,1]]), 8);