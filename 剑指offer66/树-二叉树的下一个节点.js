/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode) {
  function getMostLeft(node){
    while(node.left != null){
      node = node.left;
    }
    return node;
  }
  if(pNode.right != null){
    return getMostLeft(pNode.right);
  } else{
    var parent = pNode.next;
    while(parent!= null && parent.left != pNode){
      pNode = parent;
      parent = parent.next;
    }
    return parent;
  }
}
