// codesandbox : https://codesandbox.io/s/graph-dfs-25w0l?file=/src/index.js:0-1522

class DFS {
  constructor() {
    this.head = [];
  }
  insert(src, des) {
    let newNode = {
      value: des,
      next: this.head[src]
    };
    this.head[src] = newNode;
  }
  showGraph() {
    let matrix = {};
    for (let i = 0; i < this.head.length; i++) {
      let currentNode = this.head[i];
      let temp = [];
      while (currentNode) {
        temp.push(currentNode.value);
        // console.log(i + "->" + currentNode.value);
        currentNode = currentNode.next;
      }
      matrix[i] = temp;
    }
    return matrix;
  }

  checkIsPresent(array, value) {
    let isPresent = array.findIndex((val) => +value === +val) >= 0;
    return isPresent;
  }
  push() {}
  printPath() {
    let matrix = this.showGraph();
    console.log(matrix);
    let currentNode = Object.keys(matrix)[0];
    let elements = [];
    let queue = [+currentNode];
    while (currentNode) {
      let lastElement = queue[queue.length - 1];
      elements.push(lastElement);
      queue.pop();
      if (matrix[lastElement]) queue.push(...matrix[lastElement]);

      currentNode = queue[queue.length - 1];
      if (this.checkIsPresent(elements, currentNode)) {
        for (
          let i = currentNode;
          this.checkIsPresent(elements, currentNode);
          i--
        ) {
          queue.pop();

          currentNode = queue[queue.length - 1];
        }
      }
    } // end of while loop

    return elements;
  }
}

const dfs = new DFS();
dfs.insert(0, 1);
dfs.insert(0, 2);
console.log(dfs.printPath());
