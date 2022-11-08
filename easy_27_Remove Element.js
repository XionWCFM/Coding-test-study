/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};


/* 
var removeElement = function (nums, val) {

  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[cnt] = nums[i];
      cnt++;
    }
  }
  return nums.length;
};
 */