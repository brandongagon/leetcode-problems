/*
 Best time to buy and sell a stock
*/

function maxProfit(prices) {
  let profit = 0;
  let min = prices[0];

  for (let i=0;i<prices.length;i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }
  return profit;
}