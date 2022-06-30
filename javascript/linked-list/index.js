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
    while (current.next !== null) {
      if (current.next.value === value) {
        insertNode.next = current.next;
        current = insertNode;
      }
    }
  }

  // linked-list-kth
  kthFromEnd(k) {
    let current = this.head;
    let nodes = 0;
    while (current) {
      nodes += 1;
      current = current.next;
    }
    let kthNode = (nodes - k);
    let newCurrent = this.head;
    while (newCurrent) {
      if (newCurrent === kthNode) {
        return newCurrent.value;
      }
      newCurrent = newCurrent.next;
    }
  }
}

// linked-list-zip


function listZip(list1, list2) {
  let current1;
  let current2;
  if (list1.head === null) {
    let linkedList1 = new LinkedList();
    linkedList1.add(1);
    linkedList1.add(3);
    linkedList1.add(2);
    current1 = linkedList1.head;
  } else if (list2.head === null) {
    let linkedList2 = new LinkedList();
    linkedList2.add(5);
    linkedList2.add(9);
    linkedList2.add(4);
    current2 = linkedList2.head;
  } else {
    current1 = list1.head;
    current2 = list2.head;
  }

  while (current1.next && current2.next) {

  }
}

let linkedList1 = new LinkedList();
linkedList1.add(1);
linkedList1.add(3);
linkedList1.add(2)

let linkedList2 = new LinkedList();
linkedList2.add(5);
linkedList2.add(9);
linkedList2.add(4);

listZip(linkedList1, linkedList2);

// linkedList.traverse();

module.exports = LinkedList;
