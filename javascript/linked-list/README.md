# Singly Linked List
<!-- Short summary or background information -->

## Challenge

- Challenge Type: New Implementation
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Within your Linked List class, include a head property.
- Upon instantiation, an empty Linked List should be created.
- The class should contain the following methods:
- **insert**
  - Arguments: value
  - Returns: nothing
  - Adds a new node with that value to the head of the list with an O(1) Time performance.
- **includes**
  - Arguments: value
  - Returns: Boolean
  - Indicates whether that value exists as a Node’s value somewhere within the list.
- **to string**
  - Arguments: none
  - Returns: a string representing all the values in the Linked List, formatted as:
`"{ a } -> { b } -> { c } -> NULL"`

- **append**
  - arguments: new value
  - adds a new node with the given value to the end of the list
- **insert before**
  - arguments: value, new value
  - adds a new node with the given new value immediately before the first node that has the value specified
- **insert after**
  - arguments: value, new value
  - adds a new node with the given new value immediately after the first node that has the value specified

## Approach & Efficiency

- Created new methods within the LinkedList class for each of the requirements: insert, includes, and to string
- Considered efficiency of each method while creating them, to ensure Big O notation

## API
<!-- Description of each method publicly available to your Linked List -->
