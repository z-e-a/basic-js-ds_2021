const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
module.exports = class Queue  {

  // constructor(x){
  //   this.value = x;
  //   this.next = null;
  // }

  // constructor(x) {
  //   this.head = ListNode(x);
  //   this.tail = this.head;
  // }

  constructor(){
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // currentNode = this;
    // while (currentNode.next) {
    //   currentNode = currentNode.next;
    // }
    // let newNode = new Queue(value);
    // currentNode.next = newNode;

    if (this.head === null){
      this.head = new ListNode(value);
      this.tail = this.head;
    } else {
      this.tail.next = new ListNode(value);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = this.head.value;
    this.head = this.head.next;
    if (this.head.next !== null){
      this.tail = null;
    }
    return result;
  }

}

// debugger
// const queue = new Queue();
//  queue.enqueue(1); // adds the element to the queue
//  queue.enqueue(3); // adds the element to the queue
//  console.log(queue.dequeue()); // returns the top element from queue and deletes it, returns 1
//  queue.getUnderlyingList() // returns { value: 3, next: null }


// const queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log(queue.dequeue());
// // 5
// console.log(queue.dequeue());
// // 6