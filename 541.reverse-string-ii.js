/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let strArr = s.split('');

    let reverse = (start, end) => {
        let temp = null;
        while (start < end) {
            temp = strArr[start];
            strArr[start] = strArr[end];
            strArr[end] = temp;
            start++;
            end--;
        }
    };

    for (let i = 0; i < s.length; i += 2 * k) {
        reverse(i, i + k - 1); // The undefined caused by i + k - 1 > s.length - 1 will be removed in join function
    }

    return strArr.join('');
};

var reverseStr_second = function(s, k) {
    let result = [];

    let getStr = (start, end, isReverse) => {
        if (isReverse) {
            for (let i = end - 1; i >= start; i--) {
                result.push(s[i]);
            }
        } else {
            for (let i = start; i < end; i++) {
                result.push(s[i]);
            }
        }
    };

    for (let i = 0; i < s.length; i += 2 * k) {
        getStr(i, i + k, true);
        getStr(i + k, i + 2 * k, false);
    }

    return result.join('');

    /*let result = '';
    for (let i = 0; i < s.length; i += 2 * k) {
        result += s.substring(i, i + k).split('').reverse().join('');
        result += s.substring(i + k, i + 2 * k);
    }
    return result;*/
};


var reverseStr_first = function(s, k) {
    let strArr = s.split('');

    function reverse(start, end) {
        let temp = null;
        while (start < end) {
            temp = strArr[start];
            strArr[start] = strArr[end];
            strArr[end] = temp;
            start++;
            end--;
        }
    }

    for (let i = 0; i < s.length; i += 2 * k) {
        reverse(i, i + k - 1);
    }

    return strArr.join('');
};

// console.log(reverseStr('abcdefg', 2));
console.log(reverseStr('abcdefghij', 4));