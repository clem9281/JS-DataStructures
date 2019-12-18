function ListNode(value) {}

ListNode.prototype.insertAfter = function(value) {};

ListNode.prototype.insertBefore = function(value) {};

ListNode.prototype.delete = function() {};

function DoublyLinkedList(node = null) {}
DoublyLinkedList.prototype.len = function() {};
DoublyLinkedList.prototype.removeFromHead = function() {};
DoublyLinkedList.prototype.addToTail = function(value) {};
DoublyLinkedList.prototype.addToHead = function(value) {};
DoublyLinkedList.prototype.removeFromTail = function() {};
DoublyLinkedList.prototype.moveToFront = function(node) {};
DoublyLinkedList.prototype.moveToEnd = function(node) {};
DoublyLinkedList.prototype.delete = function(node) {};
DoublyLinkedList.prototype.getMax = function() {};

module.exports = {
  ListNode,
  DoublyLinkedList
};
