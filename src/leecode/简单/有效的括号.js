
/**
 * @description 有效括号
 * notice:
 * 利用栈先进先出特性，进行判断
 * @param {string} s
 * @returns {boolean}
 */
 function isValid (s) {
    const map = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    // 模拟栈操作
    const stack = []
    let flag = true
    for (let index = 0; index < s.length; index++) {
        // 如果是左侧括号，推入栈中
        if (map[s[index]]) {
           stack.push(s[index])
        } else {
            // 最近的一个括号
            let last = stack.pop()
            if (!last || map[last] !== s[i]) {
                flag = false
                break
            }
        }
    }
    if (stack.length > 0) flag = false
    return flag
}

console.log(isValid(']'))