/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(head == null || head.next == null){
    return head;
  }
  var cur = head, sum = 0;
  while (cur != null) {
    cur = cur.next;
    sum++;
  }
  cur = head;
  k = k % sum;
  if(k == 0)
    return head;

  while(cur != null){
    cur = cur.next;
    k--;
  }
  cur = head;
  while(++k != 0){
    cur = cur.next;
  }
  var p1 = cur.next; 
  var p2 = p1;
  cur.next = null;
  while(p2.next != null){
    p2 = p2.next;
  }
  p2.next = head;
  return p1;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(head == null || head.next == null){
    return head;
  }
  var cur = head;
  var sum = 1;
  while(cur.next != null){
    cur = cur.next;
    sum++;
  }
  cur.next = head;
  k %= sum;
  var tmp = sum - k;
  cur = head;
  while(--tmp){
    cur = cur.next;
  }
  head = cur.next;
  cur.next = null;
  return head;
};