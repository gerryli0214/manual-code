/**
 * @description 罗马数字转整数
 * I --> 1
 * V --> 5
 * X --> 10
 * L --> 50
 * C --> 100
 * D --> 500
 * M --> 1000
 * 特殊组合：
 * IV --> 4
 * IX --> 9
 * XL --> 40
 * XC --> 90
 * CD --> 400
 * CM --< 900
 * @param {string} s
 * @returns {number}
 */
 function romanToInt (s) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0
    let currentItem = ''
    for (let index = 0; index < s.length; index++) {
        const element = s[index]
        result += romanMap[element]
        if (currentItem && currentItem < romanMap[element]) {
            result -= currentItem * 2
        }
        currentItem = romanMap[element]
    }
    return result
}