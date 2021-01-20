# binary-tree-flatten-linked-list

Run this script

```bash
$ node index.js
```
All inputs are hard-coded in the following way:

```javascript
/* index.js */

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

```
# Steps to solve this problem

1. Return `null` if the given Tree is empty.
2. Deep-first-search until Node doesn't have childs
3. Attach right child to lef child as right child.

# Complexity:
- Time complexity of the above algorithm is O(n) because we are iterating over the input Tree only once and n is the total number of Nodes in that Tree. 
- Constant space is O(1), because we are not using any extra space.
