const add = require("../add");

//test("테스트 이름", 어떤 테스트를 수행할 건지 콜백함수로 전달, 비동기 함수에 한해 얼마만큼의 시간을 허용할 건지 timeout에 대한 정보도 전달 가능)
test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("greater than 10", () => {
  expect(() => {
    add(2, 8);
  }).toThrow("this is not possible");
});
