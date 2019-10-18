// Basic linked list node
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// !! What is a symbol and why is it used?
const head = Symbol('head');

class LinkedList {
  constructor() {
    this[head] = null;
  }

  // Add data to end of list
  // Time complexity: O(n) where n is the length of the list
  add(data) {
    // Create new node from data
    const newNode = new ListNode(data);

    // Special case if list is empty, just make make it the first node
    if (this[head] === null) {
      this[head] = newNode;
    } else {
      let current = this[head];

      // Find last node
      while (current.next !== null) {
        current = current.next;
      }

      // Assign new node at the end of the list
      current.next = newNode;
    }
  }

  // Get data by index
  // Time complexity: O(n)
  get(index) {
    // Ensure the index is greater or equal to 0
    // Add support for negative indices?
    if (index >= 0) {
      let current = this[head];
      let i = 0;

      while (current !== null && i < index) {
        current = current.next;
        i += 1;
      }

      return current !== null ? current.data : undefined;
    } else {
      return undefined;
    }
  }

  // Get data by index
  // Time complexity: O(n)
  remove(index) {
    // If list is empty or index is invalid, throw an error
    if (this.head === null || index <= 0) {
      throw new RangeError(`Index ${index} does not exist in the list`);
    }

    // Special case for the first node
    if (index === 0) {
      const data = this[head].data;
      this[head] = this[head].next;
      return data;
    }

    let current = this[head];
    let previous = null;
    let i = 0;

    while (current !== null && i < index) {
      previous = current;
      current = current.next;
      i += 1;
    }

    if (current !== null) {
      previous.next = current.next;
      return current.data;
    } else {
      throw new RangeError(`Index ${index} does not exist in list`);
    }
  }

  *values() {
    let current = this[head];

    while (current !== null) {
      yield current.data;
      current = current.next;
    }
  }

  [Symbol.iterator]() {
    return this.values();
  }
}

/** Testing Grounds */
const myList = new LinkedList();

myList.add(42);
myList.add(123);
myList.add(2);
myList.add(55);

let current = myList[head];

while (current !== null) {
  console.log(current.data);
  current = current.next;
}

/* for (const data of myList) {
  console.log(data);
}

const toArray = [...myList];
console.log(toArray); */
