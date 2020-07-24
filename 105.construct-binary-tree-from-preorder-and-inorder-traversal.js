/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder || !inorder || preorder.length !== inorder.length) return null;

    let inorderMap = new Map();
    inorder.forEach((value, index) => inorderMap.set(value, index));

    let build = function (preIndex, inStart, inEnd) {
        if (preIndex > preorder.length - 1 || inStart > inEnd) return null;

        const indexInInorder = inorderMap.get(preorder[preIndex]);

        let node = new TreeNode(preorder[preIndex]);

        node.left = build(preIndex + 1, inStart, indexInInorder - 1);
        node.right = build(preIndex + (indexInInorder - inStart + 1), indexInInorder + 1, inEnd);

        return node;
    };

    return build(0, 0, inorder.length - 1);
};

var buildTree_first = function(preorder, inorder) {
    console.log(preorder, inorder);
    if (!preorder.length || !inorder.length) return null;

    let root = new TreeNode(preorder[0]);
    if (preorder.length <= 1 && inorder.length <= 1) {
        return root;
    }

    let rootIndexInInorder = inorder.indexOf(root.val);
    let leftNodes_preorder = preorder.slice(1, rootIndexInInorder + 1);
    let leftNodes_inorder = inorder.slice(0, rootIndexInInorder);
    let rightNodes_preorder = preorder.slice(rootIndexInInorder + 1, preorder.length);
    let rightNodes_inorder = inorder.slice(rootIndexInInorder + 1, inorder.length);

    root.left = buildTree_first(leftNodes_preorder, leftNodes_inorder);
    root.right = buildTree_first(rightNodes_preorder, rightNodes_inorder);

    return root;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));
console.log(buildTree([], []));
console.log(buildTree([1, 2], [2, 1]));
console.log(buildTree([1, 2, 3], [2, 3, 1]));