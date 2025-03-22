class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(v1, v2) {
    if (this.adjList.has(v1) && this.adjList.has(v2)) {
      this.adjList.get(v1).push(v2);
      this.adjList.get(v2).push(v1);
    }
  }

  dfs(start, visited = new Set()) {
    if (!this.adjList.has(start)) return;

    console.log(start);
    visited.add(start);

    for (let neighbour of this.adjList.get(start)) {
      if (!visited.has(neighbour)) {
        this.dfs(neighbour, visited);
      }
    }
  }

  bfs(start) {
    if (!this.adjList.has(start)) return;

    let queue = [start];
    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
      let vertex = queue.shift();
      console.log(vertex);

      for (let neighbour of this.adjList.get(vertex)) {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          queue.push(neighbour);
        }
      }
    }
  }

  cloneGraph() {
    let clone = new Graph();

    let visited = new Map();
    let queue = [];

    let start = this.adjList.keys().next().value;
    if(start === "undefined") return false;

    queue.push(start);
    visited.set(start,start);

    while(queue.length > 0){
      let node = queue.shift();
      clone.addVertex(node);

      for(let neighbour of this.adjList.get(node)){
        if(!visited.has(neighbour)){
          visited.set(neighbour, neighbour);
          queue.push(neighbour);
        }

        clone.addEdge(node,neighbour)
      }
    }
    return clone;
  }
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(5);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(10);

graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 10);

// graph.dfs(1);

graph.bfs(1);

let cloneGraph = graph.cloneGraph();
cloneGraph.bfs(1)