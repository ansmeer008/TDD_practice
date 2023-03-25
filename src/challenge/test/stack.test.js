const Stack = require("../stack");

describe("Stack", () => {
  let stak;
  beforeEach(() => {
    stak = new Stack();
  });

  it("is created empty", () => {
    expect(stak.size()).toBe(0);
  });

  it("allows to push item", () => {
    stak.push(33);
    expect(stak.size()).toBe(1);
  });

  describe("pop", () => {
    it("throws an error if stack is empty", () => {
      expect(() => {
        stak.pop();
      }).toThrow("Stack is empty");
    });

    it("returns the last pushed item and remove it from the stack", () => {
      stak.push("banana");
      stak.push("apple");
      expect(stak.pop()).toBe("apple");
      expect(stak.size()).toBe(1);
    });
  });

  describe("peek", () => {
    it("throws an error if stack is empty", () => {
      expect(() => {
        stak.peek();
      }).toThrow("Stack is empty");
    });

    it("returns the last pushed item but keeps it in the stack", () => {
      stak.push("banana");
      stak.push("apple");
      expect(stak.peek()).toBe("apple");
      expect(stak.size()).toBe(2);
    });
  });
});
