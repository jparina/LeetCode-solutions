var coinChange = function(coins, amount) {
  let descending = coins.sort(function(a, b) {return b - a})
  let totalCoins = 0
  for (let i = 0; i < descending.length; i++) {
      if (amount >= descending[i]) {
          totalCoins += Math.floor(amount / descending[i])
          amount -= (Math.floor(amount / descending[i]) * descending[i])
      }
      else {
          continue
      }
  }
  if (amount === 0) {
      return totalCoins
  }
  else {
      return -1
  }
};