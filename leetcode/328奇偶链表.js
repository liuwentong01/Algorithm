/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (head == null || head.next == null || head.next.next == null) return head;
  var p1 = head,
    p2 = head.next,
    head2 = p2;
  while (p2 != null && p2.next != null) {
    p1.next = p1.next.next;
    p1 = p1.next;
    p2.next = p2.next.next;
    p2 = p2.next;
  }
  p1.next = head2;
  return head;
};
