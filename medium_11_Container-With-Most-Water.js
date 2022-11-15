// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// height = [1,8,6,2,5,4,8,3,7]
var maxArea = function (height) {
  let ans = 0;
  i = 0;
  j = height.length - 1; // j = 9 - 1 = 8
  while (i < j) {
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i)); // (높이 * 넓이) 가장 큰 값을 ans로 업데이트 시켜준다.
    height[i] <= height[j] ? i++ : j--; // 가운데 값이 제일 큰 경우에는 i++만 계속 해줄수 없기에 이런 삼항연산식을 선언해준다.
  }
  return ans;
};

// case1: i = 0, j = 8 | Math.min(1, 7) * (8-0)) = 1 * 8 = 8
// case2: i = 1, j = 8 | Math.min(8, 7) * (8-1)) = 7 * 7 = 49
// case3: i = 2, j = 8 | Math.min(6, 7) * (8-2)) = 6 * 6 = 36
// case4: i = 3, j = 8 | Math.min(2, 7) * (8-3)) = 2 * 5 = 10
// case5: i = 4, j = 8 | Math.min(5, 7) * (8-4)) = 5 * 4 = 20
// case6: i = 5, j = 8 | Math.min(4, 7) * (8-5)) = 4 * 3 = 12
// case7: i = 6, j = 8 | Math.min(8, 7) * (8-6)) = 7 * 2 = 14
// case8: i = 7, j = 8 | Math.min(3, 7) * (8-7)) = 3 * 1 = 3
