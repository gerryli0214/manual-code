// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
// 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 请必须使用时间复杂度为 O(log n) 的算法。

// 输入: nums = [1,3,5,6], target = 5
// 输出: 2
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.length === 0) return 0
  let rangeUpIndex = nums.length
  let rangeDownIndex = 0
  let currentRangeIndex = Math.floor(nums.length / 2)
  let currentIndex = -1
  while (currentIndex === -1) {
    console.log(`currentRangeIndex: ${currentRangeIndex}`)
    if (nums[currentRangeIndex] === target) {
      currentIndex = currentRangeIndex
      break
    } else {
      if (target > nums[currentRangeIndex]) {
        rangeDownIndex = currentRangeIndex
      } else {
        rangeUpIndex = currentRangeIndex
      }
      if (rangeUpIndex - rangeDownIndex <= 1) {
        currentIndex = nums[rangeUpIndex] > target ? rangeDownIndex + 1 : rangeDownIndex
        break
      }
    }
  }
  return currentIndex
};

let  nums = [1,3,5,6], target = 2
console.log(searchInsert(nums, target))