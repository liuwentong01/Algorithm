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
//方法一：空间O(n)
var isPalindrome = function(head) {
  var res = [];
  var cur = head;
  while (cur != null) {
    res.push(cur.val);
    cur = cur.next;
  }
  cur = head;
  while (cur != null) {
    if (cur.val != res.pop()) {
      return false;
    } else {
      cur = cur.next;
    }
  }
  return true;
};

//方法二：空间O(1)
var isPalindrome = function(head) {
  if(head == null || head.next == null){
    return true;
  }
  var fast = head, slow = head;
  while(fast.next != null && fast.next.next != null){
    slow = slow.next;
    fast = fast.next.next;
  }
  fast = slow.next;
  slow.next = null;
  var help = null
  while(fast != null){
    help = fast.next;
    fast.next = slow;
    slow = fast;
    fast = help;
  }
  fast = slow;
  help = slow;
  slow = head;

  var res = true;
  while(fast != null && slow != null){
    if(fast.val != slow.val){
      res = false;
      break;
    }
    fast = fast.next;
    slow = slow.next;
  }

  fast = help.next;
  help.next = null;
  while(fast != null){
    var tmp = fast.next;
    fast.next = help;
    help = fast;
    fast = tmp;
  }
  return res;
};
