const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

 const { ListNode } = require('../extensions/list-node.js');

module.exports = 
function removeKFromList(l, k) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // return l.filter(el => el != k);
  // debugger
  let resArr = [];
  // let prev = l;
  var curr = l;
  while(curr.next !== null){
    if (curr.value != k){
      resArr.push(curr.value);
    }
    curr = curr.next;
  }
  if (curr.value != k){
    resArr.push(curr.value);
  }

  return convertArrayToList(resArr);
}



function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

// let l = [3, 1, 2, 3, 4, 5] 
// let k = 3
// debugger
// console.log(removeKFromList(convertArrayToList(l), k));
// the output should be [1, 2, 4, 5]
