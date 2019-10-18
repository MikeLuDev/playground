class Stack {
  constructor() {
    this.items = [];
  }

  pop() {
    if (this.isEmpty()) throw new RangeError('Stack is empty');
    return this.items.pop();
  }

  push(item) {
    return this.items.push(item);
  }

  peek() {
    if (this.isEmpty()) throw new RangeError('Stack is empty');
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
myStack.pop();
myStack.pop();

console.log(myStack.isEmpty());
