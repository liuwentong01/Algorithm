/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**删除链表中的重复元素2
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(head == null){
    return head;
  }
  if(head.next != null && head.val == head.next.val){
    while(head != null && head.next != null && head.val == head.next.val){
      head = head.next;
    }
    head = deleteDuplicates(head.next);
  } else{
    head.next = deleteDuplicates(head.next)
  }
  return head;
};
