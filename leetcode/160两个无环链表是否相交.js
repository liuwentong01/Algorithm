/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if(headA == null || headB == null) return null;
  var curA = headA, curB = headB;
  var lenA = 1, lenB = 1;
  while(curA.next != null){
    curA = curA.next;
    lenA++;
  }
  while(curB.next != null){
    curB = curB.next;
    lenB++;
  }
  if(curA != curB){
    return null;
  }
  curA = headA;
  curB = headB;
  if(lenA > lenB){
    lenA -= lenB;
    while(lenA--){
      curA = curA.next;
    }
    while(curA != curB){
      curA = curA.next;
      curB = curB.next;
    }
    return curA;
  }
  else{
    lenB -= lenA;
    while (lenB--) {
      curB = curB.next;
    }
    while (curA != curB) {
      curA = curA.next;
      curB = curB.next;
    }
    return curA;
  }

};
