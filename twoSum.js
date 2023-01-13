var twoSum = function(nums, target) {
  let hashmap = {}
  for (let i = 0; i < nums.length; i++) {
    hashmap[nums[i]] = i
  }
  for (let i = 0; i < nums.length; i++) {
    // let numToFind = target - nums[i]
    if ((target - nums[i]) in hashmap && i !== hashmap[(target - nums[i])]) {
      return [i, hashmap[numToFind]]
    }
  }
}

