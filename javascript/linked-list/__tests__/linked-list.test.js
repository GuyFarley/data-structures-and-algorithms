'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {

  test('Instantiate empty linked list', () => {
    const linkedList = new LinkedList;
    expect(linkedList.head).toEqual(null);

  });

  test('Inserts value', () => {
    const linkedList = new LinkedList;
    let result = linkedList.insert(4);
    expect(result.value).toEqual(4);
  });

  test('Head property points to first node in linked list', () => {
    const linkedList = new LinkedList;
    linkedList.add(4);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.head.value).toEqual(4);
  });

  test('Inserts multiple values', () => {
    const linkedList = new LinkedList;
    linkedList.insert(4);
    linkedList.insert(5);
    expect(linkedList.head.value).toEqual(5);
    expect(linkedList.head.next.value).toEqual(4);
  });

  test('Includes value', () => {
    const linkedList = new LinkedList;
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    let result = linkedList.includes(3);
    expect(result).toEqual(true);
  });

  test('Does not include value', () => {
    const linkedList = new LinkedList;
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    let result = linkedList.includes(5);
    expect(result).toEqual(false);
  });

  test('To string', () => {
    const linkedList = new LinkedList;
    linkedList.add(1);
    let result = linkedList.toString();
    expect(result).toEqual('{ 1 } -> NULL');
  });

  test('Adds value to end of linked list', () => {
    const linkedList = new LinkedList;
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.head.next.next.value).toEqual(3);
  });

  test('Returns kth node from end of linked list', () => {
    const linkedList = new LinkedList;
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    let result = linkedList.kthFromEnd(2);
    expect(result).toEqual(3);
  });

  // test('Adds a new node before specified value', () => {

  // });

  // test('Adds a new node before specified value', () => {

  // });

});
