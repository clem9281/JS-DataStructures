const { Stack } = require("./index");

describe("Stack", () => {
  let s;
  beforeEach(() => {
    s = new Stack();
  });

  it("should return 0 for empty queue", () => {
    expect(s.len()).toBe(0);
  });
  it("should return the correct length after push", () => {
    expect(s.len()).toBe(0);
    s.push(2);
    expect(s.len()).toBe(1);
    s.push(4);
    expect(s.len()).toBe(2);
    s.push(6);
    s.push(8);
    s.push(10);
    s.push(12);
    s.push(14);
    s.push(16);
    s.push(18);
    expect(s.len()).toBe(9);
  });
  it("should return None and have length of 0 on empty dequeue", () => {
    expect(s.pop()).toBeNull();
    expect(s.len()).toBe(0);
  });
  it("should respect order", () => {
    s.push(100);
    s.push(101);
    s.push(105);
    expect(s.pop()).toBe(105);
    expect(s.len()).toBe(2);
    expect(s.pop()).toBe(101);
    expect(s.len()).toBe(1);
    expect(s.pop()).toBe(100);
    expect(s.len()).toBe(0);
    expect(s.pop()).toBeNull();
    expect(s.len()).toBe(0);
  });
});
