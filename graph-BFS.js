//codesandbox : https://codesandbox.io/s/graph-bfs-iwsml?file=/src/index.js:0-1742

class BFS {
  constructor() {
    this.head = [];
  }
  insertEdge(src, des) {
    let newNode = {
      value: des,
      next: this.head[src]
    };

    this.head[src] = newNode;
  }
  showDetails() {
    let matrix = {};
    for (let i = 1; i < this.head.length; i++) {
      let currentNode = this.head[i];

      let array = [];
      while (currentNode) {
        // console.log(i + "->" + currentNode.value);

        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      matrix[i] = array;
    }
    return matrix;
  }

  checkIsPresent(array, element) {
    let isPresent = array.findIndex((e) => +e === +element) >= 0;
    return isPresent;
  }
  printGraph() {
    let matrix = this.showDetails();
    console.log(matrix);
    let elements = [];

    let currentNode = Object.keys(matrix)[0];

    let queue = [currentNode];
    while (currentNode) {
      // queue.push(currentNode);
      // let i = 0
      elements.push(queue[0]);
      queue.push(...matrix[queue[0]]);
      queue.shift();

      currentNode = queue[0];
      if (this.checkIsPresent(elements, currentNode)) {
        for (
          let i = currentNode;
          this.checkIsPresent(elements, currentNode);
          i++
        ) {
          queue.shift();

          currentNode = queue[0];
        }
      }
    }
    return elements;
  }
}
const bfs = new BFS();
bfs.insertEdge("1", "2");
bfs.insertEdge("1", "4");

bfs.insertEdge("2", "3");
bfs.insertEdge("2", "6");

bfs.insertEdge("3", "5");
bfs.insertEdge("3", "7");

bfs.insertEdge("7", "5");

bfs.insertEdge("5", "2");
bfs.insertEdge("5", "6");

bfs.insertEdge("6", "1");
bfs.insertEdge("4", "6");

// console.log(bfs.showDetails());
console.log(bfs.printGraph());
