/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**递归法
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(head == null){
    return head
  }
  if(head.next != null && head.next.val == head.val){
    while(head != null && head.next != null && head.val == head.next.val){
      head = head.next;
    }
    head.next = deleteDuplicates(head.next);
  } else{
    head.next = deleteDuplicates(head.next);
  }
  return head;
};

/**
 * 非递归法
 */
var deleteDuplicates = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  var pre = head, cur = head.next;
  while(cur != null){
    if(pre.val == cur.val){
      cur = cur.next;
      if(cur == null){
        pre.next = cur;
      }
    } else{
      pre.next = cur;
      pre = cur;
      cur = cur.next;
    }
  }
  return head;
};

