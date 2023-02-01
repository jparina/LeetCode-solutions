var majorityElement = function(nums) {
  let count = 0
  let current = null
  for (let i = 0; i < nums.length; i++) {
      if (count === 0) {
          current = nums[i]
          count += 1
      }
      else if (nums[i] !== current) {
          count -= 1
      }
      else if (nums[i] === current) {
          count += 1
      }
      
  }
  return current
};