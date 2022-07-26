'use strict';

const { Node, BinaryTree } = require('../trees/index');
const { HashTable } = require('../hashtables/index');

const tree1 = new BinaryTree();
tree1.root = new Node(12);
tree1.root.left = new Node(5);
tree1.root.right = new Node(6);
tree1.root.left.right = new Node(4);
tree1.root.right.left = new Node(14);

const tree2 = new BinaryTree();
tree2.root = new Node(12);
tree2.root.left = new Node(7);
tree2.root.right = new Node(6);
tree2.root.left.right = new Node(3);
tree2.root.right.left = new Node(11);

function treeIntersection(tree1, tree2) {

  let results = [];

  const table = new HashTable(1024);

  const setTree = (tree1) => {

    const root = tree1.root;
    const traverse = (node) => {

      let key = (`key${(node.value).toString()}`);
      console.log('key: ', key);
      table.set(key, node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(root);
  };
  setTree(tree1);

  const compareTrees = (tree2) => {

    const root = tree2.root;
    const traverse = (node) => {

      let result = table.contains(node.value);
      if (result === true) results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(root);
  };
  compareTrees(tree2);

  return results;
}

let finalResults = treeIntersection(tree1, tree2);
console.log(finalResults);
