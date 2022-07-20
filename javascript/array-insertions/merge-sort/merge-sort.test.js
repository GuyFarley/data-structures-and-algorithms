'use strict';

const { merge, mergeSort } = require('./index');

describe('Array Merge-Sort Tests', () => {

  test('Merges and sorts input array correctly', () => {
    let array = [4, 6, 3, 2, 10, 19, 1, 8];
    let results = mergeSort(array);
    console.log(results);

    expect(results[0]).toEqual(1);
    expect(results[4]).toEqual(6);
    expect(results[7]).toEqual(19);
  });

  test('Maintains number of elements in array', () => {
    let array = [4, 6, 3, 2, 10, 19, 1, 8];
    let results = mergeSort(array);
    expect(results.length).toEqual(8);
  });

});
