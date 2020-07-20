/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    let queue = [{
        level: 0,
        node: root
    }];

    while (queue.length) {
        let ele = queue.shift();
        if (!ele.node) continue;

        result[ele.level] = result[ele.level] || [];
        result[ele.level].push(ele.node.val);

        queue.push({
            level: ele.level + 1,
            node: ele.node.left
        });

        queue.push({
            level: ele.level + 1,
            node: ele.node.right
        });
    }

    return result;
};