// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

// 输入：s = "Hello World"
// 输出：5
// 解释：最后一个单词是“World”，长度为5。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let len = 0
  let temp = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (temp !== 0) len = temp
      temp = 0
    } else {
      temp++
    }
  }
  if (temp !== 0) {
    len = temp
  }
  return len
}

let s =  "Hello World   "
console.log(lengthOfLastWord(s))