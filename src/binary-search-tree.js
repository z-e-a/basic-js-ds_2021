const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
      this.data = data; // node value
      this.left = null;   // left node child reference
      this.right = null; // right node child reference
  }
}
module.exports = class BinarySearchTree {

  constructor(){
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this._root){
      this._root = newNode;
    } else {
      this.insertNode(this._root, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    return this.search(this._root, data);
  }

  search(node, data) {
    if (node === null) {
        return null;
    } else if (data < node.data) {
        return this.search(node.left, data);
    } else if (data > node.data) {
        return this.search(node.right, data);
    } else {
        return node;
    }
  }

  remove(data) {
    if (this.has(data)){
      this.removeNode(this._root, data);
      return true;
    } else {
      return false;
    }
  }

  removeNode(node, data) {
    if (node === null) {
        return null;
    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
    } else {
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }
        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
  }

  min() {
    let minimalNode = this.minNode(this._root);
    return minimalNode.data;
  }

  minNode(node) {
    if (node.left === null)
        return node;
    else
        return this.minNode(node.left);
  }

  max() {
    let maximumNode = this.maxNode(this._root);
    return maximumNode.data;
  }

  maxNode(node) {
    if (node.right === null)
        return node;
    else
        return this.maxNode(node.right);
  }

}