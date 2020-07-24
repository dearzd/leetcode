/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // if 0, dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    // if 1, dp[i][j] = 0
    const rowCount = obstacleGrid.length;
    const colCount = obstacleGrid[0].length;

    // If first cell and last cell is an obstacle, return 0
    if (obstacleGrid[0][0] === 1 || obstacleGrid[rowCount - 1][colCount - 1] === 1) return 0;

    let dp = [];

    // Iteratively set first row
    for (let col = 0; col < colCount; col++) {
        dp[col] = (col > 0 && dp[col - 1] === 0) || obstacleGrid[0][col] === 1 ? 0 : 1;
    }

    for (let row = 1; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
            if (obstacleGrid[row][col] === 1) {
                dp[col] = 0;
            } else {
                dp[col] += dp[col - 1] || 0;
            }
        }
    }

    return dp[colCount - 1];
};

var uniquePathsWithObstacles_first = function(obstacleGrid) {
    // if 0, dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    // if 1, dp[i][j] = 0
    const rowCount = obstacleGrid.length;
    const colCount = obstacleGrid[0].length;

    // If first cell and last cell is an obstacle, return 0
    if (obstacleGrid[0][0] === 1 || obstacleGrid[rowCount - 1][colCount - 1] === 1) return 0;

    let dp = [];

    // Iteratively set first col
    for (let row = 0; row < rowCount; row++) {
        dp[row] = new Array(colCount);
        dp[row][0] = (row > 0 && dp[row - 1][0] === 0) || obstacleGrid[row][0] === 1 ? 0 : 1;
    }

    // Iteratively set first row
    for (let col = 0; col < colCount; col++) {
        dp[0][col] = (col > 0 && dp[0][col - 1] === 0) || obstacleGrid[0][col] === 1 ? 0 : 1;
    }

    // Go through
    for (let row = 1; row < rowCount; row++) {
        for (let col = 1; col < colCount; col++) {
            dp[row][col] = obstacleGrid[row][col] === 1 ? 0 : dp[row - 1][col] + dp[row][col - 1];
        }
    }

    return dp[rowCount - 1][colCount - 1];
};

var uniquePathsWithObstacles_first = function(obstacleGrid) {
    let cache = [];
    const rowCount = obstacleGrid.length;
    const colCount = obstacleGrid[0].length;

    let maxPath = function (row, col) {
        if (row < 0 || col < 0) return 0;
        if (row === 0 && col === 0) {
            if (obstacleGrid[rowCount - 1][colCount - 1] === 1) {
                return 0;
            } else {
                return 1;
            }
        }

        if (!cache[`${row},${col}`]) {
            if (obstacleGrid[rowCount - row - 1][colCount - col - 1] === 1) {
                cache[`${row},${col}`] = 0;
            } else {
                cache[`${row},${col}`] = maxPath(row - 1, col) + maxPath(row, col - 1);
            }
        }

        return cache[`${row},${col}`];
    };

    return maxPath(rowCount - 1, colCount - 1);
};


const grid = [
    [0,0,0],
    [0,1,0],
    [0,0,0]
];

console.log(uniquePathsWithObstacles(grid));
console.log(uniquePathsWithObstacles([[1, 0]]));
console.log(uniquePathsWithObstacles([[0, 1]]));
console.log(uniquePathsWithObstacles([[0], [1]]));
console.log(uniquePathsWithObstacles([[0, 0], [1, 0]]));
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]));