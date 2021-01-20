const Node = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

const flattenBinaryTree = (root) => {
  if (!root) return null;

  var leftNode = flattenBinaryTree(root.left);
  var rightNode = flattenBinaryTree(root.right);

  if (root.left) {
    leftNode.right = root.right;
    root.right = root.left;
  }

  root.left = null;

  return rightNode || leftNode || root;
};

node1 = new Node(1);
node2 = new Node(2);
node3 = new Node(3);
node4 = new Node(4);
node5 = new Node(5);
node6 = new Node(6);
node1.left = node2;
node1.right = node5;
node2.left = node3;
node2.right = node4;
node5.right = node6;

console.log("-----------------Input---------------------");
console.log(node1);
console.log("-----------------Output---------------------");
flattenBinaryTree(node1);
console.log(node1);
