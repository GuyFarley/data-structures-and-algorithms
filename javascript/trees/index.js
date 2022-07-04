'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    this.children = [];
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let results = [];

    //  recursive helper function
    const traverse = (node) => {
      // base case aka the thing I want to do
      results.push(node.value);
      // need my recursive case(s)
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    // start the recursive "party"
    traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  postOrder() {
    let results = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;

  }
}

class BinarySearchTree {
  // This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
  // Add
  // Arguments: value
  // Return: nothing
  // Adds a new node with that value in the correct location in the binary search tree.
  // Contains
  // Argument: value
  // Returns: boolean indicating whether or not the value is in the tree at least once.
}

// let tree = new BinaryTree();
// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(15);
// tree.root.left.left = new Node(1);
// tree.root.left.right = new Node(8);
// tree.root.right.right = new Node(20);

// let preOrder = tree.preOrder();
// let inOrder = tree.inOrder();
// let postOrder = tree.postOrder();

// console.log('preOrder:', preOrder);
// console.log('inOrder:', inOrder);
// console.log('postOrder:', postOrder);
