function deleteDuplication(pHead) {
  var newHead = new ListNode("head");
  newHead.next = pHead;
  var pHead = newHead;
  var qHead = pHead.next;
  while (qHead) {
    while (qHead.next != null && qHead.val == qHead.next.val) {
      qHead = qHead.next;
    }
    //没移动
    if (pHead.next == qHead) {
      pHead = qHead;
      qHead = qHead.next;
    }
    //移动了
    else {
      qHead = qHead.next;
      pHead.next = qHead;
    }
  }
  return newHead.next;
}