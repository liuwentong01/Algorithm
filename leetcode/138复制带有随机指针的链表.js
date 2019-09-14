/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if(head == null) return head;
  var cur = head;
  var next = null
  while(cur != null){
    next = cur.next;
    cur.next = new Node(cur.val, null, null);
    cur.next.next = next;
    cur = next;
  }

  cur = head;
  while(cur != null){
    cur.next.random = cur.random != null ? cur.random.next : null;
    cur = cur.next.next;
  }

  cur = head;
  var head2 = head.next;
  copy = cur.next;
  while(cur != null){
    cur.next = cur.next.next;
    cur = cur.next;
    copy.next = copy.next ? copy.next.next : null;
    copy = copy.next;
  }
  return head2;
};
