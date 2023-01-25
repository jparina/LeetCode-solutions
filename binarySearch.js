var search = function(nums, target) {
  
  let last = nums.length - 1
  let start = 0

  if (nums.length === 0) return -1
  
  while (start <= last) {
    let mid = Math.floor((last + start) / 2)
    if (target === nums[mid]) {
      return mid
    }
    if (target < nums[mid]) {
      last = mid - 1
    }
    if (target > nums[mid]) {
      start = mid + 1
    }
  }

  return -1
};



