# linked-lists

Linked lists are data structures used to organize and store an ordered collection of elements, such as numbers or objects. Their particularity is that each collection element can be accessed through a reference from another element.

## 1. Single-linked Lists

In a single-linked list, each element in the list is called a "node."
Each node contains two fields: one to store the actual data, and another to store a reference (or link) to the next node in the sequence.
The last node in the list has a reference pointing to a special value (often null or a sentinel) to indicate the end of the list.

Here's a simple representation:

[Data1] -> [Data2] -> [Data3] -> ... -> [LastData] -> [null]


## 2. Double-linked lists

In a double-linked list, each node has not only a reference to the next node but also a reference to the previous node.
This allows for more flexibility in traversing the list in both directions (forward and backward).
The first node's previous reference and the last node's next reference typically point to null or a sentinel to signify the boundaries.

Here's a simple representation:

[null] <- [Data1] <-> [Data2] <-> [Data3] <-> ... <-> [LastData] -> [null]

## Key Differences:

- In a single-linked list, you can only traverse the list in one direction (forward).
- In a double-linked list, you can traverse the list in both directions (forward and backward) because each node has references to both the next and previous nodes.
