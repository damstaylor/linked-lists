export default class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }

  toString() {
    return `(${this.prev?.data || null})${this.data}(${this.next?.data || null})`;
  }
}
  