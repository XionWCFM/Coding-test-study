/* 
https://leetcode.com/problems/happy-number/
문제 easy 202 Happy Number

숫자 n이 행복한지 확인하는 알고리즘을 작성하십시오.

행복한 숫자는 다음 프로세스에 의해 정의된 숫자입니다.

임의의 양의 정수로 시작하여 숫자를 해당 자릿수 제곱의 합으로 바꿉니다.
숫자가 1이 될 때까지 프로세스를 반복하거나(그 값이 머무를 위치) 1을 포함하지 않는 주기에서 끝없이 반복합니다.
이 프로세스가 1로 끝나는 숫자는 행복합니다.
n이 행복한 숫자이면 true를 반환하고 그렇지 않으면 false를 반환합니다.

exam 1 :
  Input: n = 19
  Output: true
  Explanation:
  1² + 9² = 82
  8² + 2² = 68
  6² + 8² = 100
  1² + 0² + 0² = 1

exam 2 :
  Input: n = 2
  Output: false

제약 :
  1 <= n <= 231 - 1

*/

// n = 2
// 2² = 4
// 4² = 16
// 1² + 6² = 37
// 3² + 7² = 58
// 5² + 8² = 89
// 8² + 9² = 145
// 1² + 4² + 5² = 42
// 4² + 2² = 20
// 2² + 0² = 2



// 1번째 방법 set()

// 중복된 sum 값이 나오면 무한loof가 되는 것을 확인 할 수 있음 이를 위해 set() 객체를 활용
// 마지막자리 숫자 자르기
// 맨 뒤의 자리만 잘라내서 확인하면서 0이 될때까지 반복
// set.has 으로 확인하기 없으면 set.add
// 중복되면 false


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const previouslySeenSum = new Set();

  while (n !== 1) {
    let currentSum = 0;
    while (n > 0) {
      currentSum += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }
    if (!previouslySeenSum.has(currentSum)) {
      previouslySeenSum.add(currentSum);
      n = currentSum;
    } else {
      return false;
    }
  }
  return true;
};


// 2번째 방법 주기 알고리즘
// Floyd's Cycle-Finding Algorithm

var isHappy = function (n) {
  function getNext(n) {
    return (n + "").split("").reduce((a, c) => Number(a) + Number(c * c), 0);
  }

  let slow = n;
  let fast = getNext(n);
  while (fast != 1 && slow != fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast == 1;
};


// 3번째 방법 하드코딩 + set()

const squares = { 0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81 };

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  /**
   * Not necessary I think, but the OJ algorithm appears
   * to return false for non-positive numbers also.
   */
  if (n < 1) return false;

  /**
   * This set will store numbers as we create them.
   * If we create a number already in the set, we
   * assume we're in an infinite cycle.
   */
  let set = new Set();

  while (!set.has(n)) {
    set.add(n);
    let s = n.toString();
    n = 0;
    for (let i = 0; i < s.length; ++i) {
      n += squares[s[i]];
    }
    if (n == 1) return true;
  }

  return false;
};
