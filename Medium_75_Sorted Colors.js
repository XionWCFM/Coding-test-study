/* 
https://leetcode.com/problems/sort-colors/
문제 Medium 75 Sort Colors

빨간색, 흰색 또는 파란색으로 채색된 n개의 객체가 있는 배열 nums가 주어지면

동일한 색상의 객체가 인접하도록 해당 위치에서 정렬하고 색상은 빨간색, 흰색, 파란색으로 지정합니다.

정수 0, 1, 2를 사용하여 빨강, 흰색, 파랑을 각각 나타냅니다.

라이브러리의 정렬 기능을 사용하지 않고 이 문제를 해결해야 합니다.


exam 1 :
  Input: nums = [2,0,2,1,1,0]
  Output: [0,0,1,1,2,2]

exam 2 :
  Input: nums = [2,0,1]
  Output: [0,1,2]

제약 :
  n == nums.length
  1 <= n <= 300
  nums[i] is either 0, 1, or 2.

팔로우 업:
  일정한 추가 공간만 사용하는 one-pass 알고리즘을 생각해낼 수 있습니까?

*/

// [1, 0, 2, 1, 1, 2, 0]
// start point         end point
// 0일경우 start point과 바꾸고 start point +1 idx + 1
// 2일경우 end point와 바꾸고 end point - 1 idx는 이동 no (바꾼 end 숫자가 0이나 1일수도 있으니)
// 1일경우 일단 무시 idx 이동

// [1✔, 0, 2, 1, 1, 2, 0]  start=0, idx=0, end=6      ->  idx +1
// [1, 0✔, 2, 1, 1, 2, 0]  start=0, idx=1, end=6      ->  start +1, idx +1
// [0, 1, 2✔, 1, 1, 2, 0]  start=1, idx=2, end=6      ->  end - 1
// [0, 1, 0✔, 1, 1, 2, 2]  start=1, idx=2, end=5      ->  idx +1
// [0, 0, 1, 1✔, 1, 2, 2]  start=1, idx=3, end=5      ->  idx +1
// [0, 0, 1, 1, 1✔, 2, 2]  start=1, idx=3, end=5      ->  idx +1
// [0, 0, 1, 1, 1, 2✔, 2]  start=1, idx=3, end=5      ->  idx +1





var sortColors = function (nums) {
  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

  let start = 0;
  let idx = 0;
  let end = nums.length - 1;

  while (idx <= end) {
    if (nums[idx] === 0) {
      swap(idx, start);
      start++;
      idx++;
    } else if (nums[idx] == 2) {
      swap(idx, end);
      end--;
    } else idx++;
  }
};
