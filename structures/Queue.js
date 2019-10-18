/**
 * @class Queue
 * FIFO ordering, like a ticket queue
 * Methods: add(), remove(), peek(), isEmpty()
 */

class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  add(data) {
    const node = new QueueNode(data);

    if (this.last !== null) this.last.next = node;
    this.last = node;

    if (this.isEmpty()) this.first = this.last;
  }

  remove() {
    if (this.isEmpty()) throw new Error('No such element');

    const data = this.first.data;
    this.first = this.first.next;

    if (this.isEmpty()) this.last = null;

    return data;
  }

  peek() {
    if (this.isEmpty()) throw new Error('No such element');
    return this.first.data;
  }

  isEmpty() {
    return this.first === null;
  }
}

const myQueue = new Queue();

myQueue.add(1);
myQueue.add(2);
myQueue.add(3);

myQueue.remove();
myQueue.remove();
myQueue.remove();

console.log(myQueue.peek());
