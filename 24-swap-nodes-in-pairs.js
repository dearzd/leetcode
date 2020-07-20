/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let prev = null;
    let current = head;
    let newHead = current.next;

    while (current && current.next) {
        let next = current.next;
        if (prev !== null) {
            prev.next = next;
        }
        current.next = next.next;
        next.next = current;
        prev = current;
        current = next.next;
    }

    return newHead;
};
