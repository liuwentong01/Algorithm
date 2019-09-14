/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
var mergeKLists = function(lists) {
  var min = Number.MAX_VALUE, minIndex = -1;
  for(var i = 0; i < lists.length; i++){
    if(lists[i].val < min){
      min = lists[i].val;
      minIndex = i;
    }
  }

  list[i].next = mergeKLists(lists)
};