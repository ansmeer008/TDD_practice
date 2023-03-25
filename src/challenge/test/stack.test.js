const Stack = require("../stack");

//테스트를 진행할 때는 Stack에서 제공하는 API만을 가지고 해야함.
//내가 구현했던 코드는 array라는 Stack의 내부 구현사항을 가지고 테스트를 했엇음.

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
