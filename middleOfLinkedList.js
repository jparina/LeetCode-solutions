/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let count = 0
  let current = head
  while (current) {
      count += 1
      current = current.next
  }
  count = Math.floor(count/2)
  current = head
  while (count >= 0) {
      if (count === 0) {
          return current
      }
      else {
          count--
          current = current.next
      }
  }
};