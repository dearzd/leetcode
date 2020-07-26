/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // dp[i] = dp[i - 2] + dp[i - 1], if s[i] !== 0 && s[i - 1] !== 0 && s[i - 1] + s[i] >= 11 and <= 26
    // dp[i] = 0, if s[i] == 0 && (s[i - 1] == 0 or s[i - 1] > 2),
    // dp[i] = dp[i - 1], else;

    if (!s || !s.length || s[0] === '0') {
        return 0;
    }

    // let dp = [1, 1];
    let prev = 1;
    let current = 1;
    let next = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '0' && (s[i - 1] === '0' || s[i - 1] > '2')) {
            return 0;
        } else if (
            s[i] !== '0' &&
            (i === s.length - 1 || s[i + 1] !== '0') &&
            (s[i - 1] === '1' || (s[i - 1] === '2' && (s[i] >= '1' && s[i] <= '6')))
        ) {
            // dp[i + 1] = dp[i - 1] + dp[i];
            next = prev + current;
        } else {
            // dp[i + 1] = dp[i];
            next = current;
        }
        prev = current;
        current = next;
    }

    // return dp[s.length];
    return next;
}

var numDecodings_fourth = function(s) {
    // if s[i] != 0, and s[i - 1] + s[i] >= 1 <= 26, dp[i] = dp[i - 1] + dp[i - 2]
    // if s[i] !==0, else dp[i] = dp[i - 1]
    // if s[i] == 0, if s[i - 1] == 1 or == 2, dp[i] = dp[i - 1]
    // if s[i] == 0, else dp[i] = 0

    if (s[0] === '0') {
        return 0;
    }

    // let dp = [1, 1];
    let prev = 1;
    let current = 1;
    let next = null;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '0') {
            if (s[i - 1] === '1' || s[i - 1] === '2') {
                // dp[i + 1] = dp[i - 1];
                next = prev;
            } else {
                return 0;
            }
        } else if (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] >= '1' && s[i] <= '6')) {
            // dp[i + 1] = dp[i] + dp[i - 1];
            next = prev + current;
        } else {
            // dp[i + 1] = dp[i];
            next = current;
        }
        prev = current;
        current = next;
    }

    // return dp[s.length];
    return current;
}

var numDecodings_third = function(s) {
    // dp[i] = dp[i - 1] + dp[i - 2], if s[i - 1] + s[i] >= 1 and <= 26
    // dp[i] = dp[i - 1], else
    if (s[0] === '0') {
        return 0;
    }

    // let dp = [1, 1];
    let prev = 1;
    let current = 1;
    let next = null;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '0') {
            if (s[i + 1] === '0') {
                return 0;
            } else if (s[i - 1] > '2') {
                return 0;
            }
        }

        if (
            s[i] !== '0' &&
            s[i + 1] !== '0' &&
            (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] >= 1 && s[i] <= 6))
        ) {
            // dp[i + 1] = dp[i] + dp[i - 1];
            next = prev + current;
        } else {
            next = current;
            // dp[i + 1] = dp[i];
        }
        prev = current;
        current = next;
    }

    // return dp[s.length];
    return current;
}

var numDecodings_second = function(s) {
    // dp[i] = dp[i - 1] + dp[i - 2], if s[i - 1] + s[i] >=1 and  <= 26
    // dp[i] = dp[i - 1]

    if (s[0] === '0') {
        return 0;
    }

    // let dp = [1, 1];
    let prev = 1;
    let current = 1;
    let next = null;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '0') {
            if (s[i - 1] === '1' || s[i - 1] === '2') {
                // dp[i + 1] = dp[i];
                next = current;
            } else {
                return 0;
            }
        } else if (s[i - 1] === '0' || s[i + 1] === '0') {
            // dp[i + 1] = dp[i];
            next = current;
        } else if (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] >= '1' && s[i] <= '6')) {
            // dp[i + 1] = dp[i] + dp[i - 1];
            next = prev + current;
        } else {
            // dp[i + 1] = dp[i];
            next = current;
        }
        prev = current;
        current = next;
    }

    // return dp[s.length];
    return current;
};

var numDecodings_first = function(s) {
    // dp[i] = dp[i - 1] + dp[i - 2], if s[i] + s[i - 1] < 26,
    // dp[i] = dp[i - 1], else

    if (!s || !s.length || Number(s[0]) === 0) return 0;

    let dp = [1, 1];

    for (let i = 1; i < s.length; i++) {
        if (Number(s[i]) === 0) {
            if (i < s.length - 1 && Number(s[i + 1]) === 0) {
                return 0;
            }
            if (s[i - 1] + s[i] > 26) {
                return 0;
            }
        }

        if (
            s[i - 1] > 0 &&
            s[i] > 0 &&
            (i === s.length - 1 || s[i + 1] > 0) &&
            s[i - 1] + s[i] <= 26
        ) {
            dp[i + 1] = dp[i] + dp[i - 1];
        } else {
            dp[i + 1] = dp[i];
        }
    }

    // console.log(s, dp);
    return dp[s.length];
};

console.log(numDecodings('12'), 2);
console.log(numDecodings('17'), 2);
console.log(numDecodings('27'), 1);
console.log(numDecodings('122'), 3);
console.log(numDecodings('226'), 3);
console.log(numDecodings('0'), 0);
console.log(numDecodings('1'), 1);
console.log(numDecodings('012'), 0);
console.log(numDecodings('100'), 0);
console.log(numDecodings('101'), 1);
console.log(numDecodings('301'), 0);
console.log(numDecodings('230'), 0);
console.log(numDecodings('1212'), 5);
console.log(numDecodings('110'), 1);
console.log(numDecodings('227'), 2);

