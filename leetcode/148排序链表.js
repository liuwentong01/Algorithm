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
//归并排序
var sortList = function(head) {
  if(head == null || head.next == null){
    return head;
  }
  var p1 = head, p2 = head;
  while(p2.next != null && p2.next.next != null){
    p1 = p1.next;
    p2 = p2.next.next;
  }
  var tmp = p1.next;
  p1.next = null;
  p1 = head;
  var left = sortList(p1);
  var right = sortList(tmp);
  var h = new ListNode(0);
  var res = h;
  while(left != null && right != null){
    if(left.val < right.val){
      h.next = left;
      left = left.next
      h = h.next;
    } else{
      h.next = right;
      right = right.next;
      h = h.next;
    }
  }
  h.next = left != null ? left : right;
  return res.next;
};
