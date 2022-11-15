/* 

https://leetcode.com/problems/first-bad-version/
문제 easy 278 First Bad Version


당신은 제품 관리자이며 현재 새 제품을 개발하는 팀을 이끌고 있습니다.
안타깝게도 최신 버전의 제품은 품질 검사에 실패했습니다.
각 버전은 이전 버전을 기반으로 개발되기 때문에 나쁜 버전 이후의 모든 버전도 나쁜 것입니다.
n개의 버전 [1, 2, ..., n]이 있고 첫 번째 잘못된 버전을 찾고자 한다고 가정합니다.
버전이 나쁜지 여부를 반환하는 API bool isBadVersion(version)이 제공됩니다.
첫 번째 잘못된 버전을 찾는 기능을 구현합니다.API에 대한 호출 수를 최소화해야 합니다.


exam 1:
  Input: n = 5, bad = 4
  Output: 4
  Explanation:
  call isBadVersion(3) -> false
  call isBadVersion(5) -> true
  call isBadVersion(4) -> true
  Then 4 is the first bad version.

exam 2:
  Input: n = 1, bad = 1
  Output: 1


제약:
  1 <= bad <= n <= 231 - 1

// topic
// binary search / interactive

*/

// 선형 탐색시 overflow
// 이진 탐색을 활용


/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let oldVer = 1;
    let newVer = n;
    let checkVer;
    while (oldVer <= newVer) {
      checkVer = oldVer + Math.floor((newVer - oldVer) / 2);
      if (isBadVersion(checkVer)) {
        // newVer = checkVer;
        if (isBadVersion(checkVer - 1)) newVer = checkVer - 1;
        else return checkVer;
      } else {
        oldVer = checkVer + 1;
      }
    }
  };
};
