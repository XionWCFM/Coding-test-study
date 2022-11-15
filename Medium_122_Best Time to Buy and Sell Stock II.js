/*

https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
문제 Medium 122 Best Time to Buy and Sell Stock II


price[i]가 i번째 날의 주어진 주식 가격인 정수 배열 price가 주어집니다.
매일 주식을 매수 및 / 또는 매도하기로 결정할 수 있습니다.
언제든지 최대 한 주식만 보유할 수 있습니다
단, 매수 후 당일 매도가 가능합니다.
달성할 수 있는 최대 이익을 찾아 반환합니다. 


exam1:
  Input: prices = [7,1,5,3,6,4]
  Output: 7
  Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
  Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
  Total profit is 4 + 3 = 7.

exam2:
  Input: prices = [1,2,3,4,5]
  Output: 4
  Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
  Total profit is 4.

exam3:
  Input: prices = [7,6,4,3,1]
  Output: 0
  Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

제약:
  1 <= prices.length <= 3 * 104
  0 <= prices[i] <= 104


// Topics
// array / Dynamic Programming (DP) / Greedy (탐욕 알고리즘)
*/

/* 
Greedy (탐욕 알고리즘)
현재 상황에서 취할 수 있는 가장 최적을 선택하는 알고리즘
이러한 선택은 지역(local)적으로는 최적이지만, 전체(global)적으로 봤을때 최적이라는 보장 없음
매우 근시안적인 방법을 이용하는 알고리즘

탐욕 알고리즘이 적용되려면?
탐욕스런 선택조건(Greedy choice property)과
최적 부분 구조조건(Optimal substructure)이라는 두가지 조건이 만족 

탐욕스런 선택조건은 앞의 선택이 이후의 선택에 영향을 주지 않음
최적 부분 구조 조건은 문제에 대한 최적해가 부분 문제에 대해서도 역시 최적의 해
*/


// 가장 높은 수익을 얻을 경우 ?
// 1. 모든 연속 거래에서 얻은 이익(단순 원패스 접근법)
// 2. 저점에 매수, 고점에 매도(피크, 밸리 접근법)

/* 

i날에 있을때
오늘과 어제의 가격을 찾아보자

어제가 더 저렴했다면:
  시간을 거슬러 올라가기
  매수
  미래로 여행하기
  매도

그렇지 않은 경우:
  그냥 다음 날을 기다리기

*/

var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
};



// bottom-up DP + recursion

var maxProfit = function (prices) {
  var trade = function (day) {
    if (day == 0) {
      // Hold on day_0 = buy at day_#0 = -prices[0]
      // Not hold on day_0 = do nothing = 0
      return [-prices[0], 0];
    }

    let [prevHold, prevNotHold] = trade(day - 1);

    let curHold = Math.max(prevHold, prevNotHold - prices[day]);

    let curNotHold = Math.max(prevNotHold, prevHold + prices[day]);

    return [curHold, curNotHold];
  };

  [, finalNotHold] = trade(prices.length - 1);

  // Max profit must come from notHold state finally.
  return finalNotHold;
};

