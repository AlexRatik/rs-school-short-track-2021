// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.last = null;
    this.head = null;
    this.length = null;
    this.queue = [];
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    if (!this.first) {
      this.first = new ListNode(element);
      this.first.value = element;
      this.first.next = new ListNode(element);
    } else {
      let begunok = this.first;
      while (begunok.next) {
        begunok = begunok.next;
      }
      begunok.next = new ListNode(element);
      begunok.value = element;
    }
  }

  dequeue() {
    let elem = this.first;
    const val = elem.value;
    elem = elem.next;
    this.first = elem;
    return val;
  }
}

module.exports = Queue;
