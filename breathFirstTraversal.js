/* This is a example of a BFS (won't work unless the Queue class is present.
 * how can you use recursion and can callback functionality be implemented.*/


const testGraph = require('./testGraph.js');
const Queue = require('./Queue.js');

const breadthFirstTraversal = (start) => {
  const visitedVertices = [start];
  const  visitQueue = new Queue();
  visitQueue.enqueue(start);
  
  while (!visitQueue.isEmpty()){
    const current = visitQueue.dequeue();
    console.log(current.data);
     current.edges.forEach((edge) => {
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      visitQueue.enqueue(neighbor);
    }
  })
  }
};

breadthFirstTraversal(testGraph.vertices[0]);
