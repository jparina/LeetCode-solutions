var mergeTwoLists = function(list1, list2) {
  let mergedHead = ListNode
  let mergedCurrent = mergedHead
  if (!list1 && !list2) {
      return list1
  }
  while (list1 && list2) {
      if (list1.val < list2.val) {
          mergedCurrent.next = list1
          list1 = list1.next
      }
      else {
          mergedCurrent.next = list2
          list2 = list2.next
      }
      mergedCurrent = mergedCurrent.next
  }
  
  if (list1) {
      mergedCurrent.next = list1
  }
  if (list2) {
      mergedCurrent.next = list2
  }
  return mergedHead.next
};

