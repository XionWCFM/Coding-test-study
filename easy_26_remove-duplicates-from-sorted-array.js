/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let indexCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[indexCounter] = nums[i];
      indexCounter++;
    }
  }
  return indexCounter;
};
// @lc code=end
