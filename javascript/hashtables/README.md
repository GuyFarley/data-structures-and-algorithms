# Hashtables

A **hash table** is a data structure that provides the ability to store a key and quickly retrieve a value. Hashing is the ability to encode the key. They key points to a location in the data structure that holds the value we want to retrieve.

**Hash mapping** is the method for finding the information that is stored at that key location. These data structures make use of an array's O(1) read access (vs. iterating through the entire data structure) because the data is stored at a specific index location.

## Challenge

Implement a Hashtable Class with the following methods:

**set**

- Arguments: *key, value*
- Returns: *nothing*
- This method should hash the key, and set the key and value pair in the table, handling collisions as needed
- Should a given key already exist, replace its value from the value argument given to this method

**get**

- Arguments: *key*
- Returns: *Value associated with that key in the table*

**contains**

- Arguments: *key*
- Returns: *Boolean, indicating if the key exists in the table already*

**keys**

- Returns: *Collection of keys*

**hash**

- Arguments: *key*
- Returns: *Index in the collection for that keyDescription of the challenge*

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API
<!-- Description of each method publicly available in each of your hashtable -->
----------------------------

## Code Challenge: Class 31

Find the first repeated word in a book.

- Write a function called repeated word that finds the first word to occur more than once in a string
  - Arguments: string
  - Return: string

Examples:

- Input: `"Once upon a time, there was a brave princess who..."`
- Output: `"a"`

-----------------------------

- Input: `"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."`
- Output: `"it"`

-----------------------------

- Input: `"It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."`
- Output: `"summer"`

## Whiteboard

![Whiteboard visual for repeated word hashtable](./cc31_whiteboard.png)
