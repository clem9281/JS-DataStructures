const { LRUCache } = require("./index");

describe("LRUCache", () => {
  let cache;
  beforeEach(() => {
    cache = new LRUCache(3);
  });

  it("should overwrite appropriately", () => {
    cache.set("item1", "a");
    cache.set("item2", "b");
    cache.set("item3", "c");

    cache.set("item2", "z");

    expect(cache.get("item1")).toBe("a");
    expect(cache.get("item2")).toBe("z");
  });
  it("should contain elements it has inserted", () => {
    cache.set("item1", "a");
    cache.set("item2", "b");
    cache.set("item3", "c");

    expect(cache.get("item1")).toBe("a");
    cache.set("item4", "d");

    expect(cache.get("item1")).toBe("a");
    expect(cache.get("item3")).toBe("c");
    expect(cache.get("item4")).toBe("d");
    expect(cache.get("item2")).toBeNull();
  });
  it("should return null when we try to 'get' from an empty cache", () => {
    expect(cache.get("nonexistent")).toBeNull();
  });
});
