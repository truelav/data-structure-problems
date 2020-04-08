// 19. Remove Nth Node From End of List
// Medium

// 2791

// 201

// Add to List

// Share
// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?

var removeNthFromEnd = function(head, n) {
    let first = head;
    let second = head;
    let count = 1;
    // edge case of single node in list
    if (head.next === null) {
       return head.value = null
    }
    // increment the second pointer to be n spaces ahead of first pointer
    while (count <= n) {
        second = second.next;
        count++
    }
    // if second pointer is null that means first pointer is already on node to remove (head)
  
  if ( second === null){
        head.val = head.next.val;
        head.next = head.next.next;
        return head
    }
    // increment both pointers until first pointer is one behind the node to remove
    while (second.next !== null) {
    second = second.next;
    first = first.next;
    }
    // first.next being assigned the node two spaces ahead,
    //effectively removing node that is n spaces back from the end.
    first.next = first.next.next
    return head
};