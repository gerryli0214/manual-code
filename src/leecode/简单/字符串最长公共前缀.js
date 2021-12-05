/**
 * @description 最长公共前缀
 * @param {string[]} strs
 * @returns {string}
 */
 function longCommonPrefix (strs) {
    if (strs.length === 0) return ''
    let minStr = strs[0]
    // 获取最小长度字符串，作为起始字符串
    for (let index = 0; index < strs.length; index++) {
        const element = strs[index];
        if (element.length < minStr.length) minStr = element
    }
    let commonStr = ''
    for (let i = 0; i < minStr.length; i++) {
        let meter = minStr[i]
        let isCommon = true
        for (let j = 0; j < strs.length; j++) {
            let str = strs[j]
            if (str[i] !== meter) {
                isCommon = false
                break
            }
        }
        if (isCommon) {
            commonStr += meter
        } else {
            break
        }
    }
    return commonStr
}