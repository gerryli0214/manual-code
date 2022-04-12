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
  let rangeDownIndex = Math.floor(nums.length / 2)
  let currentIndex = -1
  while (currentIndex !== -1) {
    if (nums[rangeDownIndex] === target)
  }
};