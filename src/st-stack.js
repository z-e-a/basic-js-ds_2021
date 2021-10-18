const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 module.exports =  class Stack {
   constructor(){
     this._array =[];
   }

  push(element) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this._array.push(element);
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this._array.pop();
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this._array[this._array.length-1];
  }
}

// debugger
// let stack = new Stack();
// stack.push(1); // adds the element to the stack
// console.log(stack.peek()); // returns the peek, but doesn't delete it, returns 1
// console.log(stack.pop()); // returns the top element from stack and deletes it, returns 1
// console.log(stack.pop()); // undefined