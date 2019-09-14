/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**遍历法
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(head == null || head.next == null){
    return head;
  }
  var pre = head;
  var next = head.next;
  pre.next = null;
  while(next != null){
    var tmp = next.next;
    next.next = pre;
    pre = next;
    next = tmp;
  }
  return pre;
};

//递归法
