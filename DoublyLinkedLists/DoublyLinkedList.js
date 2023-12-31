import Node from "../DoublyLinkedLists/Node.js";

export default class DoublyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
    this.length = 0;
  }

  getAt(index) {
    if (index >= this.length || index < 0) {
      throw new Error(
        "Index should be positive & strictly lower than " + this.length
      );
    }
    let node = this.head;
    if (!node) {
      return null;
    }
    if (index === 0) {
      return node;
    }
    let c = 0;
    while (node.next) {
      if (c === index) {
        return node;
      }
      node = node.next;
      c++;
    }
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      newNode.prev = node;
      node.next = newNode;
      this.tail = node.next;
    }
    this.length++;
    return this;
  }

  pop(index = -1) {
    if (index >= this.length) {
      throw new Error(
        "Index should be positive & strictly lower than " + this.length
      );
    }
    if (this.length === 0) {
      return this;
    }
    let node = this.head;
    if (index === 0) {
      this.head = node.next;
    }
    let c = 0;
    if (index === -1) { // Remove the last one
      let penultimateNode = this.tail.prev;
      penultimateNode.next = null;
      this.tail = penultimateNode;
      this.length--;
      return this;
    }
    while (node && node.next) {
      let nextNode = node.next;
      if (c + 1 === index) { // Ignore next node
        node.next = nextNode?.next || null;
      }
      node = node.next;
      c++;
    }
    this.tail = node;
    this.length--;
    return this;
  }

  insert(data, index = 0) {
    if (index >= this.length) {
      throw new Error(
        "EIndex should be strictly lower than " + this.length
      );
    }
    const newNode = new Node(data);
    let c = 0;
    let node = this.head;
    while (node && node.next) {
      if (c === index) {
        const nextNode = node; // Current node is going to be the next
        newNode.prev = node.prev;
        node = newNode;
        node.next = nextNode;
      }
      node = node.next;
      c++;
    }
    this.tail = node;
    this.length++;
    return this;
  }

  unshift(data) {
    const newNode = new Node(data);
    let node = newNode;
    if (!this.head) {
      this.head = newNode;
    } else {
      const oldHead = this.head;
      node.next = oldHead;
      this.head = node;
      oldHead.prev = this.head;
      while (node.next) {
        node = node.next;
      }
    }
    this.tail = node;
    this.length++;
    return this;
  }

  findIndex(data) {
    let node = this.head;
    if (!node) {
      return -1;
    }
    let c = 0;
    while (node.next) {
      if (node.data === data) {
        return c;
      }
      node = node.next;
      c++;
    }
    return -1;
  }

  print() {
    let str = "";
    let node = this.head;
    if (this.length === 0) {
      str = "(empty)";
    } else if (this.length === 1) {
      str = node.toString();
    } else {
      str = node.toString();
      while (node && node.next) {
        node = node.next;
        str += ", " + node.toString();
      }
    }
    console.log(str + " | length: " + this.length);
  }
}
