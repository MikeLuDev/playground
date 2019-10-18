/** Sort Stack
 * Write a program to sort a stack such that the smallest items are on top
 * Make use one additonal stack
 */

const Stack = require('../structures/Stack');

const stackOne = new Stack();
stackOne.push(123);
stackOne.push(22);
stackOne.push(35);
stackOne.push(866);
stackOne.push(2);
stackOne.push(3);
stackOne.push(11);
stackOne.push(1);
stackOne.push(3);
stackOne.push(6);
stackOne.push(2);
stackOne.push(11);

function sortStack(stack, sorted = false, inOrder = true) {
  if (sorted) return stack;

  const stackTwo = new Stack();
  let isSorted = true;

  while (stack !== null) {
    const top = stack.pop();

    if (stack.isEmpty()) {
      stackTwo.push(top);
      break;
    }

    const next = stack.pop();

    const topToStackTwo = () => {
      stackTwo.push(top);
      stack.push(next);
    };

    const nextToStackTwo = () => {
      stackTwo.push(next);
      stack.push(top);
    };

    if (inOrder) {
      if (top >= next) {
        topToStackTwo();
      } else {
        nextToStackTwo();
        isSorted = false;
      }
    } else {
      if (top >= next) {
        nextToStackTwo();
        isSorted = false;
      } else {
        topToStackTwo();
        isSorted = false;
      }
    }
  }

  return sortStack(stackTwo, isSorted, !inOrder);
}

const sorted = sortStack(stackOne);
let current = sorted.top;

while (current !== null) {
  console.log(current.data);
  current = current.next;
}
