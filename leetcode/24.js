/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**两两交换链表中的节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  var next = head.next;
  head.next = swapPairs(next.next);
  next.next = head;
  return next;
};
