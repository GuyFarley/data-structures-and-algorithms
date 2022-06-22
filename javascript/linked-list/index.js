'use strict';

// creates a Node class - specific to linked lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  // completed in class demo - just console.log's node values
  traverse() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
    console.log('done traversing');
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  insert(value) {
    let insertNode = new Node(value);
    insertNode.next = this.head;
    this.head = insertNode;
    return this.head;
  }

  includes(value) {
    let current = this.head;
    let includes = false;
    while (current) {
      if (value === current.value) {
        return includes = true;
      } else {
        includes = false;
        current = current.next;
      }
    }
    return includes;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      string += `{ ${current.value} } -> `;
      current = current.next;
    }
    string += 'NULL';
    return string;
  }

  insertBefore(value, newValue) {
    let insertNode = new Node(newValue);
    let current = this.head;
    let temp;
    while (current) {
      if (current.next.value === value) {
        // temp = current;
        // current = insertNode;
        // current.next = temp;
      }
    }
  }
}

let linkedList = new LinkedList();
console.log(linkedList.head);

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.insert(4);

let result = linkedList.includes(2);
console.log(result);

linkedList.traverse();

console.log(linkedList.toString());

linkedList.insertBefore(3, 5);

linkedList.traverse();

module.exports = LinkedList;
