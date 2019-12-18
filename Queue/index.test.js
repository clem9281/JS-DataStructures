const { Queue } = require("./index");

describe("Queue", () => {
  let q;
  beforeEach(() => {
    q = new Queue();
  });

  it("should return 0 for empty queue", () => {
    expect(q.len()).toBe(0);
  });
  it("should return the correct length after enqueue", () => {
    expect(q.len()).toBe(0);
    q.enqueue(2);
    expect(q.len()).toBe(1);
    q.enqueue(4);
    expect(q.len()).toBe(2);
    q.enqueue(6);
    q.enqueue(8);
    q.enqueue(10);
    q.enqueue(12);
    q.enqueue(14);
    q.enqueue(16);
    q.enqueue(18);
    expect(q.len()).toBe(9);
  });
  it("should return None and have length of 0 on empty dequeue", () => {
    expect(q.dequeue()).toBeNull();
    expect(q.len()).toBe(0);
  });
  it("should respect order", () => {
    q.enqueue(100);
    q.enqueue(101);
    q.enqueue(105);
    expect(q.dequeue()).toBe(100);
    expect(q.len()).toBe(2);
    expect(q.dequeue()).toBe(101);
    expect(q.len()).toBe(1);
    expect(q.dequeue()).toBe(105);
    expect(q.len()).toBe(0);
    expect(q.dequeue()).toBeNull();
    expect(q.len()).toBe(0);
  });
});
