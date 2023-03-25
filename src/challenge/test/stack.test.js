const Stack = require("../stack");

describe("Stack", () => {
  let stak;
  beforeEach(() => {
    stak = new Stack();
  });

  it("inits with empty array", () => {
    expect(stak.stack.length).toBe(0);
  });

  it("if push one item, it should be positioned last of the array", () => {
    stak.push(33);
    expect(stak.stack[stak.stack.length - 1]).toBe(33);
  });

  it("if pop the stack, it should be deleted last item", () => {
    stak.push(23);
    stak.push("hi");
    stak.push(1);
    stak.pop();
    expect(stak.stack.length).toBe(2);
    expect(stak.stack[stak.stack.length - 1]).toBe("hi");
  });
});
