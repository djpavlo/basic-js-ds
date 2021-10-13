const BinarySearchTree = require('./src/binary-search-tree.js');
const tree = new BinarySearchTree();
tree.add(1);

tree.add(2);

tree.add(3);

tree.add(4);

tree.add(5);

console.log(tree.root().data);
console.log(tree.min());
console.log(tree.max());
console.log(tree.has(5));
tree.remove(5);
console.log(tree.has(5));
console.log(tree.max());
// console.log(instance.root);
// console.log(instance);