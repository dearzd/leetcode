/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    let isNext = (a, b) => {
        let diff = 0;
        for (let i = 0; i < a.length; i ++) {
            if (a[i] !== b[i]) {
                diff++;
            }
            if (diff > 1) {
                return false;
            }
        }
        return diff === 1;
    };

    let count = Infinity;
    let dfs = (current, sequence) => {
        if (sequence.length >= count) return;
        if (current === end) {
            count = sequence.length;
            return;
        }
        for (let i = 0; i < bank.length; i++) {
            if (isNext(current, bank[i]) && sequence.indexOf(i) === -1) {
                sequence.push(i);
                dfs(bank[i], sequence);
                sequence.pop();
            }
        }
    };

    dfs(start, []);

    return count === Infinity ? -1 : count;
};

const start = 'AACCGGTT';
const end = 'AAACGGTA';
const bank = ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'];
console.log(minMutation(start, end, bank), 2);

console.log(minMutation("AACCGGTT", "AAACGGTA", ["AACCGATT","AACCGATA","AAACGATA","AAACGGTA"]), 4);
