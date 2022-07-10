'use strict';

// Require our linked list implementation
const { LinkedList, listZip } = require('../index');


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

  test('Properly zips 2 linked lists together', () => {
    let linkedList1 = new LinkedList();
    linkedList1.add(1);
    linkedList1.add(3);
    linkedList1.add(2);
    let linkedList2 = new LinkedList();
    linkedList2.add(5);
    linkedList2.add(9);
    linkedList2.add(4);

    let newList = listZip(linkedList1, linkedList2);
    expect(newList.head.next.value).toEqual(5);
    expect(newList.head.next.next.next.next.value).toEqual(2);
  });


  test('Adds a new node before specified value', () => {
    const linkedList = new LinkedList;
    linkedList.add('a');
    linkedList.add('b');
    linkedList.add('c');
    linkedList.add('d');
    linkedList.add('e');
    linkedList.insertBefore('c', 'q');

    expect(linkedList.head.next.next.value).toEqual('q');
  });

  test('Adds a new node after a specified value', () => {
    const linkedList = new LinkedList;
    linkedList.add('a');
    linkedList.add('b');
    linkedList.add('c');
    linkedList.add('d');
    linkedList.add('e');
    linkedList.insertAfter('c', 'q');
    linkedList.traverse();

    expect(linkedList.head.next.next.next.value).toEqual('q');
  });

});
