'use strict';

const { LinkedList } = require('../linked-list/index');

class HashTable {
  constructor(size) {
    this.size = size;
    // most languages, this is just how they create arrays:
    this.buckets = new Array(size);
  }

  /**
   *   Takes in a string and returns a hash as integer
   * @param {String} key
   * @returns
   */

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;

    return initialHash % 1024;
  }

  set(key, value) {
    // hash is the position inside the table where we will "set" the key value pair
    let position = this.hash(key);
    let data = { [key]: value };

    // we check if there is a bucket at the specified position
    // if bucket exists, add our data
    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      // if bucket doesn't exist, create one
      let bucket = new LinkedList();

      // add data to the bucket
      bucket.add(data);

      // add bucket to its position
      this.buckets[position] = bucket;
    }
  }

  // returns ONLY the value stored
  get(key) {
    let position = this.hash(key);

    if (this.buckets[position]) {
      let bucket = this.buckets[position];

      // I'll assume no collisions, I'll leave the link list traversal to you (as a stretch goal);
      let value = bucket.head.value[key];
      return value;
    }
  }

  // checks to see if key already exists in the table, returns a boolean
  contains(key) {
    // hashes the key to determine the position within the hashtable
    let position = this.hash(key);

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      let current = bucket.head;

      while (current) {
        if (current.value === key) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }

  // returns a collection of keys
  keys() {
    // declare keyCollection variable = []
    // determine size of hash table
    // for each bucket position, add all keys in that bucket to an array
    // when done traversing all positions and buckets, return keyCollection array
    let keyCollection = [];
    console.log(this.size);
    for (let i = 0; i < this.size; i++) {
      if (this.buckets[i]) {
        let bucket = this.buckets[i];
        let current = bucket.head;

        while (current) {
          keyCollection.push(Object.keys(current.value));
          current = current.next;
        }
      }
    }
    // console.log(keyCollection);
    return keyCollection;
  }
}

// let table = new HashTable(1024);

// console.log(table);
// console.log(table.hash('Ryan'));
// table.set('Ryan', 47);
// table.set('Lucky', 4);
// table.set('Audrey', { name: 'Audrey' });
// console.log(table);
// console.log('Ryan', table.get('Ryan'));
// console.log('Audrey', table.get('Audrey'));

// let keys = table.keys();
// console.log(keys);

module.exports = {
  HashTable,
};
