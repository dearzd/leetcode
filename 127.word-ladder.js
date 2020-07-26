/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let asset = new Set(wordList);
    if (!asset.has(endWord)) {
        return 0;
    }

    asset.delete(beginWord);
    asset.delete(endWord);

    let beginSet = new Set([beginWord]);
    let endSet = new Set([endWord]);
    let len = 1;

    while (beginSet.size && endSet.size) {
        if (beginSet.size > endSet.size) {
            let temp = beginSet;
            beginSet = endSet;
            endSet = temp;
        }

        let temp = new Set();
        for (let current of beginSet) {

            for (let j = 0; j < current.length; j++) {
                let before = current.substring(0, j);
                let after = current.substring(j + 1, current.length);

                for (let k = 97; k <= 122; k++) {
                    let next = before + String.fromCharCode(k) + after;
                    if (next === current) {
                        continue;
                    }
                    if (endSet.has(next)) {
                        return len + 1;
                    }
                    if (asset.has(next)) {
                        temp.add(next);
                        asset.delete(next);
                    }
                }
            }
        }
        beginSet = temp;
        len++;
    }

    return 0;
};

var ladderLength_third = function(beginWord, endWord, wordList) {
    let asset = new Set(wordList);

    let queue = [beginWord];
    let len = 1;
    let visited = new Set();

    while (queue.length) {
        let temp = [];
        for (let i = 0; i < queue.length; i++) {
            let current = queue[i];
            for (let i = 0; i < current.length; i++) {
                for (let j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
                    let newWord = current.split('');
                    newWord[i] = String.fromCharCode(j);
                    newWord = newWord.join('');
                    if (asset.has(newWord) && !visited.has(newWord)) {
                        if (newWord === endWord) {
                            return len + 1;
                        }
                        temp.push(newWord);
                        visited.add(newWord);
                    }
                }
            }
        }
        queue = temp;
        len += 1;
    }

    return 0;
}

var ladderLength_second = function(beginWord, endWord, wordList) {
    let isNext = (strA, strB) => {
        let differentCount = 0;
        for (let i = 0; i < strA.length; i++) {
            if (strA[i] !== strB[i]) differentCount++;
            if (differentCount > 1) return false;
        }
        return differentCount === 1;
    };

    let queue = [{
        word: beginWord,
        length: 1
    }];
    let visited = new Set();

    while (queue.length) {
        let current = queue.shift();
        for (let i = 0; i < wordList.length; i++) {
            if (isNext(current.word, wordList[i]) && !visited.has(i)) {
                if (wordList[i] === endWord) {
                    return current.length + 1;
                }
                let next = {
                    word: wordList[i],
                    length: current.length + 1
                }
                queue.push(next);
                visited.add(i);
            }
        }
    }

    return 0;
};

var ladderLength_first = function(beginWord, endWord, wordList) {
    let count = Number.MAX_VALUE;

    let isNext = function(strA, strB) {
        let differentCount = 0;
        for (let i = 0; i < strA.length; i++) {
            if (strA.charAt(i) !== strB.charAt(i)) differentCount++;
            if (differentCount > 1) return false;
        }
        return differentCount === 1;
    };

    let dfs = function(str, sequence) {
        if (sequence.length > count) return;

        if (str === endWord) {
            count = sequence.length;
            return;
        }

        for (let i = 0; i < wordList.length; i ++) {
            if (isNext(str, wordList[i]) && sequence.indexOf(i) === -1) {
                sequence.push(i);
                dfs(wordList[i], sequence);
                sequence.pop();
            }
        }
    };

    dfs(beginWord, []);

    return count === Number.MAX_VALUE ? 0 : count + 1;
};

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]), 5);
console.log(ladderLength("teach", "place", ["peale","wilts","place","fetch","purer","pooch","peace","poach","berra","teach","rheum","peach"]), 4);
console.log(ladderLength(
    "qa",
    "sq",
    ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]
), 5);
console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log"]), 0);
console.log(ladderLength("ymain", "oecij", ["ymann","yycrj","oecij","ymcnj","yzcrj","yycij","xecij","yecij","ymanj","yzcnj","ymain"]), 10);