export default class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  toString() {
    return this.data + "(" + (this.next?.data || null) + ")";
  }
}
  