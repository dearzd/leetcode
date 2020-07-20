/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let max = 0;
    let stack = [-1];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (!stack.length) {
                stack.push(i);
            }
            max = Math.max(max, i - stack[stack.length - 1]);
        }
    }
    return max;
};

var longestValidParentheses_second = function(s) {
    let max = 0;
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(') {
            stack.push(i);
        } else {
            if (!stack.length) {
                stack.push(i);
            } else {
                if (s.charAt(stack[stack.length - 1]) === '(') {
                    stack.pop();
                } else {
                    stack.push(i);
                }
            }
        }
    }

    if (!stack.length) {
        max = s.length;
    } else {
        let top = s.length;
        let down;
        while (stack.length) {
            down = stack.pop();
            max = Math.max(max, top - down - 1);
            top = down;
        }
        max = Math.max(max, top);
    }

    return max;
};

var longestValidParentheses_first = function(s) {
    let max = 0;

    let isValid = function(str) {
        let stack = [];
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === '(') {
                stack.push('(');
            } else if (str.charAt(i) === ')') {
                if (!stack.length) {
                    return false;
                }
                stack.pop();
            }
        }
        return stack.length === 0;
    };

    let sub = '';
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            sub = s.substring(i, j + 1);
            if (sub.length > max && isValid(sub)) {
                max = sub.length;
            }
        }
    }

    return max;
};

console.log(longestValidParentheses(')()())'), 4);
console.log(longestValidParentheses(')()()'), 4);
console.log(longestValidParentheses(')((()))'), 6);
console.log(longestValidParentheses('(()'), 2);
console.log(longestValidParentheses('()'), 2);
console.log(longestValidParentheses('())'), 2);
console.log(longestValidParentheses('()()'), 4);