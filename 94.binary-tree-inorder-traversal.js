/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let values = [];
    traversal(root, values);
    return values;
    /*if (!root) {
        return [];
    }
    return [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right)
    ];*/
};

var traversal = function(node, values) {
    if (!node) {
        return;
    }
    traversal(node.left, values);
    values.push(node.val);
    traversal(node.right, values);
};