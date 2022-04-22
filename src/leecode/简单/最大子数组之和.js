// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0]
  let temp = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (temp + nums[i] < nums[i]) {
      temp = nums[i]
    } else {
      temp += nums[i]
    }
    if (max < temp) {
      max = temp
    }
  }
  return max
};
let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))
