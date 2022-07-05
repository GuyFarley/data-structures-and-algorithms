'use strict';

const { Node, BinaryTree } = require('../index');

describe('Binary Tree Tests', () => {

  test('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();

    expect(tree.root).toBeNull();
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(12);

    expect(tree.root.value).toEqual(12);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(12);
    tree.root.left = new Node(13);
    tree.root.right = new Node(14);

    expect(tree.root.value).toEqual(12);
    expect(tree.root.left.value).toEqual(13);
    expect(tree.root.right.value).toEqual(14);

  });

  test('Can successfully return a collection from a pre-order traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(4);
    tree.root.right.right = new Node(6);

    let preOrder = tree.preOrder();
    expect(typeof preOrder).toEqual('object');
    expect(preOrder[0]).toEqual(1);
    expect(preOrder[1]).toEqual(2);
    expect(preOrder[2]).toEqual(3);
    expect(preOrder[5]).toEqual(6);
  });

  test('Can successfully return a collection from an in-order traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(4);
    tree.root.right.right = new Node(6);

    let inOrder = tree.inOrder();
    expect(typeof inOrder).toEqual('object');
    expect(inOrder[0]).toEqual(3);
    expect(inOrder[1]).toEqual(2);
    expect(inOrder[2]).toEqual(4);
    expect(inOrder[3]).toEqual(1);
  });

  test('Can successfully return a collection from a post-order traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(4);
    tree.root.right.right = new Node(6);

    let postOrder = tree.postOrder();
    expect(typeof postOrder).toEqual('object');
    expect(postOrder[0]).toEqual(3);
    expect(postOrder[1]).toEqual(4);
    expect(postOrder[2]).toEqual(2);
    expect(postOrder[5]).toEqual(1);
  });

  test('Returns true/false for the contains method, given an existing or non-existing node value', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(4);
    tree.root.right.right = new Node(6);

    let trueResult = tree.contains(3);
    let falseResult = tree.contains(19);
    expect(trueResult).toEqual(true);
    expect(falseResult).toEqual(false);

  });

  test('Returns the max value from a binary tree', () => {
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

    let max = tree.maxValue();
    expect(max).toEqual(11);
  });

});
