// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

var majorityElement = function (nums) {
  // 오름차순으로 sort 해준 후, 배열의 중간값이 majority 값이 된다.
  nums.sort((a, b) => a - b); //오름차순으로 정렬
  return nums[Math.floor(nums.length / 2)];
};
