/* Depth first search check the values along a path of vertices before moving to another path.
 * DFS implementation use either a stack data structre or, more commonly, recursion to keep track of the path the search is on and the current vertex. */ 

/* this implementation uses recursion and has a callback function. Although a 
 * stack data structure could be used to keep track of the current vertex. */

const testGraph = require('./testGraph.js');

const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
  callback(start);

  start.edges.forEach((edge) => {
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, callback, visitedVertices);
    }
  });
};

depthFirstTraversal(testGraph.vertices[0], vertex => console.log(vertex.data));
