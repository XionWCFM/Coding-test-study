// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Input: nums = [2,2,1]
// Output: 1
// Input: nums = [4,1,2,1,2]
// Output: 4

var singleNumber = function (nums) {
  let uniqNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    uniqNum = uniqNum ^ nums[i];
    //XOR: a XOR b 의 결과가 c일 때, (a, b, c)가 한 쌍이라고 본다. 셋 중 아무거나 두개를 골라 XOR 연산을 실행하면 결과는 나머지 하나가 나온다.
  }
  return uniqNum;
};
