// https://codesandbox.io/s/linklisttree-l9b1x?file=/src/index.js

class Tree {
  constructor() {
    this.rootNode = null;
    this.elements = [];
  }
  insertNode(value) {
    const newNode = {
      left: null,
      value: value,
      right: null
    };
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }
    let currentNode = this.rootNode;
    let parentNode;
    while (currentNode) {
      parentNode = currentNode;
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    if (value < parentNode.value) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }
  }

  searchNode(node, value) {
    if (+node.value === +value) {
      return node;
    }

    if (value < node.value) {
      if (node.left) return this.searchNode(node.left, value);
      else return "Not Present";
    } else if (value > node.value) {
      if (node.right) {
        return this.searchNode(node.right, value);
      } else {
        return "Not Present";
      }
    }
  }

  findSuccessor(subTree) {
    if (subTree.left) {
      return subTree.left;
    } else if (subTree.right) {
      return subTree.right;
    } else {
      return null;
    }
  }
  deleteNode(node, value, parentNode = null) {
    // one child
    // two child
    // left node

    if (value < node.value) {
      return this.deleteNode(node.left, value, node);
    } 
    else if (value > node.value) {
      return this.deleteNode(node.right, value, node);
    } 
    else if (value === node.value) {
      // CASE (i)  : 2 child
      
      if (node.left !== null && node.right !== null) {
       
        let successorValue = node.left.value;

        node.value = successorValue;
        node.left.value = null
        console.log( node)
        return this.deleteNode(node.left, null, node);
      }

      // CASE (ii)  : 1 child
      if (node.left || node.right) {
        if (node.value > parentNode.value) {
          parentNode.right = node.left || node.right;
        } else {
          parentNode.left = node.left || node.right;
        }
        node = null;
		return
      }

      // CASE 3   : 0 child
      else {
		
        if (node.value > parentNode.value) {
          parentNode.right = null;
        } else {
		  
          parentNode.left = null;
        }
		console.log(parentNode)
        node = null;
		return
      }
    }
  }



  toArray(root) {
    if (root) {
      this.elements.push(root);
      this.toArray(root.left);
      this.toArray(root.right);
    }
    return this.elements;
  }
}

const tree = new Tree();
tree.insertNode(10);

tree.insertNode(5);
tree.insertNode(15);

tree.insertNode(2);
tree.insertNode(7);

tree.insertNode(1);
tree.insertNode(3);
tree.insertNode(6);

/*
          10
       5      15
    2     7
  1  3   6  

  10 5 2 1 3 7 6  15
  */

tree.deleteNode(tree.rootNode, 1);
// console.log(tree.searchNode(tree.rootNode, 9));
console.log("Updated Array");
console.log(tree.toArray(tree.rootNode).map((elem) => elem.value));
