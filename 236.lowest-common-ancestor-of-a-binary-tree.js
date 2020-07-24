/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root;

    let leftResult = lowestCommonAncestor(root.left, p, q);
    let rightResult = lowestCommonAncestor(root.right, p, q);

    return leftResult && rightResult ? root : leftResult || rightResult;
};

// first, find paths in tree of p and q,
// second, compare two paths and find common ancestor
var lowestCommonAncestor_first = function(root, p, q) {
    let pathsP = [];
    let pathsQ = [];

    findPath(root, p, pathsP);
    findPath(root, q, pathsP);

    for (let i = 0; i < Math.min(pathsP.length, pathsQ.length); i++) {
        if (pathsP[i].val !== pathsQ[i].val) {
            return pathsP[i - 1];
        }
    }

    return pathsP.length < pathsQ.length ? pathsP.pop() : pathsQ.pop();
};

var findPath = function (root, node, paths) {
    // terminator
    if (!root) {
        return;
    }

    // current logic
    if (root.val === node.val) {
        paths.unshift(root);
        return true;
    }
    let inLeft = findPath(root.left, node, paths);
    if (inLeft) {
        paths.unshift(root);
        return true;
    }
    let inRight = findPath(root.right, node, paths);
    if (inRight) {
        paths.unshift(root);
        return true;
    }
};