var isValid = function (s) {
    if (s.length % 2 != 0) return false;
    s = s.split('');
    let stack = [];
    let obj = { '(': ')', '{': '}', '[': ']' };

    for (let i of s) {
        if (i == '(' || i == '{' || i == '[') {
            stack.push(obj[i]);
        }
        else if (stack.pop() != i) {
            return false;
        }
    }

    if (stack.length == 0) return true;
    return false;
}

console.log(isValid("(]"))