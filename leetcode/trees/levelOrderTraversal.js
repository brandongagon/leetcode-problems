/*
Level-Order Traversal

Print each level of a binary tree on a separate line

We will use a Queue data structure
*/

// Helper class to represent a node in the binary tree
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Prints each level of a binary tree on a separate line
function printTreeLevels(root) {
  if (!root) {
    console.log('The tree is empty');
    return;
  }

  // Use an array as a queue for the nodes to visit
  const queue = [root];

  while (queue.length > 0) {
    // get the number of nodes at the current level
    const levelSize = queue.length;
    const currentLevelNodes = [];

    // process all nodes for the current level
    for (let i=0;i<levelSize;i++) {
      // dequeue the first node in the queue
      const currentNode = queue.shift();

      // add the node's value to our list for the current level
      currentLevelNodes.push(currentNode.val);

      // enqueue left child if it exists
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      // Enqueue right child if it exists
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    // join the values of the current level's nodes and print
    console.log(currentLevelNodes.join(' '));
  }
}

// --- Example Usage ---

// Let's create a binary tree:
//       3
//      / \
//     9   20
//        /  \
//       15   7

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log('Printing tree levels');
printTreeLevels(root);