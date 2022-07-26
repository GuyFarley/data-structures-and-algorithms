## Code Challenge: Class 32

Find common values in 2 binary trees

- Write a function called `tree_intersection` that takes two binary trees as parameters
- Using your `Hashmap` implementation as a part of your algorithm, return a set of values found in both trees

## Algorithm

- define a function called treeIntersection - takes in 2 binary trees
- declare a variable results to be an empty array
- create a new HashTable from existing class (1024 size)
- declare variable called counter <- 0;

- define a function called traverse tree1
  - for each node, use existing set method to place into hashtable
  - set key and value to equal node.value

- define a function called traverse tree2
  - for each node, use existing contains method to compare to values in hashtable
  - if true is returned, push current node value to results array

- return results array

## Code

```
function treeIntersection(tree1, tree2) {

  let results = [];

  const table = new HashTable(1024);

  const setTree = (tree1) => {

    const root = tree1.root;
    const traverse = (node) => {

      let key = (`key${(node.value).toString()}`);
      console.log('key: ', key);
      table.set(key, node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(root);
  };
  setTree(tree1);

  const compareTrees = (tree2) => {

    const root = tree2.root;
    const traverse = (node) => {

      let result = table.contains(node.value);
      if (result === true) results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(root);
  };
  compareTrees(tree2);

  return results;
}
```
