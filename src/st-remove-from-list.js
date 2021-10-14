const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
// var head; // head of list
module.exports = function removeKFromList(l, k) {
    var temp = l,
        prev = null;

    // If head node itself holds the key to be deleted
    if (temp != null && temp.value == k) {
        l = temp.next; // Changed head        
    }
    // Search for the key to be deleted, keep track of
    // the previous node as we need to change temp.next
    while (temp != null && temp.next != null /*&& temp.value != k*/ ) {
        prev = temp;
        temp = temp.next;
        if (temp.value == k) {
            // Unlink the node from linked list
            prev.next = temp.next;
        }
    }

    return l;


}