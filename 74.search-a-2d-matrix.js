/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || !matrix.length || !matrix[0].length) {
        return false;
    }

    const rowCount = matrix.length;
    const colCount = matrix[0].length;
    let left = 0;
    let right = rowCount * colCount - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const row = Math.floor(mid / colCount);
        const col = mid % colCount;

        if (matrix[row][col] === target) {
            return true;
        }

        if (matrix[row][col] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};

var searchMatrix_first = function(matrix, target) {
    const row = searchRow(matrix, target);

    if (row !== -1) {
        const col = searchCol(matrix[row], target);
        return col !== -1;
    }

    return false;
};

function searchRow(matrix, target) {
    let left = 0;
    let right = matrix.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const row = matrix[mid];
        if (target >= row[0] && target <= row[row.length - 1]) {
            return mid;
        }
        if (target < row[0]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

function searchCol(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (target === nums[mid]) return mid;
        if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

const matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
];

console.log(searchMatrix(matrix, 3));
console.log(searchMatrix(matrix, 13));
console.log(searchMatrix([[1]], 2));
console.log(searchMatrix([[1, 1]], 2));
console.log(searchMatrix([[]], 0));