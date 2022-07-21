'use strict';

function quickSort(arr, left, right) {

  console.log('original input array: ', arr);
  console.log('input left: ', left);
  console.log('input right: ', right);

  if (left < right) {
    let position = partition(arr, left, right);
    console.log('position: ', position);
    let positionMinusOne = (position - 1);
    let positionPlusOne = (position + 1);
    quickSort(arr, left, positionMinusOne);
    quickSort(arr, positionPlusOne, right);
  }
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let low = (left - 1);
  console.log('pivot: ', pivot);
  console.log('low: ', low);

  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
    }
  }
  let lowPlusOne = (low + 1);
  swap(arr, right, lowPlusOne);
}

function swap(arr, i, low) {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

let array = [8, 4, 23, 42, 16, 15];
let left = 1;
let right = 4;
let results = quickSort(array, left, right);

console.log('final results: ', results);
