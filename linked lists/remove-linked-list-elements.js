// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head === null) return null;
    let dummy = new ListNode(0);
    let prev = dummy;
    dummy.next = head;
    while(head !== null){
        if(head.val !== val){
            prev = head
            head = head.next;
            
        }else{
            prev.next = head.next;
            head = head.next;
        }
    }
    return dummy.next
};