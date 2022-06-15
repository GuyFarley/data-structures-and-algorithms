# Binary Search Array

## Problem Domain

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.
**NOTE:** The search algorithm used in your function should be a binary search.

## Whiteboard Process

![Binary Search Array](/array-binary-search.png)

## Approach & Efficiency

My approach was to first define the beginning, middle, and endpoints of the array - and to redefine and use these throughout the function as needed.

First, I would compare the key value to the value at midpoint of the array (as suggested by the binary search method).

I then decided on a while loop, which would run for as long as the key value did not equal the value of the midpoint array. For each comparison:

- if the key value was higher than the midpoint, I would reset the midpoint to equal the halfway point between the current midpoint and the end of the array.

- if the key was lower than the midpoint, I would reset the midpoint to be the halfway point between the current midpoint and the beginning of the array (index 0).

Once the key value matched the value at midpoint index, I would return that index. I still have some work to do, since there are a couple of bugs, but it mostly works upon my first commit.
