const { BinarySearchTree } = require("./index");

describe("BinarySearchTree", () => {
  let bst;
  const log = jest.fn();
  beforeEach(() => {
    bst = new BinarySearchTree(5);
  });
  beforeAll(() => {
    global.console = { log };
  });

  it("should insert elements", () => {
    bst.insert(2);
    bst.insert(3);
    bst.insert(7);
    bst.insert(6);
    expect(bst.left.right.value).toBe(3);
    expect(bst.right.left.value).toBe(6);
  });
  it("should contain elements it has inserted", () => {
    bst.insert(2);
    bst.insert(3);
    bst.insert(7);
    expect(bst.contains(7)).toBe(true);
    expect(bst.contains(8)).toBe(false);
  });
  it("should get the maximum value", () => {
    expect(bst.getMax()).toBe(5);
    bst.insert(30);
    expect(bst.getMax()).toBe(30);
    bst.insert(300);
    bst.insert(3);
    expect(bst.getMax()).toBe(300);
  });
  it("should run a callback on every element in the tree", () => {
    let arr = [];
    let cb = x => arr.push(x);

    let v1 = Math.floor(Math.random() * 101);
    let v2 = Math.floor(Math.random() * 101);
    let v3 = Math.floor(Math.random() * 101);
    let v4 = Math.floor(Math.random() * 101);
    let v5 = Math.floor(Math.random() * 101);

    bst.insert(v1);
    bst.insert(v2);
    bst.insert(v3);
    bst.insert(v4);
    bst.insert(v5);

    bst.forEach(cb);

    expect(arr.includes(5)).toBe(true);
    expect(arr.includes(v1)).toBe(true);
    expect(arr.includes(v2)).toBe(true);
    expect(arr.includes(v3)).toBe(true);
    expect(arr.includes(v4)).toBe(true);
    expect(arr.includes(v5)).toBe(true);
  });
  it("should print every element in the tree", () => {
    let bst2 = new BinarySearchTree(1);
    bst2.insert(8);
    bst2.insert(5);
    bst2.insert(7);
    bst2.insert(6);
    bst2.insert(3);
    bst2.insert(4);
    bst2.insert(2);

    bst2.inOrderPrint(bst2);
    expect(log).toHaveBeenNthCalledWith(1, 1);
    expect(log).toHaveBeenNthCalledWith(2, 2);
    expect(log).toHaveBeenNthCalledWith(3, 3);
    expect(log).toHaveBeenNthCalledWith(4, 4);
    expect(log).toHaveBeenNthCalledWith(5, 5);
    expect(log).toHaveBeenNthCalledWith(6, 6);
    expect(log).toHaveBeenNthCalledWith(7, 7);
    expect(log).toHaveBeenNthCalledWith(8, 8);

    bst2.bftPrint(bst2);
    expect(log).toHaveBeenNthCalledWith(9, 1);
    expect(log).toHaveBeenNthCalledWith(10, 8);
    expect(log).toHaveBeenNthCalledWith(11, 5);
    expect(log).toHaveBeenNthCalledWith(12, 3);
    expect(log).toHaveBeenNthCalledWith(13, 7);
    expect(log).toHaveBeenNthCalledWith(14, 2);
    expect(log).toHaveBeenNthCalledWith(15, 4);
    expect(log).toHaveBeenNthCalledWith(16, 6);

    bst2.dftPrint(bst2);
    expect(log).toHaveBeenNthCalledWith(17, 1);
    expect(log).toHaveBeenNthCalledWith(18, 8);
    expect(log).toHaveBeenNthCalledWith(19, 5);
    expect(log).toHaveBeenNthCalledWith(20, 7);
    expect(log).toHaveBeenNthCalledWith(21, 6);
    expect(log).toHaveBeenNthCalledWith(22, 3);
    expect(log).toHaveBeenNthCalledWith(23, 4);
    expect(log).toHaveBeenNthCalledWith(24, 2);
  });
});
