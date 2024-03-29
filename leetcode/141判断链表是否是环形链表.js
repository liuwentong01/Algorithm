/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head == null) return false;
  var fast = head;
  var slow = head;
  var flag = 0;
  while (fast.next != null && fast.next.next != null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      fast = head;
      flag++;
      if (flag == 2) {
        return true;
      }
    }
  }
  return false;
};
