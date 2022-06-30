'use strict';

const { Stack, PseudoQueue, AnimalShelter } = require('../index');
const { Queue } = require('../index');

describe('Stack Tests', () => {
  test('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push('a');

    expect(stack.top.value).toEqual('a');
  });

  test('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');

    expect(stack.top.value).toEqual('c');
    expect(stack.top.next.value).toEqual('b');
    expect(stack.top.next.next.value).toEqual('a');

  });

  test('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push('a');
    stack.pop();

    expect(stack.top).toBeNull();
  });

  test('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.top).toBeNull();
  });

  test('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    let topNode = stack.peek();

    expect(topNode).toEqual('b');
  });

  test('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    let isEmpty = stack.isEmpty();
    expect(isEmpty).toEqual(true);
    expect(stack.top).toBeNull();
  });

  test('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    let emptyPop = stack.pop();
    let emptyPeek = stack.peek();

    expect(emptyPop).toEqual(undefined);
    expect(emptyPeek).toEqual(undefined);
  });

});

describe('Queue Tests', () => {

  test('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue('a');

    expect(queue.front.value).toEqual('a');
    expect(queue.back.value).toEqual('a');
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');

    expect(queue.front.value).toEqual('a');
    expect(queue.back.value).toEqual('c');
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue('d');
    queue.enqueue('b');
    queue.enqueue('c');

    let value = queue.dequeue();
    expect(value).toEqual('d');
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    let peeked = queue.peek();

    expect(peeked).toEqual('a');
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBeNull();
  });

  test('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();

    expect(queue.front).toBeNull();
  });

  test('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();
    let emptyDequeue = queue.dequeue();
    let emptyPeek = queue.peek();

    expect(emptyDequeue).toBeNull();
    expect(emptyPeek).toEqual(undefined);
  });
});

describe('PseudoQueue Tests', () => {

  test('Properly adds node to input stack', () => {
    let pseudo = new PseudoQueue();
    pseudo.enqueue('a');
    pseudo.enqueue('b');
    pseudo.enqueue('c');

    let topNode = pseudo.inputStack.peek();
    expect(topNode.value).toEqual('c');
  });

  test('Properly removes node from output stack', () => {
    let pseudo = new PseudoQueue();
    pseudo.enqueue('a');
    // pseudo.enqueue('b');
    // pseudo.enqueue('c');
    let inputNode = pseudo.inputStack.peek();
    console.log(inputNode.value);


    expect((pseudo.dequeue()).value).toEqual('a');
  });
});

describe('Animal Shelter Tests', () => {

  test('Properly adds dog to dogQueue', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('dog');

    let animal = shelter.dogQueue.peek();
    console.log('animal: ', animal);
    expect(animal).toEqual('dog');
  });

  test('Properly adds cat to catQueue', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('cat');

    let animal = shelter.catQueue.peek();
    console.log('animal: ', animal);
    expect(animal).toEqual('cat');
  });

  test('Properly dequeues a dog from dogQueue', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    shelter.enqueue('dog');

    let animal = shelter.dequeue('dog');
    console.log('animal: ', animal);
    expect(animal).toEqual('dog');
  });

  test('Properly dequeues a cat from catQueue', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('dog');

    let animal = shelter.dequeue('cat');
    console.log('animal: ', animal);
    expect(animal).toEqual('cat');
  });
});
