const { ListNode, DoublyLinkedList } = require("./index");

describe("ListNode", () => {
  let node;
  let dll;
  beforeEach(() => {
    node = new ListNode(1);
    dll = new DoublyLinkedList(node);
  });

  it("should delete itself", () => {
    const node1 = new ListNode(3);
    const node2 = new ListNode(4);
    const node3 = new ListNode(5);

    node1.next = node2;
    node2.next = node3;
    node2.prev = node1;
    node3.prev = node2;

    node2.delete();

    expect(node1.next).toBe(node3);
    expect(node3.prev).toBe(node1);
  });
  it("should insert a node before itself", () => {
    node.insertBefore(0);
    expect(node.prev.value).toBe(0);
  });
  it("should insert a node after itself", () => {
    node.insertAfter(2);
    expect(node.next.value).toBe(2);
  });
});

describe("DoublyLinkedList", () => {
  let node;
  let dll;

  beforeEach(() => {
    node = new ListNode(1);
    dll = new DoublyLinkedList(node);
  });

  it("should add to head", () => {
    expect(dll.head.value).toBe(1);

    dll.addToHead(10);
    expect(dll.head.value).toBe(10);
    expect(dll.head.next.value).toBe(1);
    expect(dll.len()).toBe(2);
  });

  it("should remove an item from the tail", () => {
    dll.removeFromTail();
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.len()).toBe(0);

    dll.addToTail(33);
    expect(dll.head.value).toBe(33);
    expect(dll.tail.value).toBe(33);
    expect(dll.len()).toBe(1);
    expect(dll.removeFromTail()).toBe(33);
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.len()).toBe(0);

    dll.addToTail(68);
    expect(dll.len()).toBe(1);
    expect(dll.removeFromTail()).toBe(68);
    expect(dll.len()).toBe(0);

    dll.addToTail(33);
    expect(dll.head.value).toBe(33);
    expect(dll.tail.value).toBe(33);
    expect(dll.len()).toBe(1);

    dll.addToTail(66);
    expect(dll.head.value).toBe(33);
    expect(dll.tail.value).toBe(66);
    expect(dll.len()).toBe(2);
    expect(dll.removeFromTail()).toBe(66);
    expect(dll.head.value).toBe(33);
    expect(dll.tail.value).toBe(33);
    expect(dll.len()).toBe(1);
  });

  it("should remove an item from the head", () => {
    dll.removeFromHead();
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.len()).toBe(0);

    dll.addToHead(2);
    expect(dll.head.value).toBe(2);
    expect(dll.tail.value).toBe(2);
    expect(dll.len()).toBe(1);
    expect(dll.removeFromHead()).toBe(2);
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.len()).toBe(0);

    dll.addToHead(55);
    expect(dll.len()).toBe(1);
    expect(dll.removeFromHead()).toBe(55);
    expect(dll.len()).toBe(0);

    dll.addToHead(2);
    expect(dll.head.value).toBe(2);
    expect(dll.tail.value).toBe(2);
    expect(dll.len()).toBe(1);
    dll.addToHead(4);
    expect(dll.head.value).toBe(4);
    expect(dll.tail.value).toBe(2);
    expect(dll.len()).toBe(2);
    expect(dll.removeFromHead()).toBe(4);
    expect(dll.head.value).toBe(2);
    expect(dll.tail.value).toBe(2);
    expect(dll.len()).toBe(1);
  });

  it("should add to tail", () => {
    expect(dll.tail.value).toBe(1);
    expect(dll.len()).toBe(1);

    dll.addToTail(30);
    expect(dll.tail.prev.value).toBe(1);
    expect(dll.tail.value).toBe(30);
    expect(dll.len()).toBe(2);

    dll.addToTail(20);
    expect(dll.tail.prev.value).toBe(30);
    expect(dll.tail.value).toBe(20);
    expect(dll.len()).toBe(3);
  });

  it("should move a node to the end", () => {
    dll.addToHead(40);
    expect(dll.tail.value).toBe(1);
    expect(dll.head.value).toBe(40);
    dll.moveToEnd(dll.head);
    expect(dll.tail.value).toBe(40);
    expect(dll.tail.prev.value).toBe(1);
    expect(dll.len()).toBe(2);

    dll.addToTail(4);

    dll.moveToEnd(dll.head.next);
    expect(dll.tail.value).toBe(40);
    expect(dll.tail.prev.value).toBe(4);
    expect(dll.len()).toBe(3);
  });

  it("should move a node to the front", () => {
    dll.addToTail(3);
    expect(dll.head.value).toBe(1);
    expect(dll.tail.value).toBe(3);

    dll.moveToFront(dll.tail);
    expect(dll.head.value).toBe(3);
    expect(dll.head.next.value).toBe(1);
    expect(dll.len()).toBe(2);

    dll.addToHead(29);
    dll.moveToFront(dll.head.next);
    expect(dll.head.value).toBe(3);
    expect(dll.head.next.value).toBe(29);
    expect(dll.len()).toBe(3);
  });

  it("should delete a node", () => {
    dll.delete(node);
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.len()).toBe(0);

    dll.addToTail(1);
    dll.addToHead(9);
    dll.addToTail(6);

    dll.delete(dll.head);
    expect(dll.head.value).toBe(1);
    expect(dll.tail.value).toBe(6);
    expect(dll.len()).toBe(2);

    dll.delete(dll.head);
    expect(dll.head.value).toBe(6);
    expect(dll.tail.value).toBe(6);
    expect(dll.len()).toBe(1);
  });

  it("should return its maximum value", () => {
    expect(dll.getMax()).toBe(1);
    dll.addToTail(100);
    expect(dll.getMax()).toBe(100);
    dll.addToTail(55);
    expect(dll.getMax()).toBe(100);
    dll.addToTail(101);
    expect(dll.getMax()).toBe(101);

    let negativedll = new DoublyLinkedList();
    negativedll.addToTail(-5);

    negativedll.addToTail(-4);
    expect(negativedll.getMax()).toBe(-4);
    negativedll.addToTail(-3);
    expect(negativedll.getMax()).toBe(-3);
  });
});
