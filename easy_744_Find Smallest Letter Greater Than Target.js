/* 

https://leetcode.com/problems/find-smallest-letter-greater-than-target/
문제 easy 744 Find Smallest Letter Greater Than Target


내림차순으로 정렬된 문자 배열과 문자 대상이 제공됩니다.
문자에는 적어도 두 개의 다른 문자가 있습니다.
사전순으로 target보다 큰 문자의 가장 작은 문자를 반환합니다.
이러한 문자가 존재하지 않는 경우 첫 번째 문자를 문자로 반환합니다. 


exam 1:
  Input: letters = ["c","f","j"], target = "a"
  Output: "c"
  Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

exam 2:
  Input: letters = ["c","f","j"], target = "c"
  Output: "f"
  Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

exam3:
  Input: letters = ["x","x","y","y"], target = "z"
  Output: "x"
  Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0]

제약:
  2 <= letters.length <= 104
  letters[i] is a lowercase English letter.
  letters is sorted in non-decreasing order.
  letters contains at least two different characters.
  target is a lowercase English letter.

// topic
// array / binary search

*/

// 탐색 - 이미 정렬되어있는 문자배열 때문에 바로 비교가능
// for loof 연산자로 target과 비교 - 클 경우 letters[i] 반환
// return이 없다면 첫 문자인 letter[0] 반환

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target) return letters[i];
  }

  return letters[0];
};

// 알고보니 바이너리 서치(이진 탐색 기초문제였다) O(log N)
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  const n = letters.length;

  //handle case for out of array
  if (target < letters[0]) return letters[0];
  if (target >= letters[n - 1]) return letters[0];

  //simple binary search to find the character
  let low = 0,
    high = n - 1,
    mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (target < letters[mid] && target >= letters[mid - 1]) {
      return letters[mid];
    }
    if (target >= letters[mid]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
};

// 더 빠른 솔루션 원할경우 O(N)
var nextGreatestLetter = function (letters, target) {
  return letters.find((c) => c > target) || letters[0];
};
