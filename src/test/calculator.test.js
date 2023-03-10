const Calculator = require("../calculator");

//describe를 이용하면 여러 테스트 코드를 묶어서 작성할 수 있다.
//it은 Caltulator 테스트를 가리치는 삼인칭이라고 생각하면 됨.

//const cal = new Calculator 가 반복되므로 it 바깥으로 꺼내서 사용하고자 할 수 있지만
//각 테스트들은 독립적으로 동작하는 것이 중요하므로 이전에 호출한 object가 다음에 영향을 미치지 않게 해야 함.
//이럴 때 사용할 수 있는 게 beforeEach()와 afterEach()이다.

//+@ beforeAll, afterAll과 같이 모든 테스트가 시작되기 전이나 후에 행동을 설정해줄 수 있는 함수도 존재한다!

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("adds", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it("substracts", () => {
    cal.substract(1);
    expect(cal.value).toBe(-1);
  });

  it("multiplies", () => {
    cal.set(9);
    cal.multiply(4);
    expect(cal.value).toBe(36);
  });

  describe("divides", () => {
    it("0/0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("4 / 4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
