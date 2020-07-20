/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits || !digits.length) return [];

    let map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    let result = [''];

    for (let i = 0; i < digits.length; i++) {
        const candidate = map[digits[i]];
        while (result[0].length === i) {
            const str = result.shift();
            candidate.forEach(c => result.push(str + c));
        }
    }

    return result;
};

var letterCombinations_first = function(digits) {
    if (!digits || !digits.length) return [];

    let map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    let result = [];

    const dfs = function(str, level) {
        if (str.length === digits.length) {
            result.push(str);
            return;
        }
        const candidate = map[digits[level]];
        for (let i = 0; i < candidate.length; i++) {
            dfs(str + candidate[i], level + 1);
        }
    };

    dfs('', 0);

    return result;
};

console.log(letterCombinations('23'));
