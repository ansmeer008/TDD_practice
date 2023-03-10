const Calculator = require("../calculator");

test("Calculator의 초기값은 0입니다.", () => {
  const cal = new Calculator();
  expect(cal.value).toBe(0);
});

test("set 매서드를 이용하면 value 값을 설정할 수 있습니다.", () => {
  const cal = new Calculator();
  cal.set(3);
  expect(cal.value).toBe(3);
});

test("clear 매서드를 이용하면 value 값을 0으로 초기화합니다.", () => {
  const cal = new Calculator();
  cal.set(5);
  cal.clear();
  expect(cal.value).toBe(0);
});

test("add 매서드를 이용하면 value 값에 입력 값을 더하기 연산 합니다.", () => {
  const cal = new Calculator();
  cal.set(3);
  cal.add(4);
  expect(cal.value).toBe(7);
});

test("substract 매서드를 이용하면 value 값에 입력 값을 빼기 연산 합니다.", () => {
  const cal = new Calculator();
  cal.set(7);
  cal.substract(2);
  expect(cal.value).toBe(5);
});

test("multiply 매서드를 이용하면 value 값에 입력 값을 곱하기 연산 합니다.", () => {
  const cal = new Calculator();
  cal.set(2);
  cal.multiply(5);
  expect(cal.value).toBe(10);
});

test("divide 매서드를 이용하면 value 값을 입력 값으로 나누기 연산 합니다.", () => {
  const cal = new Calculator();
  cal.set(16);
  cal.divide(2);
  expect(cal.value).toBe(8);
});
