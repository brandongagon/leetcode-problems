// recursively invert a binary tree
// we will need to visit every single node, so time complexity is O(n)
// due to the call stack, space complexity is O(n)
function invertTree(root) {
  // Base case
  // if curent node is null, return as-is
  if (!root) return root;

  // store the left child temporarily before we overwrite it
  let temp = root.left;

  // recursively invert the right subtree and assign it to the left
  root.left = invertTree(root.right);

  // recursively invert the original left subtree (stored in temp)
  // and assign it to the right
  root.right = invertTree(temp);

  // return the root of the inverted tree
  return root;
}