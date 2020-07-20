/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [];
    let cols = new Set();
    let slashes = new Set();
    let backSlashes = new Set();

    let doTry = function(row, solution) {
        if (row === n) {
            result.push(solution);
            return;
        }

        for (let col = 0; col < n; col++) {
            // terminator
            if (!isValid(row, col)) continue;

            // current
            cols.add(col);
            slashes.add(row + col);
            backSlashes.add(row - col);

            // drill down
            doTry(row + 1, solution.concat(col));

            // restore
            cols.delete(col);
            slashes.delete(row + col);
            backSlashes.delete(row - col);
        }
    };

    let isValid = function(row, col) {
        return !cols.has(col) && !slashes.has(row + col) && !backSlashes.has(row - col);
    };

    doTry(0, []);

    return formatResult(result);
};

function formatResult(result) {
    return result.map(solution => {
       return solution.map(col => {
           return 'Q'.padStart(col + 1, '.').padEnd(solution.length, '.');
       });
    });
}

console.log(solveNQueens(4));