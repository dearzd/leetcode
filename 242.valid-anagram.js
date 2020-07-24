/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let countMap = {};
    const charsS = s.split('');
    const charsT = t.split('');
    for (let i = 0; i < charsS.length; i++) {
        countMap[charsS[i]] = countMap[charsS[i]] ? countMap[charsS[i]] + 1 : 1;
        countMap[charsT[i]] = countMap[charsT[i]] ? countMap[charsT[i]] - 1 : -1;
    }
    for (let i in countMap) {
        if (countMap[i] < 0) {
            return false;
        }
    }
    return true;
};
console.log(isAnagram("anagram", "nagaram"));


// 1. first sort
// 2. compare each array element
var isAnagram2 = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const arr1 = s.split('').sort();
    const arr2 = t.split('').sort();
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};