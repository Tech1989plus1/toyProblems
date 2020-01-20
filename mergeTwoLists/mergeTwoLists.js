/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {
  var temp = this.head;
  var newNode = this.makeNode(value);

  if (temp === null) {
    this.head = newNode;
    this.tail = newNode;
  } 
  else {
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
    this.tail = newNode;
  }
};

LinkedList.prototype.contains = function(contain) {
  var temp = this.head;

  while (temp !== null) {
    if (temp.value === contain){
      return true;
    }
    temp = temp.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(value) {
 var node = {};
 node.value = value;
 node.next = null;
 return node;
};

const mergeTwoLists = function(l1, l2) {
  var merge = new LinkedList();

  if (l1 !== null || l2 !== null) {
    var templ1 = l1;
    var templ2 = l2;
    
    while (templ1 !== null && templ2 !== null) {
      merge.addToTail(templ1.value);
      merge.addToTail(templ2.value);
      templ1 = templ1.next;
      templ2 = templ2.next;
    }

    while (templ1 !== null) {
      merge.addToTail(templ1.value);
      templ1 = templ1.next;
    } 
    
    while (templ2 !== null) {
      merge.addToTail(templ2.value);
      templ2 = templ2.next;
    }
  }
  return merge.head;
};

var l1 = new LinkedList();
l1.addToTail(1);
l1.addToTail(4);

var l2 = new LinkedList();
l2.addToTail(1);
l2.addToTail(3);
l2.addToTail(5);
l2.addToTail(11);
l2.addToTail(50);
