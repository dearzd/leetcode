/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let root = new ListNode();
    let next = root;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            next.next = l1;
            l1 = l1.next;
        } else {
            next.next = l2;
            l2 = l2.next;
        }
        next = next.next;
    }

    if (l1) {
        next.next = l1;
    }

    if (l2) {
        next.next = l2;
    }

    return root.next;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}