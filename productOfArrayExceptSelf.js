var productExceptSelf = function(nums) {
  let answer = []
  let leftPass = 1
  let rightPass = 1
  for (let i = 0; i < nums.length; i++) {
      answer.push(leftPass)
      leftPass = leftPass * nums[i]
  }
  for (let i = nums.length - 1; i >= 0; i--) {
      answer[i] = answer[i] * rightPass
      rightPass = nums[i] * rightPass
  }
  return answer
};