# Graphs

A graph is a non-linear data structure that can be looked at as a collection of `vertices` (or `nodes`) potentially connected by line segments named `edges`. With this code challenge, I will be implementing various methods on the Graph class to perform certain functionality.

## Challenge 35 - Graph Implementation

## Problem Domain

Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

- **add node**
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph

- **add edge**
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph

- **get nodes**
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)

- **get neighbors**
  - Arguments: node
  - Returns a collection of edges connected to the given node
  - Include the weight of the connection in the returned collection

- **size**
  - Arguments: none
  - Returns the total number of nodes in the graph

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API
<!-- Description of each method publicly available in your Graph -->

## Tests

To be implemented using Jest:

- Node can be successfully added to the graph
- An edge can be successfully added to the graph
- A collection of all nodes can be properly retrieved from the graph
- All appropriate neighbors can be retrieved from the graph
- Neighbors are returned with the weight between nodes included
- The proper size is returned, representing the number of nodes in the graph
- A graph with only one node and edge can be properly returned
- An empty graph properly returns null
