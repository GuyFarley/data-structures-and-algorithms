'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top) {
      let temp = this.top;
      this.top = temp.next;
      return temp;
    }
  }

  peek() {
    if (this.top) {
      return this.top.value;
    }
  }

  isEmpty() {
    return (this.top === null);
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue() {
    let temp;
    if (this.front) {
      temp = this.front;
      if (!temp.next) {
        this.back = null;
      }
      this.front = this.front.next;
      return temp.value;
    } else {
      return null;
    }
  }

  peek() {
    if (this.front) {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = {
  Stack,
  Queue,
};
