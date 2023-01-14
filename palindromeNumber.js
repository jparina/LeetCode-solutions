/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let xCopy = x
  let reversed = 0

  while (xCopy > 0) {
    reversed = reversed * 10 + (xCopy % 10)
    xCopy = ~~(xCopy / 10)
  }
  return reversed === x
}

console.log(isPalindrome(121212))

