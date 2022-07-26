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
