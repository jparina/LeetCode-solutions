var maxSubArray = function(nums) {
  let maximumSum = nums[0]
  let currentSum = maximumSum
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i]
    }
    else {
      currentSum += nums[i]
    }
    if (currentSum > maximumSum) {
      maximumSum = currentSum
    }
  }
return maximumSum
};