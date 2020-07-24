/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let result = [];
    let code = null;
    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            result.push(String.fromCharCode(code + 32));
        } else {
            result.push(str[i]);
        }
    }
    return result.join('');
};

console.log(toLowerCase('Hello'));