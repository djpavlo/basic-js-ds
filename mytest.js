// const BinarySearchTree = require('./src/binary-search-tree.js');
// const tree = new BinarySearchTree();
// tree.add(1);

// tree.add(2);

// tree.add(3);

// tree.add(4);

// tree.add(5);

// console.log(tree.root().data);
// console.log(tree.min());
// console.log(tree.max());
// console.log(tree.has(5));
// tree.remove(5);
// console.log(tree.has(5));
// console.log(tree.max());


// console.log(instance.root);
// console.log(instance);
const { testOptional, ListNode } = require('./extensions/index.js');
const removeKFromList = require('./src/st-remove-from-list.js');


function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
        if (acc) {
            const node = new ListNode(cur);
            node.next = acc;
            return node;
        }

        return new ListNode(cur);
    }, null);
}

const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
console.log(initial);
const expected = convertArrayToList([1, 2, 4, 5]);
console.log(removeKFromList(initial, 3));
console.log(expected);