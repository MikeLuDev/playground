/** Stacks
 * Just what they sound like -  a stack of data
 * Like playing cards
 * LIFO - last in, first out
 * Methods: pop(), push(), peek(), isEmpty()
 * Unline array, NOT constant time access to nth item
 * But, constant time insertion/removal (no shifting)
 * Note: stacks can also be implemented using a linked list
 * if elements are inserted/removed from the same side
 */

class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  pop() {
    if (this.isEmpty()) throw new RangeError('Stack is empty');

    const item = this.top.data;
    this.top = this.top.next;

    return item;
  }

  push(data) {
    const node = new StackNode(data);

    node.next = this.top;
    this.top = node;
  }

  peek() {
    if (this.isEmpty()) throw new RangeError('Stack is empty');

    return this.top.data;
  }

  isEmpty() {
    return this.top === null;
  }
}

const myStack = new Stack();

/* myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.pop());
console.log(myStack.peek()); */

myStack.push(0);
myStack.push(1);
console.log(myStack.top);

module.exports = Stack;
