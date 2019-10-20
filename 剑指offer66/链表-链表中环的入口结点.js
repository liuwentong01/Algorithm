/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
  if (pHead == null || pHead.next == null) return null;
  var fast = pHead;
  var slow = pHead;
  while (fast != null && fast.next != null) {//判断是否有环
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      fast = pHead;
      break;
    }
  }
  if (pHead != fast) return null;
  while (fast != slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
}
