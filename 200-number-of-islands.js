/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || !grid.length || !grid[0].length) return 0;

    let count = 0;
    const rowCount = grid.length;
    const colCount = grid[0].length;

    let clear = function(row, col) {
        if (row < 0 || row >= rowCount || col < 0 || col >= colCount) return;

        if (grid[row][col] === '1') {
            grid[row][col] = '0';
            clear(row - 1, col);
            clear(row + 1, col);
            clear(row, col - 1);
            clear(row, col + 1);
        }
    };

    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            if (grid[i][j] === '1') {
                count++;
                clear(i, j);
            }
        }
    }

    return count;
};

const test1 = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
const test2 = [["1","1","1"],["0","1","0"],["1","1","1"]];
console.log(numIslands(test1), 1);
console.log(numIslands(test2), 1);