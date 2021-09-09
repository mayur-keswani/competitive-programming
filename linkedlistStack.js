//codesandbox : https://codesandbox.io/s/linkedlist-stack-6lck6?file=/src/index.js:0-996

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    let newNode = { value: value, next: null };
    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
  }

  popByValue(value) {
    if (!this.top) {
      throw new Error("");
    } else {
      if (this.top.value === value) {
        this.top = this.top.next;
      }
      let currentNode = this.top;
      while (currentNode) {
        if (currentNode.next.value === value) {
          console.log(currentNode.next.next);
          currentNode.next = currentNode.next.next;
        }
        currentNode = currentNode.next;
      }
    }
  }

  toArray() {
    let elements = [];
    let currentNode = this.top;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements;
  }
}

const stack = new Stack();
stack.push("1");
stack.push("2");
stack.push("3");
stack.push("1");
stack.popByValue("1");
console.log(stack.toArray());
