const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
const { Node } = require("../extensions/list-tree.js");
class BinarySearchTree {
  head = null;
  root() {
    return this.head;
  }

  add(data) {
    if (this.head === null) this.head = new Node(data);
    else {
      this.searchPlaceAndInsert(this.head, data);
    }
  }

  searchPlaceAndInsert(root, data) {
    if (data > root.data) {
      if (root.right === null) root.right = new Node(data);
      else this.searchPlaceAndInsert(root.right, data);
    } else {
      if (root.left === null) root.left = new Node(data);
      else this.searchPlaceAndInsert(root.left, data);
    }
  }

  has(data) {
    let found = false;
    if (this.head !== null) {
      if (this.head.data === data) found = true;
      else {
        const ret = this.search(this.head, data);
        found = ret === null ? false : true;
      }
    }
    return found;
  }

  search(root, data) {
    if (root === null) return null;
    if (root.data !== data) {
      if (data > root.data) return this.search(root.right, data);
      else return this.search(root.left, data);
    } else return root;
  }

  find(data) {
    let found = null;
    if (this.head !== null) {
      if (this.head.data === data) return this.head;
      else {
        const ret = this.search(this.head, data);
        found = typeof ret === "object" ? ret : null;
      }
    }
    return typeof found === "object" ? found : null;
  }

  remove(data) {
    this.delete(this.head, data);
  }

  delete(root, data) {
    if (root === null) {
      return null;
    }
    if (data < root.data) {
      root.left = this.delete(root.left, data);
      return root;
    } else if (data > root.data) {
      root.right = this.delete(root.right, data);
      return root;
    } else {
      if (root.left === null && root.right === null) {
        root = null;
        return root;
      }

      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      let currNode = root.right;
      while (currNode.left !== null) {
        currNode = currNode.left;
      }
      root.data = currNode.data;

      root.right = this.delete(root.right, currNode.data);
      return root;
    }
  }

  min() {
    let tmp = this.head;
    let min = tmp.data;
    while (tmp.left != null) {
      min = tmp.left.data;
      tmp = tmp.left;
    }
    return min;
  }

  max() {
    let tmp = this.head;
    let max = tmp.data;
    while (tmp.right != null) {
      max = tmp.right.data;
      tmp = tmp.right;
    }
    return max;
  }
}
module.exports = {
  BinarySearchTree,
};
