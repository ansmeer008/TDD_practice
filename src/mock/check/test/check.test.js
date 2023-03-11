const check = require("../check");

describe("check", () => {
  let onSucess;
  let onFail;

  //mock 함수를 이용해서 테스트를 작성해주면
  //우리가 함수를 직접 구현하지 않아도 mock 함수를 이용할 수 있고,
  //좀 더 간편하게 검증 가능한 API들을 사용할 수도 있다 (toHaveBeenCalledTimes 등)
  beforeEach(() => {
    onSucess = jest.fn();
    onFail = jest.fn();
  });

  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSucess, onFail);

    // expect(onSucess.mock.calls.length).toBe(1)는 아래와 같이 API 이용해 테스트도 가능.
    expect(onSucess).toHaveBeenCalledTimes(1);
    // expect(onSucess.mock.calls[0][0]).toBe("yes")도 아래와 같이 표현 가능.
    expect(onSucess).toHaveBeenCalledWith("yes");
    // expect(onFail.mock.calls.length).toBe(0)도 아래와 같이 변경
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it("should call onFail when predicate is false", () => {
    check(() => false, onSucess, onFail);

    expect(onSucess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenCalledWith("no");
    expect(onFail).toHaveBeenCalledTimes(1);
  });
});
