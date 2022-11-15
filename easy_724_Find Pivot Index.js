/* 

https://leetcode.com/problems/find-pivot-index/
문제 easy 724 Find Pivot Index


정수 배열 nums가 주어지면 이 배열의 피벗 인덱스를 계산합니다.

피벗 인덱스는 인덱스 왼쪽에 있는 모든 숫자의 합이 인덱스 오른쪽에 있는 모든 숫자의 합과 같은 인덱스입니다.

인덱스가 배열의 왼쪽 가장자리에 있으면 왼쪽에 요소가 없기 때문에 왼쪽 합계는 0입니다.

이는 어레이의 오른쪽 가장자리에도 적용됩니다.

가장 왼쪽의 피벗 인덱스를 반환합니다. 해당 인덱스가 없으면 -1을 반환합니다.


exam 1

  Input: nums = [1,7,3,6,5,6]
  Output: 3
  Explanation:
  The pivot index is 3.
  Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
  Right sum = nums[4] + nums[5] = 5 + 6 = 11

exam 2

  Input: nums = [1,2,3]
  Output: -1
  Explanation:
  문제 설명의 조건을 만족하는 인덱스가 없습니다.

exam 3

  Input: nums = [2,1,-1]
  Output: 0
  Explanation:
  The pivot index is 0.
  Left sum = 0 (no elements to the left of index 0)
  Right sum = nums[1] + nums[2] = 1 + -1 = 0


제약

  1 <= nums.length <= 104
  -1000 <= nums[i] <= 1000
*/

// pivot 인덱스 조건은 좌 우의 합이 같은 idx
// flow 1. 이를 확인하기 위해 전체 합을 구하기
// flow 2. 배열을 for loof로 탐색하며 누적된 왼쪽 값과, 해당 인덱스를 전체 요소의 합과의 차가 같을 경우, pivot 인덱스 이기때문에 해당 인덱스를 반환.
// flow 3. 아닐 경우 왼쪽 값 누적.
// flow 4. 위 조건을 모두 만족하지 않을경우 (for loof 가 다 돌때까지 return이 없는경우 -1 반환)

/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function (nums) {
  const total = nums.reduce((acc, num) => acc + num);
  let left = 0;

  for (let idx = 0; idx < nums.length; idx++) {
    if (left === total - left - nums[idx]) {
      return idx;
    } else {
      left += nums[idx];
    }
  }
  return -1;
};
