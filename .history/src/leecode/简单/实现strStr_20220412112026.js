// 实现 strStr() 函数。
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。
// 如果不存在，则返回  -1 。
// 输入：haystack = "hello", needle = "ll"
// 输出：2
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for (let i = 0, len = haystack.length; i < len; i++) {
    if (haystack[i] === needle[0]) {
      let isValid = true
      for (let j = 1; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) {
          isValid = false
          break
        }
        
      }
    }
  }
};