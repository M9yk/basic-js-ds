const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
const { ListNode } = require("../extensions/list-node.js");
class Queue {
  head = null;
  end = null;
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.head === null) {
      this.head = new ListNode(value);
      this.end = this.head;
    } else {
      let newNode = new ListNode(value);
      if (this.head.next === null) {
        this.head.next = newNode;
        this.end = newNode;
      } else {
        this.end.next = newNode;
        this.end = this.end.next;
      }
    }
  }

  dequeue() {
    let res = this.head.value;
    this.head = this.head.next;
    return res;
  }
}

module.exports = {
  Queue,
};
