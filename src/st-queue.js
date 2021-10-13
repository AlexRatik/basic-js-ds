const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

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
module.exports = class Queue {
    qu = null;

    getUnderlyingList() {
        return this.qu;
    }

    enqueue(value) {
        let newNode = new ListNode(value);
        if (this.qu === null) {
            this.qu = newNode;
        } else {
            this.insertNode(this.qu, newNode);
        }
    }

    insertNode(node, newNode) {
        if (node.next === null) {
            node.next = newNode;
        } else {
            this.insertNode(node.next, newNode);
        }
    }

    dequeue() {
        let deletedNode = this.qu;
        this.qu = this.qu.next;
        return deletedNode.value;
    }
};
