'use strict';

const { HashTable } = require('./index');



describe('Hashtable Tests', () => {

  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    let table = new HashTable(1024);
    table.set('Guy', 41);
    let key = 'Guy';
    let position = table.hash(key);

    expect(Object.values(table.buckets[position].head.value)).toEqual([41]);
  });

  test('Retrieving based on a key returns the value stored', () => {
    let table = new HashTable(1024);
    table.set('Guy', 41);
    table.set('Bret', 41);
    table.set('Joe', 38);
    table.set('Lassen', 1);
    let key = 'Joe';
    let results = table.get(key);

    expect(results).toEqual(38);
  });

  // Successfully returns null for a key that does not exist in the hashtable
  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    let table = new HashTable(1024);
    table.set('Guy', 41);
    let key = 'Guy';
    let position = table.hash(key);
    console.log(position);
    // position of { Guy: 41 } is 771

    let nullKey = 'Joe';
    let results = table.get(nullKey);
    expect(results).toEqual(undefined);
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {

    let table = new HashTable(1024);
    table.set('Guy', 41);
    table.set('Bret', 41);
    table.set('Joe', 38);
    table.set('Lassen', 1);
    let results = table.keys();

    console.log(results);
    expect(results).toContainEqual(['Lassen'], ['Bret'], ['Joe'], ['Guy']);
  });

  // Successfully handle a collision within the hashtable
  // Successfully retrieve a value from a bucket within the hashtable that has a collision
  // Successfully hash a key to an in-range value

});
