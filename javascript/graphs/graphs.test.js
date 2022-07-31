'use strict';

const { Vertex, Edge, Graph } = require('./index');

// An edge can be successfully added to the graph
// A collection of all nodes can be properly retrieved from the graph
// All appropriate neighbors can be retrieved from the graph
// Neighbors are returned with the weight between nodes included
// The proper size is returned, representing the number of nodes in the graph
// A graph with only one node and edge can be properly returned
// An empty graph properly returns null

const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const D = graph.addVertex('D');
const C = graph.addVertex('C');
const E = graph.addVertex('E');
const F = graph.addVertex('F');
const G = graph.addVertex('G');
const H = graph.addVertex('H');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(B, G);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(F, H);
graph.addDirectedEdge(C, H);
graph.addDirectedEdge(F, E);

// console.log(graph.adjacencyList);

describe('Graph Tests', () => {

  test('Node can be successfully added to the graph', () => {
    // const graph = new Graph();
    // const A = graph.addVertex('A');
    // let results = graph.adjacencyList;
    // console.log(results);

    // expect(results).toEqual(A);
  });

});

