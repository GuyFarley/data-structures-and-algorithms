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

  // binary search tree method
  // adds new node with specified value to correct location in BST
  add(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    }
    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
        }
        current = current.right;
      }
    }
  }

  // binary search tree method
  // returns true if value is contained in BST, otherwise returns false
  contains(value) {
    let current = this.root;
    let contains = false;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        contains = true;
      }
    }
    return contains;
  }

  maxValue() {
    let max = 0;
    const traverse = (node) => {
      if (node.value > max) { max = node.value; }
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    console.log(max);
    return max;
  }
}


function breadthFirstSearch(tree) {
  let queue = [];
  let result = [];
  let current = null;

  queue.push(tree.root);

  while (queue.length) {
    current = queue.shift();
    result.push(current.value);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return result;
}

let tree = new BinaryTree();
tree.root = new Node(2);
tree.root.left = new Node(7);
tree.root.right = new Node(5);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(6);
tree.root.left.right.left = new Node(5);
tree.root.left.right.right = new Node(11);
tree.root.right.right = new Node(9);
tree.root.right.right.left = new Node(4);

let results = breadthFirstSearch(tree);
console.log(results);

module.exports = {
  breadthFirstSearch,
  KaryNode,
  Node,
  BinaryTree,
};
